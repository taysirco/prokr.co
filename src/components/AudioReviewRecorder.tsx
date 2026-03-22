'use client';

// ============================================
// 🎤 AudioReviewRecorder — البصمة الصوتية
// Records up to 20s audio with live waveform visualizer
// Anti-abuse: min 2s, max 20s, file size limit 1MB
// ============================================

import { useState, useRef, useEffect, useCallback } from 'react';
import { Mic, Square, RotateCcw, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface AudioReviewRecorderProps {
    companyCode: string;
    businessName: string;
    userEmail: string;
    userPhone: string;
    userName: string;
    onComplete: () => void;
}

type RecorderState = 'idle' | 'requesting' | 'recording' | 'preview' | 'sending' | 'sent' | 'error';

const MAX_DURATION = 20; // seconds
const MIN_DURATION = 2;  // seconds

export default function AudioReviewRecorder({
    companyCode,
    businessName,
    userEmail,
    userPhone,
    userName,
    onComplete,
}: AudioReviewRecorderProps) {
    const [state, setState] = useState<RecorderState>('idle');
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [elapsed, setElapsed] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const startTimeRef = useRef<number>(0);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const animFrameRef = useRef<number>(0);
    const audioContextRef = useRef<AudioContext | null>(null);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            stopEverything();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function stopEverything() {
        if (timerRef.current) clearInterval(timerRef.current);
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(t => t.stop());
        }
        if (audioContextRef.current) {
            audioContextRef.current.close().catch(() => {});
        }
        if (audioUrl) URL.revokeObjectURL(audioUrl);
    }

    // ── Waveform Visualizer ──
    const drawWaveform = useCallback(() => {
        const canvas = canvasRef.current;
        const analyser = analyserRef.current;
        if (!canvas || !analyser) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        function draw() {
            animFrameRef.current = requestAnimationFrame(draw);
            analyser!.getByteTimeDomainData(dataArray);

            const w = canvas!.width;
            const h = canvas!.height;

            ctx!.fillStyle = 'rgba(240, 249, 255, 0.3)';
            ctx!.fillRect(0, 0, w, h);

            ctx!.lineWidth = 2.5;
            // Gradient stroke
            const gradient = ctx!.createLinearGradient(0, 0, w, 0);
            gradient.addColorStop(0, '#0ea5e9');
            gradient.addColorStop(0.5, '#06b6d4');
            gradient.addColorStop(1, '#14b8a6');
            ctx!.strokeStyle = gradient;
            ctx!.beginPath();

            const sliceWidth = w / bufferLength;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const v = dataArray[i] / 128.0;
                const y = (v * h) / 2;
                if (i === 0) ctx!.moveTo(x, y);
                else ctx!.lineTo(x, y);
                x += sliceWidth;
            }

            ctx!.lineTo(w, h / 2);
            ctx!.stroke();
        }

        draw();
    }, []);

    // ── Start Recording ──
    async function startRecording() {
        setErrorMsg('');
        setState('requesting');

        try {
            // ── Feature Detection ──
            // getUserMedia requires HTTPS (or localhost). Check early.
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                setErrorMsg(
                    window.location.protocol === 'http:' && window.location.hostname !== 'localhost'
                        ? 'التسجيل الصوتي يتطلب اتصال HTTPS آمن. يرجى فتح الموقع عبر HTTPS.'
                        : 'متصفحك لا يدعم التسجيل الصوتي. استخدم Chrome أو Safari الأحدث.'
                );
                setState('idle');
                return;
            }

            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    channelCount: 1,
                    // Note: sampleRate omitted — not uniformly supported.
                    // Some mobile browsers reject non-native rates.
                    // STT API uses autoDecodingConfig so any rate works.
                    echoCancellation: true,
                    noiseSuppression: true,
                },
            });

            streamRef.current = stream;

            // Setup waveform analyser (webkitAudioContext for older Safari)
            const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            const audioContext = new AudioCtx();
            audioContextRef.current = audioContext;
            const source = audioContext.createMediaStreamSource(stream);
            const analyser = audioContext.createAnalyser();
            analyser.fftSize = 2048;
            source.connect(analyser);
            analyserRef.current = analyser;

            // Determine best MIME type (ordered preference)
            const mimeOptions = [
                'audio/webm;codecs=opus',
                'audio/webm',
                'audio/mp4;codecs=aac',  // Safari iOS/macOS
                'audio/mp4',
                'audio/ogg;codecs=opus',
            ];
            const mimeType = mimeOptions.find(m => MediaRecorder.isTypeSupported(m)) || '';

            const recorderOptions: MediaRecorderOptions = {
                audioBitsPerSecond: 32000,
            };
            // Only set mimeType if we found a supported one
            // (if empty, let the browser pick its default)
            if (mimeType) recorderOptions.mimeType = mimeType;

            const mediaRecorder = new MediaRecorder(stream, recorderOptions);
            const actualMime = mediaRecorder.mimeType; // what the browser actually chose

            chunksRef.current = [];

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: actualMime || 'audio/webm' });
                setAudioBlob(blob);
                const url = URL.createObjectURL(blob);
                setAudioUrl(url);
                setState('preview');
            };

            mediaRecorder.start(100); // collect data every 100ms
            mediaRecorderRef.current = mediaRecorder;

            setState('recording');
            startTimeRef.current = Date.now();
            setElapsed(0);

            // Start timer
            timerRef.current = setInterval(() => {
                const seconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
                setElapsed(seconds);
                if (seconds >= MAX_DURATION) {
                    stopRecording();
                }
            }, 200);

            // Start waveform
            drawWaveform();
        } catch (err: unknown) {
            console.error('[AudioRecorder] Error:', err);
            // Specific error messages for each failure mode
            if (err instanceof DOMException) {
                switch (err.name) {
                    case 'NotAllowedError':
                        setErrorMsg('يرجى السماح بالوصول للميكروفون من إعدادات المتصفح ثم حاول مرة أخرى');
                        break;
                    case 'NotFoundError':
                        setErrorMsg('لم يتم العثور على ميكروفون. تأكد من توصيل ميكروفون بجهازك.');
                        break;
                    case 'NotReadableError':
                        setErrorMsg('الميكروفون مستخدم من تطبيق آخر. أغلق التطبيق وحاول مرة أخرى.');
                        break;
                    default:
                        setErrorMsg('حدث خطأ في الوصول للميكروفون. حاول مرة أخرى.');
                }
            } else {
                setErrorMsg('يرجى السماح بالوصول للميكروفون لتسجيل تقييمك الصوتي');
            }
            setState('idle');
        }
    }

    // ── Stop Recording ──
    function stopRecording() {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        if (animFrameRef.current) {
            cancelAnimationFrame(animFrameRef.current);
        }

        const duration = Math.floor((Date.now() - startTimeRef.current) / 1000);

        if (duration < MIN_DURATION) {
            setErrorMsg(`التسجيل قصير جداً. سجّل ${MIN_DURATION} ثوانٍ على الأقل`);
            // Reset recorder
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                mediaRecorderRef.current.stop();
            }
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(t => t.stop());
            }
            setState('idle');
            return;
        }

        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(t => t.stop());
        }
        if (audioContextRef.current) {
            audioContextRef.current.close().catch(() => {});
        }
    }

    // ── Reset ──
    function resetRecording() {
        if (audioUrl) URL.revokeObjectURL(audioUrl);
        setAudioBlob(null);
        setAudioUrl(null);
        setElapsed(0);
        setErrorMsg('');
        setState('idle');
    }

    // ── Submit ──
    async function submitAudioReview() {
        if (!audioBlob) return;
        if (rating === 0) {
            setErrorMsg('يرجى اختيار تقييم بالنجوم');
            return;
        }

        // Validate blob size (max 1MB for 20s recording)
        if (audioBlob.size > 1024 * 1024) {
            setErrorMsg('حجم التسجيل كبير جداً (الحد الأقصى 1MB). حاول مرة أخرى.');
            return;
        }

        setState('sending');
        setErrorMsg('');

        try {
            // Get Firebase ID token
            const { getCurrentUser } = await import('@/lib/firebase-auth');
            const currentUser = getCurrentUser();
            const idToken = currentUser ? await currentUser.getIdToken() : null;

            if (!idToken) {
                setErrorMsg('يجب تسجيل الدخول أولاً');
                setState('preview');
                return;
            }

            const formData = new FormData();
            // Use correct file extension based on MIME type
            const ext = audioBlob.type.includes('mp4') ? 'mp4' : audioBlob.type.includes('ogg') ? 'ogg' : 'webm';
            formData.append('audio', audioBlob, `voice-review.${ext}`);
            formData.append('rating', String(rating));
            formData.append('companyCode', companyCode);
            formData.append('email', userEmail);
            formData.append('phone', userPhone);
            formData.append('userName', userName || 'عميل بروكر');
            formData.append('duration', String(elapsed));

            const res = await fetch('/api/audio-review', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${idToken}`,
                },
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) {
                setErrorMsg(data.error || 'حدث خطأ في إرسال التقييم الصوتي');
                setState('preview');
                return;
            }

            setState('sent');
            setTimeout(() => onComplete(), 2000);
        } catch {
            setErrorMsg('حدث خطأ. حاول مرة أخرى.');
            setState('preview');
        }
    }

    // ── Progress ──
    const remaining = MAX_DURATION - elapsed;
    const progress = (elapsed / MAX_DURATION) * 100;

    // ── Sent State ──
    if (state === 'sent') {
        return (
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 text-center">
                <CheckCircle className="w-10 h-10 text-sky-500 mx-auto mb-2" />
                <h4 className="text-sky-900 font-bold text-base mb-1">تم إرسال بصمتك الصوتية بنجاح 🎤✅</h4>
                <p className="text-sky-700 text-sm">شكراً لتقييمك — بصمتك الصوتية موثّقة ومعتمدة</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {/* ── Idle: CTA Button ── */}
            {state === 'idle' && (
                <button
                    onClick={startRecording}
                    className="w-full py-4 bg-gradient-to-l from-teal-500 to-sky-500 text-white font-bold text-sm rounded-xl hover:from-teal-600 hover:to-sky-600 transition-all shadow-lg shadow-sky-200/50 flex items-center justify-center gap-3 group"
                >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mic className="w-4.5 h-4.5" />
                    </div>
                    <span>🎤 قيّم الخدمة بصوتك في 20 ثانية</span>
                </button>
            )}

            {/* ── Requesting Mic Permission ── */}
            {state === 'requesting' && (
                <div className="flex items-center justify-center gap-2 py-4 text-sky-600">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="text-sm font-medium">جارِ طلب إذن الميكروفون...</span>
                </div>
            )}

            {/* ── Recording ── */}
            {state === 'recording' && (
                <div className="bg-gradient-to-br from-sky-50 to-teal-50 border-2 border-sky-200 rounded-2xl p-5 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                            <span className="text-sm font-bold text-gray-800">جارِ التسجيل...</span>
                        </div>
                        <span className="text-sm font-mono text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full">
                            ⏱ {remaining} ث
                        </span>
                    </div>

                    {/* Waveform Canvas */}
                    <canvas
                        ref={canvasRef}
                        width={400}
                        height={60}
                        className="w-full h-[60px] rounded-xl bg-sky-50/50"
                    />

                    {/* Progress Bar */}
                    <div className="w-full bg-sky-100 rounded-full h-2 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-l from-teal-400 to-sky-500 rounded-full transition-all duration-200 ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Stop Button */}
                    <button
                        onClick={stopRecording}
                        className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                        <Square className="w-4 h-4 fill-white" />
                        إيقاف التسجيل
                    </button>
                </div>
            )}

            {/* ── Preview ── */}
            {state === 'preview' && audioUrl && (
                <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-4 shadow-sm">
                    {/* Playback */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-gray-700">🎧 معاينة التسجيل ({elapsed} ثوانٍ)</span>
                        </div>
                        <audio src={audioUrl} controls className="w-full h-10" preload="metadata" />
                    </div>

                    {/* Star Rating */}
                    <div>
                        <label className="block text-gray-700 text-xs font-bold mb-2">التقييم</label>
                        <div className="flex gap-1" dir="ltr">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    className="transition-transform hover:scale-110"
                                >
                                    <svg
                                        className={`w-8 h-8 ${
                                            star <= (hoverRating || rating)
                                                ? 'text-amber-400 fill-amber-400'
                                                : 'text-gray-300'
                                        } transition-colors`}
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    >
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                            fill={star <= (hoverRating || rating) ? 'currentColor' : 'none'}
                                        />
                                    </svg>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <button
                            onClick={resetRecording}
                            className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
                        >
                            <RotateCcw className="w-4 h-4" />
                            إعادة التسجيل
                        </button>
                        <button
                            onClick={submitAudioReview}
                            disabled={rating === 0}
                            className="flex-1 py-3 bg-gradient-to-l from-sky-500 to-teal-500 text-white font-bold text-sm rounded-xl hover:from-sky-600 hover:to-teal-600 transition-all shadow-lg shadow-sky-200 flex items-center justify-center gap-2 disabled:opacity-60"
                        >
                            <Mic className="w-4 h-4" />
                            إرسال البصمة الصوتية
                        </button>
                    </div>
                </div>
            )}

            {/* ── Sending ── */}
            {state === 'sending' && (
                <div className="flex flex-col items-center gap-3 py-6 text-sky-600">
                    <Loader2 className="w-8 h-8 animate-spin" />
                    <span className="text-sm font-medium">جارِ رفع وتفريغ التسجيل بالذكاء الاصطناعي...</span>
                    <p className="text-xs text-gray-400">قد يستغرق بضع ثوانٍ</p>
                </div>
            )}

            {/* ── Error ── */}
            {errorMsg && (
                <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl p-3">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-xs">{errorMsg}</p>
                </div>
            )}
        </div>
    );
}

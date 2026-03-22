'use client';

// ============================================
// 🎧 AudioReviewPlayer — مشغّل التقييم الصوتي
// Lazy-loaded audio player with transcript display
// Shows verified badge + seekable progress bar
// ============================================

import { useState, useRef, useCallback } from 'react';
import { Play, Pause, Mic } from 'lucide-react';

interface AudioReviewPlayerProps {
    audioUrl: string;
    transcript: string;
    durationSeconds: number;
    confidence?: number;
}

export default function AudioReviewPlayer({
    audioUrl,
    transcript,
    durationSeconds,
    confidence,
}: AudioReviewPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);

    const formatDuration = (s: number) => {
        const mins = Math.floor(s / 60);
        const secs = Math.floor(s % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const ensureAudio = useCallback(() => {
        if (!audioRef.current) {
            const audio = new Audio(audioUrl);
            audio.preload = 'auto';
            audio.addEventListener('ended', () => {
                setIsPlaying(false);
                setProgress(0);
                if (progressInterval.current) {
                    clearInterval(progressInterval.current);
                }
            });
            audio.addEventListener('canplaythrough', () => setIsLoaded(true));
            audioRef.current = audio;
        }
        return audioRef.current;
    }, [audioUrl]);

    const togglePlay = useCallback(() => {
        const audio = ensureAudio();

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
            if (progressInterval.current) {
                clearInterval(progressInterval.current);
            }
        } else {
            audio.play().then(() => {
                setIsPlaying(true);
                progressInterval.current = setInterval(() => {
                    if (audio.duration > 0) {
                        setProgress((audio.currentTime / audio.duration) * 100);
                    }
                }, 100);
            }).catch(() => {
                // Autoplay was prevented
            });
        }
    }, [isPlaying, ensureAudio]);

    const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const audio = ensureAudio();
        if (!audio.duration) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const pct = clickX / rect.width;
        audio.currentTime = pct * audio.duration;
        setProgress(pct * 100);
    }, [ensureAudio]);

    return (
        <div className="space-y-2.5">
            {/* Verified Audio Badge */}
            <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-teal-50 text-teal-700 text-[10px] font-bold rounded-full border border-teal-200">
                    <Mic className="w-3 h-3" />
                    تقييم صوتي مُوثّق
                </span>
                {confidence != null && confidence > 0.8 && (
                    <span className="text-[10px] text-gray-400">
                        دقة التفريغ: {Math.round(confidence * 100)}%
                    </span>
                )}
            </div>

            {/* Transcript */}
            {transcript && (
                <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 rounded-lg p-3 border-r-2 border-teal-400">
                    &ldquo;{transcript}&rdquo;
                </p>
            )}

            {/* Player Controls */}
            <div className="flex items-center gap-3 bg-gradient-to-l from-sky-50 to-teal-50 rounded-xl p-3 border border-sky-100">
                {/* Play/Pause Button */}
                <button
                    onClick={togglePlay}
                    className="w-9 h-9 flex-shrink-0 bg-gradient-to-br from-sky-500 to-teal-500 text-white rounded-full flex items-center justify-center hover:from-sky-600 hover:to-teal-600 transition-all shadow-md shadow-sky-200/50"
                    aria-label={isPlaying ? 'إيقاف' : 'تشغيل'}
                >
                    {isPlaying ? (
                        <Pause className="w-4 h-4 fill-white" />
                    ) : (
                        <Play className="w-4 h-4 fill-white mr-[-1px]" />
                    )}
                </button>

                {/* Progress Bar (seekable) */}
                <div
                    className="flex-1 h-2 bg-sky-100 rounded-full cursor-pointer overflow-hidden"
                    onClick={handleSeek}
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                    <div
                        className="h-full bg-gradient-to-l from-teal-400 to-sky-500 rounded-full transition-all duration-100"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Duration */}
                <span className="text-xs font-mono text-sky-700 flex-shrink-0">
                    {formatDuration(durationSeconds)}
                </span>
            </div>
        </div>
    );
}

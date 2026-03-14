'use client';
import { useState } from 'react';

// 🎯 Price Quick View — فخ الإشارة التفاعلية
// يُشجّع الزائر على التفاعل السريع — تجربة مستخدم محسّنة
export function PriceDisclosure({ avgPrice, unit }: { avgPrice: number; unit: string }) {
    const [revealed, setRevealed] = useState(false);

    return (
        <div
            className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between cursor-pointer hover:bg-emerald-100 transition-colors group"
            onClick={() => setRevealed(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setRevealed(true); }}
            aria-label="اضغط لكشف متوسط السعر"
        >
            <div className="flex items-center gap-3">
                <span className={`text-2xl ${revealed ? '' : 'animate-bounce'}`}>
                    {revealed ? '✅' : '👇'}
                </span>
                <div>
                    <h4 className="font-bold text-emerald-900 text-sm">مؤشر الأسعار المباشر</h4>
                    <p className="text-xs text-emerald-700">
                        {revealed ? 'متوسط التكلفة الفعلية بناءً على عروض أسعار حقيقية' : 'اضغط لكشف متوسط التكلفة الفعلي اليوم'}
                    </p>
                </div>
            </div>

            <div className="bg-white px-4 py-2 rounded-lg font-mono font-black text-lg border border-emerald-100 shadow-inner min-w-[120px] text-center">
                {revealed ? (
                    <span className="text-emerald-700">{avgPrice.toLocaleString('ar-SA')} {unit}</span>
                ) : (
                    <span className="text-slate-300 blur-[4px] select-none transition-all duration-300">0000 ر.س</span>
                )}
            </div>
        </div>
    );
}

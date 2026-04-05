'use client';

import { useCallback } from 'react';
import { Search } from 'lucide-react';

export default function HeroSearch() {
  const openSearch = useCallback(() => {
    window.dispatchEvent(new CustomEvent('open-search'));
  }, []);

  return (
    <div className="relative max-w-xl mx-auto lg:mx-0 lg:mr-0 mb-8">
      <button
        type="button"
        onClick={openSearch}
        aria-label="ابحث عن خدمة أو مدينة"
        className="w-full relative cursor-text group text-right outline-none"
      >
        <div className="relative">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-hover:text-sky-500 group-focus-visible:text-sky-500 transition-colors" />
          <div className="w-full pr-14 pl-32 py-4 bg-white rounded-2xl text-gray-400 shadow-2xl shadow-sky-900/30 ring-1 ring-white/10 group-hover:ring-sky-500/50 group-focus-visible:ring-sky-500 transition-all flex items-center">
            ابحث عن خدمة، مدينة، أو مقال...
          </div>
          <span
            className="absolute left-2 top-1/2 -translate-y-1/2 px-6 py-2.5 text-white font-medium rounded-xl shadow-lg pointer-events-none bg-gradient-to-l from-sky-600 to-sky-700"
          >
            بحث
          </span>
        </div>
      </button>
    </div>
  );
}

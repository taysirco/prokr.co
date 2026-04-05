'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search, X, MapPin, Briefcase, BookOpen, Zap,
  TrendingUp, ArrowLeft, Sparkles, CornerDownLeft,
} from 'lucide-react';
import {
  smartSearch,
  highlightMatch,
  TRENDING_SEARCHES,
  type SearchResult,
} from '@/lib/search-engine';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Icons for each result type
function ResultIcon({ type }: { type: SearchResult['icon'] }) {
  switch (type) {
    case 'composite':
      return (
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
          <Zap className="w-5 h-5" />
        </div>
      );
    case 'city':
      return (
        <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600">
          <MapPin className="w-5 h-5" />
        </div>
      );
    case 'service':
      return (
        <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600">
          <Briefcase className="w-5 h-5" />
        </div>
      );
    case 'article':
      return (
        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
          <BookOpen className="w-5 h-5" />
        </div>
      );
  }
}

// Highlighted text renderer
function HighlightedText({ text, query }: { text: string; query: string }) {
  const segments = highlightMatch(text, query);
  return (
    <>
      {segments.map((seg, i) =>
        seg.highlight ? (
          <mark key={i} className="bg-amber-200/70 text-inherit rounded-sm px-0.5">{seg.text}</mark>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </>
  );
}

// Section label map
const SECTION_LABELS: Record<string, { label: string; color: string }> = {
  composite: { label: '🎯 نتائج مباشرة', color: 'text-emerald-600' },
  synonym: { label: '💡 هل تقصد', color: 'text-purple-600' },
  service: { label: '🔧 الخدمات', color: 'text-sky-600' },
  city: { label: '📍 المدن', color: 'text-violet-600' },
  article: { label: '📚 مقالات', color: 'text-amber-600' },
};

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Debounced search
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 120);
    return () => clearTimeout(timer);
  }, [query]);

  // Compute results
  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    return smartSearch(debouncedQuery);
  }, [debouncedQuery]);

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(-1);
  }, [results]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setDebouncedQuery('');
      setActiveIndex(-1);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);


  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Navigate to result
  const navigateTo = useCallback((href: string) => {
    onClose();
    router.push(href);
  }, [onClose, router]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < results.length) {
        navigateTo(results[activeIndex].href);
      } else if (results.length > 0) {
        navigateTo(results[0].href);
      } else if (query.trim()) {
        navigateTo(`/search?q=${encodeURIComponent(query.trim())}`);
      }
      return;
    }
  }, [activeIndex, results, navigateTo, onClose, query]);

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const item = listRef.current.querySelector(`[data-index="${activeIndex}"]`);
      item?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [activeIndex]);

  // Group results by type for section headers
  const groupedResults = useMemo(() => {
    const groups: { type: string; items: (SearchResult & { globalIndex: number })[] }[] = [];
    const typeOrder = ['composite', 'synonym', 'service', 'city', 'article'];
    let globalIdx = 0;

    for (const type of typeOrder) {
      const items = results
        .filter(r => r.type === type)
        .map(r => ({ ...r, globalIndex: -1 }));

      if (items.length > 0) {
        for (const item of items) {
          item.globalIndex = globalIdx++;
        }
        groups.push({ type, items });
      }
    }

    return groups;
  }, [results]);

  if (!isOpen) return null;

  const showTrending = !query.trim();
  const showNoResults = query.trim() && debouncedQuery.trim() && results.length === 0;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center sm:pt-[12vh] px-0 sm:px-4" role="dialog" aria-modal="true" aria-label="بحث في الموقع">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full sm:max-w-2xl bg-white sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[100dvh] sm:max-h-[75vh]"
        style={{ animation: 'searchModalIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-100 shrink-0">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}>
            <Search className="w-5 h-5 text-white" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="ابحث عن خدمة، مدينة، أو مقال..."
            className="flex-1 text-lg outline-none placeholder-gray-400 bg-transparent min-w-0"
            dir="rtl"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
          />
          {query && (
            <button
              onClick={() => { setQuery(''); inputRef.current?.focus(); }}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
              aria-label="مسح البحث"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors shrink-0 hidden sm:flex"
          >
            <kbd className="px-1.5 py-0.5 bg-gray-100 rounded border border-gray-200 text-xs text-gray-500 font-mono">ESC</kbd>
          </button>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors shrink-0 sm:hidden"
            aria-label="إغلاق البحث"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Results Area */}
        <div ref={listRef} className="overflow-y-auto flex-1 overscroll-contain">
          {/* Trending Searches */}
          {showTrending && (
            <div className="py-4">
              <h3 className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5" />
                عمليات البحث الشائعة
              </h3>
              <div className="space-y-0.5">
                {TRENDING_SEARCHES.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-all group"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-sky-500 group-hover:bg-sky-50 transition-colors">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-gray-900">{item.query}</span>
                    <ArrowLeft className="w-4 h-4 text-gray-300 mr-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {showNoResults && (
            <div className="p-10 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-300" />
              </div>
              <p className="text-gray-500 font-medium mb-2">
                لا توجد نتائج لـ &quot;{query}&quot;
              </p>
              <p className="text-gray-400 text-sm">
                جرب كلمات مختلفة أو تصفح الخدمات والمدن
              </p>
              <Link
                href={`/search?q=${encodeURIComponent(query.trim())}`}
                onClick={onClose}
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-sky-50 text-sky-700 font-medium rounded-xl hover:bg-sky-100 transition-colors text-sm"
              >
                <Search className="w-4 h-4" />
                بحث متقدم في الموقع
              </Link>
            </div>
          )}

          {/* Grouped Results */}
          {groupedResults.map((group) => {
            const sectionInfo = SECTION_LABELS[group.type] || { label: group.type, color: 'text-gray-500' };
            return (
              <div key={group.type} className="py-1">
                <h3 className={`px-4 py-2 text-xs font-bold uppercase tracking-wider ${sectionInfo.color}`}>
                  {sectionInfo.label}
                </h3>
                {group.items.map((result) => {
                  const isActive = result.globalIndex === activeIndex;
                  return (
                    <Link
                      key={result.href}
                      href={result.href}
                      onClick={onClose}
                      data-index={result.globalIndex}
                      className={`flex items-center gap-3 px-4 py-3 transition-all group ${
                        isActive ? 'bg-sky-50 border-r-2 border-sky-500' : 'hover:bg-gray-50'
                      }`}
                      onMouseEnter={() => setActiveIndex(result.globalIndex)}
                      style={{
                        animation: `searchItemIn 0.2s ease-out ${result.globalIndex * 30}ms both`,
                      }}
                    >
                      <ResultIcon type={result.icon} />
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium line-clamp-1 ${isActive ? 'text-sky-700' : 'text-gray-900'}`}>
                          <HighlightedText text={result.title} query={query} />
                        </p>
                        {result.subtitle && (
                          <p className="text-sm text-gray-500 line-clamp-1">{result.subtitle}</p>
                        )}
                      </div>
                      {result.meta && (
                        <span className="text-xs text-gray-400 shrink-0 hidden sm:inline">{result.meta}</span>
                      )}
                      {result.type === 'composite' && (
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full shrink-0">
                          نتيجة مباشرة
                        </span>
                      )}
                      <ArrowLeft className={`w-4 h-4 shrink-0 transition-all ${
                        isActive ? 'text-sky-500 translate-x-0' : 'text-gray-300 translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                      }`} />
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Footer — Keyboard Hints */}
        <div className="px-4 py-2.5 bg-gray-50/80 border-t border-gray-100 text-xs text-gray-400 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white rounded border border-gray-200 text-[10px] font-mono shadow-sm">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-white rounded border border-gray-200 text-[10px] font-mono shadow-sm">↓</kbd>
              <span className="mr-1">للتنقل</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white rounded border border-gray-200 text-[10px] font-mono shadow-sm flex items-center gap-0.5">
                <CornerDownLeft className="w-2.5 h-2.5" />
              </kbd>
              <span className="mr-1">للاختيار</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>بحث ذكي</span>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes searchModalIn {
          from { opacity: 0; transform: scale(0.97) translateY(-8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes searchItemIn {
          from { opacity: 0; transform: translateX(8px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

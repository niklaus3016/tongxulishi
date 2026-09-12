import React from 'react';
import { Search, Compass } from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  onJumpToEra?: (eraId: string) => void;
  activeTab: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onJumpToEra,
  activeTab
}) => {
  const quickEras = [
    { label: '先秦', id: 'legendary' },
    { label: '秦汉', id: 'qin' },
    { label: '魏晋', id: 'three-kingdoms' },
    { label: '隋唐', id: 'sui' },
    { label: '宋元', id: 'north-song' },
    { label: '明清', id: 'ming' },
    { label: '近代', id: 'republic' }
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg border-b border-[#24242A] bg-[#121214]/95 transition-colors">
      {/* Top Status & Brand Bar */}
      <div className="max-w-3xl mx-auto px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center font-serif font-bold text-white shadow-md bg-gradient-to-br from-red-700 to-red-900 border border-red-500/30">
            序
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-serif font-bold tracking-wider text-stone-100">
              通序历史
            </h1>
            <p className="text-[11px] text-stone-400 font-serif leading-none mt-0.5">
              通古今之序 · 明历史之脉
            </p>
          </div>
        </div>

        {/* Search Action Control */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenSearch}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-serif border border-[#32323A] bg-[#1C1C22] hover:bg-[#25252C] text-stone-200 transition-colors shadow-xs"
            aria-label="全局搜索"
          >
            <Search className="w-3.5 h-3.5 text-amber-400/90" />
            <span className="text-stone-300">搜朝代、帝王、纪事...</span>
          </button>
        </div>
      </div>

      {/* Timeline quick jump toolbar (shown on timeline & dynasty tabs) */}
      {(activeTab === 'timeline' || activeTab === 'dynasties') && (
        <div className="relative max-w-3xl mx-auto px-4 pb-2.5">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs">
            <span className="shrink-0 text-stone-400 text-[11px] font-serif flex items-center whitespace-nowrap mr-0.5">
              <Compass className="w-3.5 h-3.5 mr-1 text-amber-400" /> 时代定位:
            </span>
            {quickEras.map(era => (
              <button
                key={era.id}
                onClick={() => onJumpToEra && onJumpToEra(era.id)}
                className="px-2.5 py-1 rounded-lg text-xs font-serif whitespace-nowrap transition-all bg-[#1E1E24] hover:bg-amber-950/60 hover:text-amber-300 hover:border-amber-700/70 text-stone-300 border border-[#2E2E38] active:scale-95 shadow-xs"
              >
                {era.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

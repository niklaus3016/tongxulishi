import React, { useState } from 'react';
import { Dynasty } from '../types';
import { DYNASTIES } from '../data/dynasties';
import { LayoutGrid, List, Landmark, Clock, ArrowRight } from 'lucide-react';

interface DynastyViewProps {
  onSelectDynasty: (dynasty: Dynasty) => void;
}

export const DynastyView: React.FC<DynastyViewProps> = ({ onSelectDynasty }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'unified' | 'divided' | 'golden' | 'short'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filtered = DYNASTIES.filter(d => {
    if (activeFilter === 'unified') return d.isUnified;
    if (activeFilter === 'divided') return !d.isUnified;
    if (activeFilter === 'golden') return d.tags.some(t => t.includes('盛世') || t.includes('礼乐') || t.includes('巅峰'));
    if (activeFilter === 'short') return d.durationYears < 50;
    return true;
  });

  return (
    <div className="pb-24 pt-2 max-w-3xl mx-auto px-4">
      {/* Module Title & Filtering Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center">
            <Landmark className="w-5 h-5 text-red-500 mr-2" />
            历朝历代通库
          </h2>
          <p className="text-xs text-stone-400 font-serif mt-0.5">
            收录上下五千年二十二个重要历史纪元与王朝，厘清兴衰更迭脉络
          </p>
        </div>

        {/* View Mode & Count */}
        <div className="flex items-center space-x-2 self-end sm:self-auto">
          <span className="text-xs text-stone-400 font-serif mr-1">
            共 <span className="font-bold text-amber-400">{filtered.length}</span> 个朝代/时期
          </span>
          <div className="flex items-center bg-[#1A1A20] p-1 rounded-xl border border-[#2B2B34]">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-[#2E2E38] text-white shadow-xs border border-amber-600/30'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
              title="网格视图"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-[#2E2E38] text-white shadow-xs border border-amber-600/30'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
              title="列表视图"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs - wrap layout so all tags are 100% visible on any screen */}
      <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
        {[
          { key: 'all', label: '全部朝代' },
          { key: 'unified', label: '大一统王朝' },
          { key: 'divided', label: '分裂割据乱世' },
          { key: 'golden', label: '盛世华章' },
          { key: 'short', label: '短命变革 (<50年)' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key as any)}
            className={`px-3 py-1.5 rounded-xl font-serif whitespace-nowrap transition-all ${
              activeFilter === tab.key
                ? 'bg-red-950 text-red-200 border border-red-800/80 shadow-xs font-semibold'
                : 'bg-[#1C1C22] hover:bg-[#25252C] text-stone-300 border border-[#2D2D36]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dynasties Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {filtered.map(dynasty => {
            return (
              <div
                key={dynasty.id}
                onClick={() => onSelectDynasty(dynasty)}
                className="group relative rounded-2xl border p-4 bg-[#1C1C22] hover:bg-[#202028] hover:border-amber-500/60 border-[#2E2E38] shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Accent badge & Favorite */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span
                        style={{ backgroundColor: dynasty.color }}
                        className="w-3.5 h-3.5 rounded-full inline-block shrink-0 shadow-sm border border-black/40"
                      />
                      <h3 className="text-lg font-serif font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                        {dynasty.name}
                      </h3>
                    </div>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-serif font-medium ${
                        dynasty.isUnified
                          ? 'bg-red-950 text-red-200 border border-red-800/60'
                          : 'bg-stone-800 text-stone-300 border border-stone-700/60'
                      }`}
                    >
                      {dynasty.isUnified ? '大一统' : '并立政权'}
                    </span>
                  </div>

                  {/* Period & Duration */}
                  <div className="mt-2 text-xs font-serif text-stone-400 flex items-center space-x-3">
                    <span className="flex items-center text-amber-300 font-medium">
                      <Clock className="w-3 h-3 mr-1 text-amber-400" />
                      {dynasty.durationYears}年
                    </span>
                    <span className="truncate text-stone-300">{dynasty.periodText}</span>
                  </div>

                  {/* Capital & Founder */}
                  <div className="mt-2.5 text-xs font-serif text-stone-300 space-y-1.5 bg-[#23232C] p-2.5 rounded-xl border border-[#30303E]">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-400">都城:</span>
                      <span className="font-medium text-stone-100">
                        {dynasty.capitalAncient}
                        <span className="text-stone-400 font-normal ml-1">({dynasty.capitalModern})</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-400">开国君主:</span>
                      <span className="font-medium text-amber-300">{dynasty.founder}</span>
                    </div>
                  </div>

                  {/* Overview Preview */}
                  <p className="mt-2.5 text-xs text-stone-300 font-serif line-clamp-2 leading-relaxed">
                    {dynasty.overview}
                  </p>
                </div>

                {/* Footer Tags & Arrow */}
                <div className="mt-3 pt-2.5 border-t border-[#2A2A34] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {dynasty.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-[#25252E] text-stone-300 border border-[#32323D] font-serif"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-serif text-amber-400 flex items-center group-hover:translate-x-0.5 transition-transform">
                    朝代典籍 <ArrowRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-2.5">
          {filtered.map(dynasty => (
            <div
              key={dynasty.id}
              onClick={() => onSelectDynasty(dynasty)}
              className="rounded-xl border p-3 bg-[#1C1C22] hover:bg-[#202028] hover:border-amber-500/60 border-[#2E2E38] shadow-md flex items-center justify-between cursor-pointer transition-all"
            >
              <div className="flex items-center space-x-3">
                <div
                  style={{ backgroundColor: dynasty.color }}
                  className="w-10 h-10 rounded-xl text-white font-serif font-bold text-base flex items-center justify-center shrink-0 shadow-sm border border-black/40"
                >
                  {dynasty.shortName.slice(0, 1)}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-base font-serif font-bold text-stone-100">
                      {dynasty.name}
                    </h3>
                    <span className="text-xs text-amber-300 font-serif">
                      ({dynasty.durationYears}年)
                    </span>
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded font-serif ${
                        dynasty.isUnified
                          ? 'bg-red-950 text-red-200 border border-red-800/60'
                          : 'bg-stone-800 text-stone-300 border border-stone-700/60'
                      }`}
                    >
                      {dynasty.isUnified ? '大一统' : '并立'}
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 font-serif mt-0.5">
                    {dynasty.periodText} · 都城: {dynasty.capitalAncient} · 开国: {dynasty.founder}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 shrink-0 ml-2" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { Emperor } from '../types';
import { EMPERORS, getEmperorHighlightTitle } from '../data/emperors';
import { DYNASTIES } from '../data/dynasties';
import { Crown, GitFork, ListFilter, ArrowRight, Award, Sparkles } from 'lucide-react';

interface EmperorViewProps {
  onSelectEmperor: (emperor: Emperor) => void;
}

export const EmperorView: React.FC<EmperorViewProps> = ({ onSelectEmperor }) => {
  const [selectedDynastyId, setSelectedDynastyId] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [viewType, setViewType] = useState<'list' | 'tree'>('list');

  // Dynasties that have emperor records
  const dynastiesWithEmperors = [
    { id: 'all', name: '全部朝代' },
    { id: 'qin', name: '秦朝' },
    { id: 'west-han', name: '西汉' },
    { id: 'east-han', name: '东汉' },
    { id: 'sui', name: '隋朝' },
    { id: 'tang', name: '唐朝' },
    { id: 'north-song', name: '北宋' },
    { id: 'ming', name: '明朝' },
    { id: 'qing', name: '清朝' }
  ];

  const tags = [
    { id: 'all', label: '全部帝王' },
    { id: '开国帝王', label: '开国帝王' },
    { id: '盛世明君', label: '盛世明君' },
    { id: '中兴之主', label: '中兴之主' },
    { id: '亡国之君', label: '亡国之君' },
    { id: '争议君王', label: '争议君王' }
  ];

  const filteredEmperors = EMPERORS.filter(emp => {
    if (selectedDynastyId !== 'all' && emp.dynastyId !== selectedDynastyId) return false;
    if (selectedTag !== 'all' && !emp.tags.includes(selectedTag as any)) return false;
    return true;
  });

  return (
    <div className="pb-24 pt-2 max-w-3xl mx-auto px-4">
      {/* Header with Title & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center">
            <Crown className="w-5 h-5 text-amber-400 mr-2" />
            帝王谱系与皇权传承
          </h2>
          <p className="text-xs text-stone-400 font-serif mt-0.5">
            梳理中国历代君王脉络，看懂父子、兄弟、禅代传承之政权更迭
          </p>
        </div>

        {/* View Toggle: List vs Tree */}
        <div className="flex items-center space-x-1 bg-[#1A1A20] p-1 rounded-xl self-start sm:self-auto text-xs border border-[#2B2B34]">
          <button
            onClick={() => setViewType('list')}
            className={`px-3 py-1.5 rounded-lg font-serif transition-colors flex items-center space-x-1.5 ${
              viewType === 'list'
                ? 'bg-[#2E2E38] text-white shadow-xs font-semibold border border-amber-600/30'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <ListFilter className="w-3.5 h-3.5" />
            <span>帝王详录</span>
          </button>
          <button
            onClick={() => setViewType('tree')}
            className={`px-3 py-1.5 rounded-lg font-serif transition-colors flex items-center space-x-1.5 ${
              viewType === 'tree'
                ? 'bg-[#2E2E38] text-amber-300 shadow-xs font-semibold border border-amber-600/30'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <GitFork className="w-3.5 h-3.5" />
            <span>世系图谱 (树状)</span>
          </button>
        </div>
      </div>

      {/* Dynasty Selector - wrap layout for full visibility of all dynasties */}
      <div className="flex flex-wrap items-center gap-1.5 mb-2.5 text-xs">
        <span className="text-[11px] font-serif text-stone-400 mr-1 shrink-0">朝代:</span>
        {dynastiesWithEmperors.map(dyn => (
          <button
            key={dyn.id}
            onClick={() => setSelectedDynastyId(dyn.id)}
            className={`px-2.5 py-1 rounded-xl font-serif whitespace-nowrap transition-all ${
              selectedDynastyId === dyn.id
                ? 'bg-amber-950 text-amber-200 border border-amber-700 shadow-xs font-semibold'
                : 'bg-[#1C1C22] hover:bg-[#25252C] text-stone-300 border border-[#2D2D36]'
            }`}
          >
            {dyn.name}
          </button>
        ))}
      </div>

      {/* Tag Filters - wrap layout so all tags are 100% visible without horizontal cutoff */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3.5 text-xs">
        <span className="text-[11px] font-serif text-stone-400 mr-1 shrink-0">类型:</span>
        {tags.map(t => (
          <button
            key={t.id}
            onClick={() => setSelectedTag(t.id)}
            className={`px-3 py-1 rounded-full font-serif text-xs whitespace-nowrap transition-all ${
              selectedTag === t.id
                ? 'bg-red-950 text-red-200 border border-red-800 font-semibold shadow-xs'
                : 'bg-[#22222A] text-stone-400 border border-[#2F2F3B] hover:text-stone-200'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Mode 1: List View */}
      {viewType === 'list' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {filteredEmperors.map(emperor => {
            const titleInfo = getEmperorHighlightTitle(emperor);
            return (
              <div
                key={emperor.id}
                onClick={() => onSelectEmperor(emperor)}
                className="group rounded-2xl border p-4 bg-[#1C1C22] hover:bg-[#202028] hover:border-amber-500/60 border-[#2E2E38] shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Emperor Header: Dynasty + Prominent Title & Personal Name */}
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs px-2 py-0.5 rounded font-serif bg-red-950/80 text-amber-300 border border-red-800/60 font-semibold shrink-0">
                        {emperor.dynastyName}
                      </span>
                      {/* Emperor Title & Highlighted Name */}
                      <h3 className="text-lg sm:text-xl font-serif font-bold group-hover:text-amber-300 transition-colors flex items-baseline flex-wrap gap-1.5">
                        <span className="text-amber-300 font-extrabold tracking-wide">
                          {titleInfo.mainTitle}
                        </span>
                        <span className="text-sm sm:text-base text-white font-bold bg-amber-500/20 px-2 py-0.5 rounded-lg border border-amber-500/50">
                          {titleInfo.personalName}
                        </span>
                      </h3>
                    </div>

                    {/* Horizontal Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mt-2">
                      {emperor.tags.map(tag => (
                        <span
                          key={tag}
                          className={`text-[11px] px-2.5 py-0.5 rounded-full font-serif font-medium whitespace-nowrap ${
                            tag.includes('开国')
                              ? 'bg-amber-950/90 text-amber-200 border border-amber-700/80 shadow-xs'
                              : tag.includes('盛世')
                              ? 'bg-red-950/90 text-red-200 border border-red-700/80 shadow-xs'
                              : tag.includes('中兴')
                              ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/60'
                              : tag.includes('亡国')
                              ? 'bg-stone-800 text-stone-300 border border-stone-600'
                              : 'bg-[#25252E] text-stone-300 border border-[#3D3D4E]'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-stone-400 font-serif mt-2">
                      年号: <span className="font-medium text-amber-300">{emperor.reignName}</span> · 在位: {emperor.reignPeriod} ({emperor.reignYears}年) · 寿: {emperor.lifespan}
                    </p>
                  </div>

                  {/* Overview paragraph */}
                  <p className="mt-2.5 text-xs text-stone-300 font-serif line-clamp-2 leading-relaxed">
                    {emperor.overview}
                  </p>

                  {/* Key Achievements summary highlight */}
                  {emperor.achievements.length > 0 && (
                    <div className="mt-3 bg-[#23232C] p-2.5 rounded-xl border border-[#30303E]">
                      <div className="text-[11px] font-serif font-bold text-amber-300 flex items-center mb-1">
                        <Award className="w-3 h-3 text-amber-400 mr-1" /> 核心功绩:
                      </div>
                      <p className="text-[11px] text-stone-300 font-serif line-clamp-1">
                        {emperor.achievements[0]}
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Card Action */}
                <div className="mt-3 pt-2.5 border-t border-[#2A2A34] flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 font-serif">
                    {emperor.anecdotes.length > 0 ? `典故: ${emperor.anecdotes[0]}` : '帝王起居注'}
                  </span>
                  <span className="text-xs font-serif text-amber-400 flex items-center group-hover:translate-x-0.5 transition-transform">
                    生平传记 <ArrowRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Mode 2: Interactive Visual Lineage Tree */}
      {viewType === 'tree' && (
        <div className="bg-[#1C1C22] rounded-2xl border border-[#2E2E38] p-4 shadow-md">
          <div className="mb-4 pb-3 border-b border-[#2A2A34] flex items-start">
            <div className="flex items-start space-x-2 text-xs font-serif text-stone-300">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                图谱按在位时间先后排列（箭头表示皇位传续）；角标“第 N 世”为皇帝在本朝的世序，
                未收录的帝王计入世序；关系标签标明父子、兄弟、宗室入继、后世子孙等传承方式。
              </span>
            </div>
          </div>

          {/* Group emperors by Dynasty for structured lineage trees */}
          {DYNASTIES.filter(dyn => {
            if (selectedDynastyId !== 'all' && dyn.id !== selectedDynastyId) return false;
            return EMPERORS.some(e => e.dynastyId === dyn.id);
          }).map(dyn => {
            const dynEmps = EMPERORS.filter(e => e.dynastyId === dyn.id);

            return (
              <div key={dyn.id} className="mb-6 last:mb-0">
                <div className="flex items-center space-x-2 mb-3">
                  <span
                    style={{ backgroundColor: dyn.color }}
                    className="w-2.5 h-2.5 rounded-full border border-black/40"
                  />
                  <h3 className="font-serif font-bold text-base text-stone-100">
                    {dyn.name} 世系传承
                  </h3>
                  <span className="text-xs text-stone-400 font-serif">({dyn.periodText})</span>
                </div>

                {/* Lineage Tree Node Container */}
                <div className="flex flex-wrap gap-2.5 items-center">
                  {dynEmps.map((emp, i) => {
                    const empTitle = getEmperorHighlightTitle(emp);
                    const relationLabel: Record<string, string> = {
                      founder: '开国君主',
                      son: '父子承袭',
                      brother: '兄终弟及',
                      uncle: '宗室入继',
                      usurper: '自立称帝',
                      descendant: '后世子孙'
                    };
                    const relation = emp.lineageType ? relationLabel[emp.lineageType] : '皇位传承';
                    const isDirectLine = emp.lineageType === 'founder' || emp.lineageType === 'son';
                    return (
                      <React.Fragment key={emp.id}>
                        <div
                          onClick={() => onSelectEmperor(emp)}
                          className="rounded-xl border p-3 bg-[#23232C] hover:bg-[#2A2A35] hover:border-amber-500 border-[#32323E] cursor-pointer transition-all shadow-xs w-44"
                        >
                          <div className="flex items-center justify-between">
                            {emp.generationLevel ? (
                              <span className="text-[10px] font-sans px-1.5 py-0.5 rounded bg-amber-950 text-amber-200 border border-amber-800/60">
                                第{emp.generationLevel}世
                              </span>
                            ) : (
                              <span className="text-[10px] font-sans px-1.5 py-0.5 rounded bg-[#2C2C38] text-stone-300 border border-[#3A3A48]">
                                特殊传承
                              </span>
                            )}
                            <span className={`text-[10px] font-serif ${isDirectLine ? 'text-emerald-300' : 'text-sky-300'}`}>
                              {relation}
                            </span>
                          </div>
                          <h4 className="font-serif font-bold text-sm text-stone-100 mt-1 flex items-baseline flex-wrap gap-1">
                            <span className="text-amber-300 font-bold">{empTitle.mainTitle}</span>
                            <span className="text-xs text-white font-bold bg-amber-500/20 px-1 rounded border border-amber-500/40">
                              {empTitle.personalName}
                            </span>
                          </h4>
                          <p className="text-[11px] text-stone-400 font-serif mt-0.5">
                            年号: {emp.reignName}
                          </p>
                          <p className="text-[10px] text-amber-400 font-serif mt-0.5">
                            在位 {emp.reignYears}年
                          </p>
                        </div>

                        {i < dynEmps.length - 1 && (
                          <div className="text-amber-500/70 font-serif text-xs flex items-center">
                            &rarr;
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

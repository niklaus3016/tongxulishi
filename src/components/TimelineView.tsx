import React, { useState } from 'react';
import { Dynasty, HistoricalEvent } from '../types';
import { DYNASTIES } from '../data/dynasties';
import { HISTORICAL_EVENTS } from '../data/events';
import { Sparkles, ZoomIn, ZoomOut, ArrowUpRight, Award, MapPin, Flame } from 'lucide-react';

interface TimelineViewProps {
  onSelectDynasty: (dynasty: Dynasty) => void;
  onSelectEvent: (event: HistoricalEvent) => void;
}

// 每日轮换的历史通识：按自然日确定性取一条，同一天打开始终展示同一条
const DAILY_REFLECTIONS = [
  {
    era: '唐朝 · 贞观二年',
    quote: '“君，舟也；民，水也。水能载舟，亦能覆舟。”',
    explanation: '魏徵引《荀子》语警示唐太宗，揭示了政权的根基在于百姓温饱与人心的向背。',
    dynastyId: 'tang',
    cta: '查看大唐'
  },
  {
    era: '西汉 · 太初年间',
    quote: '“究天人之际，通古今之变，成一家之言。”',
    explanation: '司马迁著《史记》的抱负：以通史眼光考察天道与人事，梳理历代兴亡规律。',
    dynastyId: 'west-han',
    cta: '查看西汉'
  },
  {
    era: '北宋 · 庆历年间',
    quote: '“先天下之忧而忧，后天下之乐而乐。”',
    explanation: '范仲淹《岳阳楼记》道出宋代士大夫以天下为己任的担当精神。',
    dynastyId: 'north-song',
    cta: '查看北宋'
  },
  {
    era: '春秋 · 鲁哀公时期',
    quote: '“学而不思则罔，思而不学则殆。”',
    explanation: '《论语》论学思并重：一味读书而不思考会迷惘，凭空空想而不学习则危险。',
    dynastyId: 'east-zhou',
    cta: '查看春秋战国'
  },
  {
    era: '战国 · 秦惠文王时期',
    quote: '“得道者多助，失道者寡助。”',
    explanation: '《孟子》论民心向背：站在正义一边则助者众多，违背道义终将陷于孤立。',
    dynastyId: 'east-zhou',
    cta: '查看春秋战国'
  },
  {
    era: '明末清初',
    quote: '“天下兴亡，匹夫有责。”',
    explanation: '顾炎武《日知录》所倡：民族与文化的存续，是每一个普通人的责任。',
    dynastyId: 'ming',
    cta: '查看明朝'
  },
  {
    era: '清朝 · 道光年间',
    quote: '“苟利国家生死以，岂因祸福避趋之。”',
    explanation: '林则徐赴戍途中明志：只要对国家有利，个人生死祸福在所不计。',
    dynastyId: 'qing',
    cta: '查看清朝'
  }
];

export const TimelineView: React.FC<TimelineViewProps> = ({
  onSelectDynasty,
  onSelectEvent
}) => {
  const [zoomLevel, setZoomLevel] = useState<'compact' | 'detailed'>('detailed');
  const [filterType, setFilterType] = useState<'all' | 'unified' | 'divided'>('all');

  const filteredDynasties = DYNASTIES.filter(d => {
    if (filterType === 'unified') return d.isUnified;
    if (filterType === 'divided') return !d.isUnified;
    return true;
  });

  const dayIndex = Math.floor(Date.now() / 86400000);
  const todayHighlight = DAILY_REFLECTIONS[((dayIndex % DAILY_REFLECTIONS.length) + DAILY_REFLECTIONS.length) % DAILY_REFLECTIONS.length];

  return (
    <div className="pb-24 pt-2">
      {/* Top Banner: Daily Historical Insight */}
      <div className="max-w-3xl mx-auto px-4 mb-3.5">
        <div className="relative overflow-hidden rounded-2xl p-4 border border-amber-600/30 shadow-md bg-gradient-to-br from-[#261A12] via-[#1E1A22] to-[#16161C]">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-1.5 text-amber-300 font-serif font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>今日历史通识</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded font-sans bg-amber-950 text-amber-200 border border-amber-800/60">
                {todayHighlight.era}
              </span>
            </div>
            <button
              onClick={() => {
                const target = DYNASTIES.find(d => d.id === todayHighlight.dynastyId);
                if (target) onSelectDynasty(target);
              }}
              className="text-xs font-serif flex items-center text-amber-400 hover:text-amber-300 transition-colors"
            >
              {todayHighlight.cta} <ArrowUpRight className="w-3 h-3 ml-0.5" />
            </button>
          </div>
          <blockquote className="mt-2 text-stone-100 font-serif font-bold text-sm sm:text-base leading-snug">
            {todayHighlight.quote}
          </blockquote>
          <p className="mt-1.5 text-xs text-stone-300 font-serif leading-relaxed">
            {todayHighlight.explanation}
          </p>
        </div>
      </div>

      {/* Control Bar: Zoom & Filters */}
      <div className="max-w-3xl mx-auto px-4 mb-3.5 flex items-center justify-between gap-2">
        {/* Filter Chips */}
        <div className="flex items-center space-x-1 bg-[#1A1A20] p-1 rounded-xl border border-[#2A2A34] text-xs">
          <button
            onClick={() => setFilterType('all')}
            className={`px-2.5 py-1 rounded-lg font-serif transition-colors ${
              filterType === 'all'
                ? 'bg-[#2A2A34] text-white shadow-xs font-semibold border border-amber-600/30'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            全部历史
          </button>
          <button
            onClick={() => setFilterType('unified')}
            className={`px-2.5 py-1 rounded-lg font-serif transition-colors ${
              filterType === 'unified'
                ? 'bg-red-950 text-red-200 shadow-xs font-semibold border border-red-800/60'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            大一统王朝
          </button>
          <button
            onClick={() => setFilterType('divided')}
            className={`px-2.5 py-1 rounded-lg font-serif transition-colors ${
              filterType === 'divided'
                ? 'bg-blue-950 text-blue-200 shadow-xs font-semibold border border-blue-800/60'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            分裂并存期
          </button>
        </div>

        {/* Zoom Mode Switcher */}
        <div className="flex items-center space-x-1 bg-[#1A1A20] p-1 rounded-xl border border-[#2A2A34] text-xs">
          <button
            onClick={() => setZoomLevel('compact')}
            className={`p-1.5 rounded-lg flex items-center space-x-1 transition-colors ${
              zoomLevel === 'compact'
                ? 'bg-[#2A2A34] text-white shadow-xs border border-amber-600/30'
                : 'text-stone-400 hover:text-stone-200'
            }`}
            title="全局缩放（紧凑）"
          >
            <ZoomOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-serif text-[11px]">全局脉络</span>
          </button>
          <button
            onClick={() => setZoomLevel('detailed')}
            className={`p-1.5 rounded-lg flex items-center space-x-1 transition-colors ${
              zoomLevel === 'detailed'
                ? 'bg-[#2A2A34] text-white shadow-xs border border-amber-600/30'
                : 'text-stone-400 hover:text-stone-200'
            }`}
            title="放大细节（详实）"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-serif text-[11px]">详尽年代</span>
          </button>
        </div>
      </div>

      {/* Main Flagship Vertical Timeline */}
      <div className="max-w-3xl mx-auto px-4 relative">
        {/* Central Vertical Axis Line - perfectly centered behind node icons and badges */}
        <div className="absolute left-[40px] sm:left-[44px] -translate-x-1/2 top-4 bottom-8 w-0.5 bg-gradient-to-b from-amber-500/80 via-amber-700/50 to-stone-700/30 rounded-full" />

        <div className="space-y-3.5">
          {filteredDynasties.map(dynasty => {
            // 仅按 dynastyId 精确归属，避免名称模糊匹配导致事件跨朝代重复挂接
            const dynastyEvents = HISTORICAL_EVENTS.filter(e => e.dynastyId === dynasty.id);

            return (
              <div
                key={dynasty.id}
                id={`timeline-${dynasty.id}`}
                className="relative flex items-start group"
              >
                {/* Timeline Dot & Epoch Indicator */}
                <div className="relative z-10 flex flex-col items-center mr-2.5 sm:mr-4 shrink-0 w-12 sm:w-14 pt-1">
                  <div
                    style={{ backgroundColor: dynasty.color }}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#121214] text-white font-serif font-bold text-xs flex items-center justify-center shadow-md cursor-pointer transition-transform group-hover:scale-110 z-10"
                    onClick={() => onSelectDynasty(dynasty)}
                  >
                    {dynasty.shortName.slice(0, 1)}
                  </div>
                  {/* Opaque pill container to ensure year numbers are crystal clear and not blocked by the axis */}
                  <div className="mt-1 z-10 flex items-center justify-center">
                    <span className="px-1.5 py-0.5 rounded-full bg-[#121214] border border-[#3A3A48] text-[10px] font-sans font-semibold text-amber-300 text-center leading-none shadow-xs whitespace-nowrap">
                      {dynasty.startYear < 0 ? `前${Math.abs(dynasty.startYear)}` : `${dynasty.startYear}`}
                    </span>
                  </div>
                </div>

                {/* Dynasty Card Container - Solid dark card with high contrast */}
                <div
                  className="flex-1 rounded-2xl border transition-all duration-200 cursor-pointer p-3.5 sm:p-4 bg-[#1C1C22] hover:bg-[#202028] border-[#2E2E38] hover:border-amber-500/60 shadow-md"
                  onClick={() => onSelectDynasty(dynasty)}
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-1 pb-2 border-b border-[#2A2A34]">
                    <div className="flex items-center space-x-2">
                      <h2 className="text-base sm:text-lg font-serif font-bold text-white tracking-wide">
                        {dynasty.name}
                      </h2>
                      <span className="text-xs font-sans text-amber-300/90 font-medium">
                        (国祚 {dynasty.durationYears}年)
                      </span>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-serif font-medium ${
                          dynasty.isUnified
                            ? 'bg-red-950 text-red-200 border border-red-800/60'
                            : 'bg-stone-800 text-stone-300 border border-stone-700/60'
                        }`}
                      >
                        {dynasty.isUnified ? '大一统' : '并立政权'}
                      </span>
                      <span className="text-xs text-amber-400/90 group-hover:text-amber-300 font-serif transition-colors">
                        详情 &rarr;
                      </span>
                    </div>
                  </div>

                  {/* Period and Capital Coordinates */}
                  <div className="mt-2 text-xs text-stone-300 flex flex-wrap gap-x-4 gap-y-1 font-serif">
                    <span className="flex items-center">
                      <span className="text-stone-400 mr-1">存续:</span>
                      <span className="text-stone-200">{dynasty.periodText}</span>
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 text-red-400 mr-0.5" />
                      <span className="text-stone-400 mr-1">都城:</span>
                      <span className="text-amber-200 font-medium">{dynasty.capitalAncient}</span>
                      <span className="text-stone-400 text-[11px] ml-1">({dynasty.capitalModern})</span>
                    </span>
                  </div>

                  {/* Overview Paragraph */}
                  <p className="mt-2 text-xs sm:text-sm text-stone-300 font-serif leading-relaxed line-clamp-2">
                    {dynasty.overview}
                  </p>

                  {/* Tags */}
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {dynasty.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-md font-serif bg-[#25252E] text-stone-300 border border-[#353542]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Detailed Mode: Key Turning Points & Events Ribbon */}
                  {zoomLevel === 'detailed' && (
                    <div className="mt-3 pt-2.5 border-t border-dashed border-[#2E2E38]">
                      <div className="text-[11px] font-serif font-bold text-amber-300 flex items-center mb-1.5">
                        <Flame className="w-3 h-3 text-amber-400 mr-1" />
                        核心转折与大事记:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {dynasty.keyTurningPoints.map((tp, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-amber-950/60 text-amber-200 border border-amber-800/60 font-serif"
                          >
                            {tp}
                          </span>
                        ))}
                      </div>

                      {/* Associated Events from Database */}
                      {dynastyEvents.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {dynastyEvents.slice(0, 2).map(ev => (
                            <div
                              key={ev.id}
                              onClick={e => {
                                e.stopPropagation();
                                onSelectEvent(ev);
                              }}
                              className="p-2 rounded-xl bg-[#22222A] hover:bg-[#282834] text-xs flex items-center justify-between transition-colors cursor-pointer border border-[#30303C]"
                            >
                              <div className="flex items-center space-x-1.5 truncate">
                                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                <span className="font-serif font-medium text-stone-100 truncate">
                                  {ev.name}
                                </span>
                                <span className="text-[10px] text-stone-400 shrink-0">
                                  ({ev.yearLabel})
                                </span>
                              </div>
                              <span className="text-[10px] text-amber-400 shrink-0 font-serif">
                                查看事件 &rarr;
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

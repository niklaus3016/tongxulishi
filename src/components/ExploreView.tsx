import React, { useState, useMemo } from 'react';
import { HistoricalEvent, HistoricalIdiom, KnowledgeNode } from '../types';
import { HISTORICAL_EVENTS } from '../data/events';
import { HISTORICAL_IDIOMS } from '../data/idioms';
import { KNOWLEDGE_NODES } from '../data/knowledgeGraph';
import { ANCIENT_CITIES, calculateGanzhi } from '../data/ancientCities';
import { HISTORICAL_TRIVIA } from '../data/trivia';
import {
  Calendar,
  BookOpen,
  Share2,
  MapPin,
  HelpCircle,
  Flame,
  Search,
  CheckCircle2,
  Sparkles,
  Calculator
} from 'lucide-react';

interface ExploreViewProps {
  onSelectEvent: (event: HistoricalEvent) => void;
  onSelectIdiom: (idiom: HistoricalIdiom) => void;
}

type ExploreSubTab = 'events' | 'idioms' | 'graph' | 'cities' | 'trivia';

export const ExploreView: React.FC<ExploreViewProps> = ({
  onSelectEvent,
  onSelectIdiom
}) => {
  const [subTab, setSubTab] = useState<ExploreSubTab>('events');

  // Events state
  const [eventCategory, setEventCategory] = useState<string>('all');

  // Idioms state
  const [idiomSearch, setIdiomSearch] = useState<string>('');

  // Knowledge graph selected node
  const [selectedNodeId, setSelectedNodeId] = useState<string>('qin-unify');

  // Ancient cities search
  const [citySearch, setCitySearch] = useState<string>('');

  // Era calculator state
  const [inputYear, setInputYear] = useState<number>(627);
  const ganzhiResult = useMemo(() => calculateGanzhi(inputYear), [inputYear]);

  // Filtered events
  const filteredEvents = HISTORICAL_EVENTS.filter(ev => {
    if (eventCategory !== 'all' && ev.category !== eventCategory) return false;
    return true;
  });

  // Filtered idioms
  const filteredIdioms = HISTORICAL_IDIOMS.filter(idm => {
    if (!idiomSearch) return true;
    return (
      idm.idiom.includes(idiomSearch) ||
      idm.pinyin.includes(idiomSearch) ||
      idm.emperorOrHero.includes(idiomSearch) ||
      idm.modernMeaning.includes(idiomSearch)
    );
  });

  // Filtered ancient cities
  const filteredCities = ANCIENT_CITIES.filter(c => {
    if (!citySearch) return true;
    return (
      c.ancientName.includes(citySearch) ||
      c.modernName.includes(citySearch) ||
      c.province.includes(citySearch) ||
      c.notes.includes(citySearch)
    );
  });

  const selectedNode = KNOWLEDGE_NODES.find(n => n.id === selectedNodeId) || KNOWLEDGE_NODES[0];

  return (
    <div className="pb-24 pt-2 max-w-3xl mx-auto px-4">
      {/* Sub-tab Navigation Bar - wrap layout for complete visibility of all 5 modules */}
      <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
        {[
          { id: 'events', label: '大事纪年', icon: Calendar },
          { id: 'idioms', label: '典故成语', icon: BookOpen },
          { id: 'graph', label: '知识图谱', icon: Share2 },
          { id: 'cities', label: '古今对照', icon: MapPin },
          { id: 'trivia', label: '历史探疑', icon: HelpCircle }
        ].map(item => {
          const Icon = item.icon;
          const isActive = subTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSubTab(item.id as ExploreSubTab)}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl font-serif whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-red-950 text-red-200 border border-red-800/80 shadow-xs font-semibold'
                  : 'bg-[#1C1C22] hover:bg-[#25252C] text-stone-300 border border-[#2D2D36]'
              }`}
            >
              <Icon className="w-3.5 h-3.5 text-amber-400" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* === 1. 大事记 (Events) === */}
      {subTab === 'events' && (
        <div>
          {/* Categories Bar */}
          <div className="mb-4 bg-[#1C1C22] p-2.5 rounded-2xl border border-[#2E2E38]">
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              {[
                { id: 'all', label: '全部事件' },
                { id: 'war', label: '重要战争' },
                { id: 'politics', label: '政治变革' },
                { id: 'system', label: '制度变革' },
                { id: 'diplomacy', label: '对外交往' },
                { id: 'tech', label: '重大发明' },
                { id: 'culture', label: '文化繁荣' },
                { id: 'ethnic', label: '民族融合' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setEventCategory(cat.id)}
                  className={`px-2.5 py-1.5 rounded-lg font-serif text-[11px] whitespace-nowrap transition-colors ${
                    eventCategory === cat.id
                      ? 'bg-[#2E2E38] text-white font-semibold border border-amber-600/40 shadow-xs'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Events Timeline Feed */}
          <div className="space-y-3">
            {filteredEvents.map(event => (
              <div
                key={event.id}
                onClick={() => onSelectEvent(event)}
                className="group rounded-2xl border p-4 bg-[#1C1C22] hover:bg-[#202028] hover:border-amber-500/60 border-[#2E2E38] shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center space-x-2 min-w-0">
                    <span className="text-xs px-2 py-0.5 rounded font-serif bg-[#25252E] text-stone-300 border border-[#353542] shrink-0">
                      {event.dynastyName}
                    </span>
                    <h3 className="text-base font-serif font-bold text-stone-100 group-hover:text-amber-400 transition-colors truncate">
                      {event.name}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-1.5 shrink-0">
                    {event.isTurningPoint && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-950 text-red-200 border border-red-800/60 font-serif flex items-center whitespace-nowrap">
                        <Flame className="w-2.5 h-2.5 mr-0.5 text-red-400" /> 转折
                      </span>
                    )}
                    <span className="text-xs font-serif font-medium text-amber-400 whitespace-nowrap">
                      {event.yearLabel}
                    </span>
                  </div>
                </div>

                <p className="mt-2 text-xs sm:text-sm text-stone-300 font-serif leading-relaxed line-clamp-2">
                  {event.summary}
                </p>

                <div className="mt-2.5 pt-2 border-t border-[#2A2A34] flex items-center justify-between text-xs font-serif">
                  <span className="text-stone-400">
                    影响：<span className="text-stone-300 line-clamp-1">{event.impact}</span>
                  </span>
                  <span className="text-amber-400 shrink-0 ml-2 flex items-center group-hover:translate-x-0.5 transition-transform">
                    详情 &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* === 2. 典故成语 (Idioms) === */}
      {subTab === 'idioms' && (
        <div>
          {/* Search Box */}
          <div className="relative mb-4">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={idiomSearch}
              onChange={e => setIdiomSearch(e.target.value)}
              placeholder="搜索成语、主人公或释义（如：卧薪尝胆、勾践、项羽）..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#32323D] bg-[#1C1C22] text-stone-100 text-sm font-serif placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Idioms List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {filteredIdioms.map(item => (
              <div
                key={item.id}
                onClick={() => onSelectIdiom(item)}
                className="group rounded-2xl border p-4 bg-[#1C1C22] hover:bg-[#202028] hover:border-amber-500/60 border-[#2E2E38] shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-serif font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                          {item.idiom}
                        </h3>
                        <span className="text-xs text-stone-400 font-serif">
                          {item.pinyin}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-400 font-serif mt-0.5">
                        朝代: {item.dynastyName} · 人物: <span className="text-amber-300">{item.emperorOrHero}</span>
                      </p>
                    </div>

                    <span className="text-xs px-2 py-0.5 rounded font-serif bg-amber-950 text-amber-200 border border-amber-800/80">
                      历史溯源
                    </span>
                  </div>

                  <p className="mt-2.5 text-xs text-stone-300 font-serif leading-relaxed line-clamp-2">
                    {item.modernMeaning}
                  </p>

                  <blockquote className="mt-2 bg-[#23232C] p-2 rounded-lg text-[11px] text-stone-300 font-serif italic border-l-2 border-red-500 line-clamp-1">
                    {item.originText}
                  </blockquote>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#2A2A34] flex items-center justify-between text-xs font-serif">
                  <span className="text-stone-400 text-[11px]">
                    启迪: <span className="text-stone-300 line-clamp-1">{item.takeaway}</span>
                  </span>
                  <span className="text-amber-400 shrink-0 ml-2 flex items-center group-hover:translate-x-0.5 transition-transform">
                    完整典故 &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* === 3. 知识图谱 (Knowledge Graph) === */}
      {subTab === 'graph' && (
        <div className="space-y-4">
          <div className="bg-[#1C1C22] rounded-2xl border border-[#2E2E38] p-4 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <h3 className="font-serif font-bold text-base text-stone-100 flex items-center">
                  <Share2 className="w-4 h-4 text-red-500 mr-1.5" />
                  历史因果链与制度演变图谱
                </h3>
                <p className="text-xs text-stone-400 font-serif mt-0.5">
                  点击任意历史节点，查看其前因后果与跨时代逻辑链条
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-serif">
                <span className="flex items-center text-red-400">
                  <span className="w-2 h-2 rounded-full bg-red-500 mr-1" /> 制度
                </span>
                <span className="flex items-center text-amber-400">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mr-1" /> 事件
                </span>
                <span className="flex items-center text-sky-400">
                  <span className="w-2 h-2 rounded-full bg-sky-500 mr-1" /> 文化
                </span>
              </div>
            </div>

            {/* Interactive Grid of Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 pb-4">
              {KNOWLEDGE_NODES.map(node => {
                const isSelected = node.id === selectedNodeId;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      isSelected
                        ? 'bg-amber-950 text-amber-100 border-amber-600 shadow-md ring-1 ring-amber-500/50'
                        : 'bg-[#23232C] hover:bg-[#282834] border-[#30303E] text-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] text-stone-400 font-serif mb-1">
                      <span>{node.dynasty}</span>
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          node.category === 'system'
                            ? 'bg-red-500'
                            : node.category === 'event'
                            ? 'bg-amber-500'
                            : 'bg-sky-500'
                        }`}
                      />
                    </div>
                    <div className="font-serif font-bold text-xs text-stone-100 truncate">
                      {node.label}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Details & Cause-Effect Links */}
            {selectedNode && (
              <div className="mt-2 pt-4 border-t border-[#2A2A34] bg-[#23232C] p-3.5 rounded-xl border border-[#30303E]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-base font-serif font-bold text-stone-100">
                      {selectedNode.label}
                    </h4>
                    <span className="text-xs px-2 py-0.5 rounded font-serif bg-[#2C2C38] text-amber-300 border border-[#383848]">
                      {selectedNode.dynasty}
                    </span>
                  </div>
                  <span className="text-xs text-stone-400 font-serif">
                    类型: {selectedNode.category === 'system' ? '政治制度' : selectedNode.category === 'event' ? '重大历史事件' : '思想文化'}
                  </span>
                </div>

                <p className="mt-2 text-xs sm:text-sm text-stone-300 font-serif leading-relaxed">
                  {selectedNode.description}
                </p>

                {/* Connections */}
                {selectedNode.connections.length > 0 && (
                  <div className="mt-3">
                    <div className="text-xs font-serif font-bold text-amber-300 mb-1.5 flex items-center">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 mr-1" />
                      引发与关联的历史演进：
                    </div>
                    <div className="space-y-1.5">
                      {selectedNode.connections.map((conn, idx) => {
                        const target = KNOWLEDGE_NODES.find(n => n.id === conn.targetId);
                        return (
                          <div
                            key={idx}
                            onClick={() => setSelectedNodeId(conn.targetId)}
                            className="p-2 rounded-lg bg-[#1C1C22] hover:bg-[#262630] border border-[#30303C] flex items-center justify-between text-xs cursor-pointer transition-colors"
                          >
                            <div className="flex items-center space-x-2 truncate">
                              <span className="text-[11px] px-2 py-0.5 rounded bg-amber-950 text-amber-200 font-serif border border-amber-800/60">
                                {conn.relation}
                              </span>
                              <span className="font-serif font-bold text-stone-100">
                                {target?.label || conn.targetId}
                              </span>
                            </div>
                            <span className="text-[10px] text-amber-400 font-serif shrink-0">
                              点击追踪 &rarr;
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* === 4. 古今对照 (Ancient-Modern Cities & Eras) === */}
      {subTab === 'cities' && (
        <div className="space-y-4">
          {/* Era & Ganzhi Calculator Tool */}
          <div className="bg-[#1C1C22] p-4 rounded-2xl border border-[#2E2E38] shadow-md">
            <h3 className="font-serif font-bold text-base text-stone-100 flex items-center mb-2">
              <Calculator className="w-4 h-4 text-amber-400 mr-1.5" />
              公历年份 · 干支纪年 · 生肖即时换算器
            </h3>
            <p className="text-xs text-stone-400 font-serif mb-3">
              输入公元或公元前年份（公元前请输负数，如公元前 140 年输 -140），即刻计算中国传统天干地支纪年与对应生肖：
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <span className="text-xs font-serif text-stone-400 shrink-0">公历年份:</span>
                <input
                  type="number"
                  value={inputYear}
                  onChange={e => setInputYear(parseInt(e.target.value) || 0)}
                  className="px-3 py-1.5 rounded-lg border border-[#353544] bg-[#24242E] text-stone-100 text-sm font-serif w-28 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex items-center space-x-2 bg-[#24242E] px-4 py-2 rounded-xl border border-[#353544] shadow-xs w-full sm:w-auto">
                <span className="text-xs font-serif text-stone-400">推算结果:</span>
                <span className="font-serif font-bold text-base text-amber-400">
                  {ganzhiResult.ganzhi}
                </span>
                <span className="text-xs text-stone-300 font-serif">
                  ({ganzhiResult.shengxiao})
                </span>
              </div>
            </div>
          </div>

          {/* Ancient Cities Mapping */}
          <div className="bg-[#1C1C22] p-4 rounded-2xl border border-[#2E2E38] shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <h3 className="font-serif font-bold text-base text-stone-100 flex items-center">
                  <MapPin className="w-4 h-4 text-red-500 mr-1.5" />
                  华夏历史名城 · 古今地名演变对照
                </h3>
                <p className="text-xs text-stone-400 font-serif mt-0.5">
                  长安、金陵、临安、广陵到底在今天的哪里？一目了然看懂古籍地名
                </p>
              </div>

              <div className="relative w-full sm:w-48">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" />
                <input
                  type="text"
                  value={citySearch}
                  onChange={e => setCitySearch(e.target.value)}
                  placeholder="搜索地名/现代城市..."
                  className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-[#353544] bg-[#24242E] text-stone-100 text-xs font-serif placeholder:text-stone-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredCities.map((city, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border p-3 bg-[#23232C] border-[#32323E] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-base text-stone-100">
                        {city.ancientName}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded font-serif bg-red-950 text-red-200 border border-red-800/60">
                        现: {city.modernName}
                      </span>
                    </div>
                    <p className="text-[11px] text-amber-400 font-serif mt-1">
                      定都时期: {city.dynastyEra}
                    </p>
                    <p className="text-xs text-stone-300 font-serif mt-1.5 leading-relaxed">
                      {city.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* === 5. 历史冷知识 (Trivia) === */}
      {subTab === 'trivia' && (
        <div className="space-y-3.5">
          <div className="mb-2">
            <h3 className="font-serif font-bold text-base text-stone-100 flex items-center">
              <HelpCircle className="w-4 h-4 text-amber-400 mr-1.5" />
              正史真相 · 常见历史误区辨析
            </h3>
            <p className="text-xs text-stone-400 font-serif mt-0.5">
              破除演义戏说与影视编造，以学术文献与考古出土还原历史真相
            </p>
          </div>

          {HISTORICAL_TRIVIA.map(trivia => (
            <div
              key={trivia.id}
              className="rounded-2xl border p-4 bg-[#1C1C22] border-[#2E2E38] shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs px-2 py-0.5 rounded font-serif bg-[#25252E] text-stone-300 border border-[#353542]">
                  {trivia.dynasty} · {trivia.tag}
                </span>
              </div>

              <h4 className="font-serif font-bold text-base text-stone-100 mb-2">
                {trivia.title}
              </h4>

              {/* Myth vs Fact Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-2">
                <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-900/60">
                  <div className="text-xs font-serif font-bold text-red-300 mb-1 flex items-center">
                    ❌ 常见大众误区:
                  </div>
                  <p className="text-xs text-stone-300 font-serif leading-relaxed">
                    {trivia.myth}
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-900/60">
                  <div className="text-xs font-serif font-bold text-emerald-300 mb-1 flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> 正史考证真相:
                  </div>
                  <p className="text-xs text-stone-200 font-serif leading-relaxed font-medium">
                    {trivia.fact}
                  </p>
                </div>
              </div>

              <p className="mt-2 text-xs sm:text-sm text-stone-300 font-serif leading-relaxed bg-[#23232C] p-3 rounded-xl border border-[#30303E]">
                {trivia.detail}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, History, Sparkles, ArrowRight, Castle, Crown, Calendar, BookOpen, MapPin } from 'lucide-react';
import { DYNASTIES } from '../data/dynasties';
import { EMPERORS } from '../data/emperors';
import { HISTORICAL_EVENTS } from '../data/events';
import { HISTORICAL_IDIOMS } from '../data/idioms';
import { ANCIENT_CITIES } from '../data/ancientCities';
import { getEmperorHighlightTitle } from '../data/emperors';
import { storage } from '../utils/storage';
import { Dynasty, Emperor, HistoricalEvent, HistoricalIdiom } from '../types';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDynasty: (dynasty: Dynasty) => void;
  onSelectEmperor: (emperor: Emperor) => void;
  onSelectEvent: (event: HistoricalEvent) => void;
  onSelectIdiom: (idiom: HistoricalIdiom) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectDynasty,
  onSelectEmperor,
  onSelectEvent,
  onSelectIdiom
}) => {
  const [query, setQuery] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      setHistory(storage.getSearchHistory());
    }
  }, [isOpen]);

  const hotKeywords = ['秦始皇', '商鞅变法', '贞观之治', '卧薪尝胆', '长安', '杯酒释兵权', '推恩令', '康熙', '开皇之治'];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const matchedDynasties = DYNASTIES.filter(
      d =>
        d.name.toLowerCase().includes(q) ||
        d.shortName.toLowerCase().includes(q) ||
        d.capitalAncient.toLowerCase().includes(q) ||
        d.founder.toLowerCase().includes(q) ||
        d.overview.toLowerCase().includes(q)
    );

    const matchedEmperors = EMPERORS.filter(e => {
      const highlight = getEmperorHighlightTitle(e);
      const searchableText = [
        e.name,
        e.templeName,
        e.reignName,
        e.posthumousName || '',
        e.dynastyName,
        e.overview,
        highlight.mainTitle,
        highlight.fullDisplayText
      ]
        .join(' ')
        .toLowerCase();
      return searchableText.includes(q);
    });

    const matchedEvents = HISTORICAL_EVENTS.filter(
      ev =>
        ev.name.toLowerCase().includes(q) ||
        ev.summary.toLowerCase().includes(q) ||
        ev.dynastyName.toLowerCase().includes(q) ||
        (ev.keyFigures || []).some(f => f.toLowerCase().includes(q))
    );

    const matchedIdioms = HISTORICAL_IDIOMS.filter(
      idm =>
        idm.idiom.toLowerCase().includes(q) ||
        idm.pinyin.toLowerCase().includes(q) ||
        idm.emperorOrHero.toLowerCase().includes(q) ||
        idm.modernMeaning.toLowerCase().includes(q)
    );

    const matchedCities = ANCIENT_CITIES.filter(
      c =>
        c.ancientName.toLowerCase().includes(q) ||
        c.modernName.toLowerCase().includes(q) ||
        c.notes.toLowerCase().includes(q)
    );

    return {
      dynasties: matchedDynasties,
      emperors: matchedEmperors,
      events: matchedEvents,
      idioms: matchedIdioms,
      cities: matchedCities,
      total:
        matchedDynasties.length +
        matchedEmperors.length +
        matchedEvents.length +
        matchedIdioms.length +
        matchedCities.length
    };
  }, [query]);

  const handleSearchCommit = (term: string) => {
    setQuery(term);
    const updated = storage.addSearchQuery(term);
    setHistory(updated);
  };

  const handleRemoveHistoryItem = (term: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = storage.removeSearchQuery(term);
    setHistory(updated);
  };

  const handleClearHistory = () => {
    storage.clearSearchHistory();
    setHistory([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/80 backdrop-blur-xs">
      <div className="w-full max-w-2xl mx-auto mt-2 sm:mt-8 px-3 flex-1 flex flex-col max-h-[94vh]">
        {/* Search Header Bar */}
        <div className="bg-[#18181E] rounded-2xl border border-[#2E2E3A] shadow-2xl overflow-hidden flex flex-col flex-1">
          <div className="p-3 border-b border-[#2A2A36] flex items-center space-x-2 bg-[#1E1E26]">
            <Search className="w-5 h-5 text-amber-400 shrink-0 ml-1" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && query.trim()) {
                  handleSearchCommit(query.trim());
                }
              }}
              placeholder="输入朝代、帝王、事件、成语、古今地名..."
              className="flex-1 text-sm sm:text-base font-serif bg-transparent text-stone-100 placeholder-stone-500 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-stone-400 hover:text-stone-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-3 py-1 rounded-lg bg-[#282834] text-xs font-serif text-stone-300 hover:text-stone-100 hover:bg-[#323242]"
            >
              取消
            </button>
          </div>

          {/* Search Content Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {!query ? (
              <>
                {/* Search History */}
                {history.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between text-xs font-serif text-stone-400 mb-2">
                      <span className="flex items-center">
                        <History className="w-3.5 h-3.5 mr-1 text-stone-400" /> 历史搜索
                      </span>
                      <button
                        onClick={handleClearHistory}
                        className="text-[11px] text-stone-400 hover:text-red-400"
                      >
                        清空
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {history.map(item => (
                        <span
                          key={item}
                          onClick={() => handleSearchCommit(item)}
                          className="group inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-serif bg-[#22222C] text-stone-300 border border-[#2E2E3A] hover:border-amber-500/50 hover:text-amber-300 cursor-pointer transition-colors"
                        >
                          {item}
                          <button
                            onClick={e => handleRemoveHistoryItem(item, e)}
                            className="ml-1.5 text-stone-500 hover:text-red-400"
                          >
                            &times;
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hot Keywords */}
                <div>
                  <div className="flex items-center text-xs font-serif text-stone-400 mb-2">
                    <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-400" />
                    大家都在搜
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {hotKeywords.map(kw => (
                      <button
                        key={kw}
                        onClick={() => handleSearchCommit(kw)}
                        className="px-2.5 py-1 rounded-lg text-xs font-serif bg-[#23232D] text-amber-300 border border-[#353545] hover:border-amber-400 hover:bg-[#2A2A38] transition-colors"
                      >
                        {kw}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : results && results.total === 0 ? (
              <div className="text-center py-12 text-stone-400 font-serif">
                <p className="text-sm">未查找到与 “{query}” 相关的历史资料</p>
                <p className="text-xs mt-1 text-stone-500">请尝试搜索其他朝代、帝王尊号或成语事件</p>
              </div>
            ) : results ? (
              <div className="space-y-4">
                <div className="text-xs text-stone-400 font-serif pb-1.5 border-b border-[#282834]">
                  找到 <span className="font-bold text-amber-400">{results.total}</span> 条相关记载
                </div>

                {/* Dynasties match */}
                {results.dynasties.length > 0 && (
                  <div>
                    <div className="text-xs font-serif font-bold text-amber-400 flex items-center mb-2">
                      <Castle className="w-3.5 h-3.5 mr-1 text-amber-400" /> 朝代 ({results.dynasties.length})
                    </div>
                    <div className="space-y-1.5">
                      {results.dynasties.map(dyn => (
                        <div
                          key={dyn.id}
                          onClick={() => {
                            onSelectDynasty(dyn);
                            onClose();
                          }}
                          className="p-2.5 rounded-xl bg-[#202028] hover:bg-[#282834] border border-[#2E2E3A] hover:border-amber-500/50 flex items-center justify-between cursor-pointer transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            <span
                              style={{ backgroundColor: dyn.color }}
                              className="w-3 h-3 rounded-full shrink-0 border border-white/20"
                            />
                            <span className="font-serif font-bold text-sm text-stone-100">
                              {dyn.name}
                            </span>
                            <span className="text-xs text-stone-400 font-serif">
                              ({dyn.periodText})
                            </span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Emperors match */}
                {results.emperors.length > 0 && (
                  <div>
                    <div className="text-xs font-serif font-bold text-amber-400 flex items-center mb-2">
                      <Crown className="w-3.5 h-3.5 mr-1 text-amber-400" /> 历代帝王 ({results.emperors.length})
                    </div>
                    <div className="space-y-1.5">
                      {results.emperors.map(emp => {
                        const empHighlight = getEmperorHighlightTitle(emp);
                        return (
                        <div
                          key={emp.id}
                          onClick={() => {
                            onSelectEmperor(emp);
                            onClose();
                          }}
                          className="p-2.5 rounded-xl bg-[#202028] hover:bg-[#282834] border border-[#2E2E3A] hover:border-amber-500/50 flex items-center justify-between cursor-pointer transition-colors"
                        >
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs px-1.5 py-0.5 rounded font-serif bg-red-950/60 text-amber-300 border border-red-800/40">
                                {emp.dynastyName}
                              </span>
                              <span className="font-serif font-bold text-sm text-stone-100">
                                {empHighlight.mainTitle}
                                <span className="text-stone-400 font-normal">（{emp.name}）</span>
                              </span>
                            </div>
                            <p className="text-[11px] text-stone-400 font-serif mt-0.5">
                              年号: {emp.reignName} · 在位: {emp.reignPeriod}
                            </p>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                        </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Events match */}
                {results.events.length > 0 && (
                  <div>
                    <div className="text-xs font-serif font-bold text-amber-400 flex items-center mb-2">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-amber-400" /> 历史事件 ({results.events.length})
                    </div>
                    <div className="space-y-1.5">
                      {results.events.map(ev => (
                        <div
                          key={ev.id}
                          onClick={() => {
                            onSelectEvent(ev);
                            onClose();
                          }}
                          className="p-2.5 rounded-xl bg-[#202028] hover:bg-[#282834] border border-[#2E2E3A] hover:border-amber-500/50 flex items-center justify-between cursor-pointer transition-colors"
                        >
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs px-1.5 py-0.5 rounded font-serif bg-red-950/60 text-amber-300 border border-red-800/40">
                                {ev.dynastyName}
                              </span>
                              <span className="font-serif font-bold text-sm text-stone-100">
                                {ev.name}
                              </span>
                              <span className="text-xs text-stone-400 font-serif">
                                ({ev.yearLabel})
                              </span>
                            </div>
                            <p className="text-[11px] text-stone-300 font-serif mt-0.5 line-clamp-1">
                              {ev.summary}
                            </p>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Idioms match */}
                {results.idioms.length > 0 && (
                  <div>
                    <div className="text-xs font-serif font-bold text-amber-400 flex items-center mb-2">
                      <BookOpen className="w-3.5 h-3.5 mr-1 text-amber-400" /> 典故成语 ({results.idioms.length})
                    </div>
                    <div className="space-y-1.5">
                      {results.idioms.map(idm => (
                        <div
                          key={idm.id}
                          onClick={() => {
                            onSelectIdiom(idm);
                            onClose();
                          }}
                          className="p-2.5 rounded-xl bg-[#202028] hover:bg-[#282834] border border-[#2E2E3A] hover:border-amber-500/50 flex items-center justify-between cursor-pointer transition-colors"
                        >
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-serif font-bold text-sm text-stone-100">
                                {idm.idiom}
                              </span>
                              <span className="text-xs text-stone-400 font-serif">
                                {idm.pinyin}
                              </span>
                            </div>
                            <p className="text-[11px] text-stone-300 font-serif mt-0.5 line-clamp-1">
                              {idm.modernMeaning}
                            </p>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ancient cities match */}
                {results.cities.length > 0 && (
                  <div>
                    <div className="text-xs font-serif font-bold text-amber-400 flex items-center mb-2">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400" /> 古今地名 ({results.cities.length})
                    </div>
                    <div className="space-y-1.5">
                      {results.cities.map((ct, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-[#202028] border border-[#2E2E3A] text-xs font-serif"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-stone-100">
                              {ct.ancientName}
                            </span>
                            <span className="px-1.5 py-0.5 rounded bg-red-950/70 text-amber-300 border border-red-800/50 text-[10px]">
                              现: {ct.modernName}
                            </span>
                          </div>
                          <p className="text-stone-300 mt-1 line-clamp-1">{ct.notes}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

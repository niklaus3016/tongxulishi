import React, { useState, useEffect } from 'react';
import { Dynasty, Emperor, HistoricalEvent, HistoricalIdiom } from '../types';
import { storage } from '../utils/storage';
import { getEmperorHighlightTitle } from '../data/emperors';
import {
  X,
  Bookmark,
  Award,
  ShieldAlert,
  Flame,
  BookOpen,
  Share2,
  Check,
  Crown,
  Scale
} from 'lucide-react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Dynasty | Emperor | HistoricalEvent | HistoricalIdiom | null;
  type: 'dynasty' | 'emperor' | 'event' | 'idiom' | null;
  onRefreshFavorites?: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  data,
  type,
  onRefreshFavorites
}) => {
  // 注意：Hooks 必须在任何条件 return 之前调用
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // 弹窗打开 / 切换条目时，同步该条目的真实收藏状态
  useEffect(() => {
    if (isOpen && data && type) {
      setIsFavorited(storage.isFavorite(type, data.id));
      setCopied(false);
    }
  }, [isOpen, data, type]);

  if (!isOpen || !data || !type) return null;

  const getTitle = () => {
    if (type === 'dynasty') return (data as Dynasty).name;
    if (type === 'emperor') {
      const h = getEmperorHighlightTitle(data as Emperor);
      return `${h.mainTitle} · ${h.personalName}`;
    }
    if (type === 'event') return (data as HistoricalEvent).name;
    if (type === 'idiom') return (data as HistoricalIdiom).idiom;
    return '';
  };

  const getSubtitle = () => {
    if (type === 'dynasty') return `${(data as Dynasty).periodText} · 国祚 ${(data as Dynasty).durationYears}年`;
    if (type === 'emperor') return `年号: ${(data as Emperor).reignName} · 在位: ${(data as Emperor).reignPeriod}`;
    if (type === 'event') return `${(data as HistoricalEvent).dynastyName} · ${(data as HistoricalEvent).yearLabel}`;
    if (type === 'idiom') return `${(data as HistoricalIdiom).dynastyName} · ${(data as HistoricalIdiom).emperorOrHero}`;
    return '';
  };

  const handleToggleFavorite = () => {
    if (isFavorited) {
      storage.removeFavorite(type, data.id);
      setIsFavorited(false);
    } else {
      storage.addFavorite({
        targetType: type,
        targetId: data.id,
        title: getTitle(),
        subtitle: getSubtitle()
      });
      setIsFavorited(true);
    }
    if (onRefreshFavorites) onRefreshFavorites();
  };

  const handleCopySummary = () => {
    const text = `${getTitle()} (${getSubtitle()})\n${
      type === 'dynasty'
        ? (data as Dynasty).overview
        : type === 'emperor'
        ? (data as Emperor).overview
        : type === 'event'
        ? (data as HistoricalEvent).summary
        : (data as HistoricalIdiom).modernMeaning
    }\n—— 摘自《通序历史》`;
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => {
        // 部分 Android WebView 非安全上下文下可能禁用 Clipboard API，静默降级
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-xs p-0 sm:p-4">
      <div className="bg-[#16161B] w-full max-w-2xl max-h-[90vh] sm:max-h-[85vh] rounded-t-3xl sm:rounded-3xl border border-[#2E2E38] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-200">
        {/* Top Action Bar */}
        <div className="p-4 border-b border-[#262630] flex items-center justify-between bg-[#1A1A22]">
          <div className="flex items-center space-x-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full font-serif bg-red-950/70 text-amber-300 border border-red-800/60 font-medium">
              {type === 'dynasty' ? '朝代正史' : type === 'emperor' ? '帝王起居录' : type === 'event' ? '重大纪事' : '典故溯源'}
            </span>
            <span className="text-xs text-stone-400 font-serif">
              通序历史大典
            </span>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={handleToggleFavorite}
              className={`p-2 rounded-xl border transition-colors ${
                isFavorited
                  ? 'bg-amber-500/20 border-amber-500/60 text-amber-300'
                  : 'border-[#2E2E38] bg-[#22222C] hover:bg-[#2A2A38] text-stone-300'
              }`}
              title={isFavorited ? '已收藏 (点击取消)' : '加入我的收藏'}
            >
              <Bookmark className={`w-4 h-4 ${isFavorited ? 'fill-amber-400 text-amber-400' : ''}`} />
            </button>

            <button
              onClick={handleCopySummary}
              className="p-2 rounded-xl border border-[#2E2E38] bg-[#22222C] hover:bg-[#2A2A38] text-stone-300 transition-colors"
              title="复制摘录"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-[#2E2E38] bg-[#22222C] hover:bg-[#2A2A38] text-stone-300 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-stone-200">
          {/* Title Header */}
          <div className="pb-1 border-b border-[#252532]">
            <h2 className="text-2xl font-serif font-bold text-stone-100 tracking-wide">
              {getTitle()}
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 font-serif mt-1">
              {getSubtitle()}
            </p>
          </div>

          {/* === A. Dynasty Details View === */}
          {type === 'dynasty' && (() => {
            const d = data as Dynasty;
            return (
              <div className="space-y-4">
                {/* Meta Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[#20202A] p-3 rounded-2xl border border-[#2E2E3E] text-xs font-serif">
                  <div>
                    <span className="text-stone-400 text-[11px]">都城古名:</span>
                    <p className="font-bold text-stone-100 mt-0.5">
                      {d.capitalAncient}
                    </p>
                    <span className="text-[10px] text-stone-400">(今: {d.capitalModern})</span>
                  </div>
                  <div>
                    <span className="text-stone-400 text-[11px]">开国君主:</span>
                    <p className="font-bold text-amber-300 mt-0.5">{d.founder}</p>
                  </div>
                  <div>
                    <span className="text-stone-400 text-[11px]">末代君主:</span>
                    <p className="font-bold text-stone-200 mt-0.5">{d.lastEmperor}</p>
                  </div>
                  <div>
                    <span className="text-stone-400 text-[11px]">极盛版图:</span>
                    <p className="font-bold text-stone-200 mt-0.5">{d.territoryPeak}</p>
                  </div>
                </div>

                {/* Overview */}
                <div className="bg-[#20202A] p-4 rounded-2xl border border-[#2E2E3E]">
                  <h4 className="font-serif font-bold text-sm text-stone-100 mb-2 flex items-center">
                    <BookOpen className="w-4 h-4 text-amber-400 mr-1.5" /> 朝代通述
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed">
                    {d.overview}
                  </p>
                </div>

                {/* Key Turning Points */}
                <div className="bg-[#20202A] p-4 rounded-2xl border border-[#2E2E3E]">
                  <h4 className="font-serif font-bold text-sm text-stone-100 mb-2 flex items-center">
                    <Flame className="w-4 h-4 text-amber-400 mr-1.5" /> 历史重大转折点
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {d.keyTurningPoints.map((tp, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-[#282836] text-amber-300 border border-amber-500/30 text-xs font-serif"
                      >
                        {tp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dimensions Grid (Politics, Economy, Culture, Tech) */}
                <div className="space-y-2.5">
                  <h4 className="font-serif font-bold text-sm text-stone-100">
                    深度五维通识剖析
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-serif">
                    <div className="p-3 bg-[#20202A] rounded-xl border border-[#2E2E3E]">
                      <span className="font-bold text-rose-400">政治与中央制度:</span>
                      <p className="mt-1 text-stone-300 leading-relaxed">
                        {d.features.politics}
                      </p>
                    </div>
                    <div className="p-3 bg-[#20202A] rounded-xl border border-[#2E2E3E]">
                      <span className="font-bold text-amber-400">经济与赋税体系:</span>
                      <p className="mt-1 text-stone-300 leading-relaxed">
                        {d.features.economy}
                      </p>
                    </div>
                    <div className="p-3 bg-[#20202A] rounded-xl border border-[#2E2E3E]">
                      <span className="font-bold text-emerald-400">思想文化与文学:</span>
                      <p className="mt-1 text-stone-300 leading-relaxed">
                        {d.features.culture}
                      </p>
                    </div>
                    <div className="p-3 bg-[#20202A] rounded-xl border border-[#2E2E3E]">
                      <span className="font-bold text-sky-400">科技发明与天文医学:</span>
                      <p className="mt-1 text-stone-300 leading-relaxed">
                        {d.features.tech}
                      </p>
                    </div>
                    <div className="p-3 bg-[#20202A] rounded-xl border border-[#2E2E3E] sm:col-span-2">
                      <span className="font-bold text-indigo-300">对外关系与文明交流:</span>
                      <p className="mt-1 text-stone-300 leading-relaxed">
                        {d.features.diplomacy}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Succession Cause */}
                <div className="p-3.5 bg-[#20202A] rounded-2xl border border-[#2E2E3E] text-xs font-serif">
                  <span className="font-bold text-amber-300">
                    王朝兴替更迭之因：
                  </span>
                  <p className="mt-1 text-stone-300 leading-relaxed">
                    {d.succession.reason}
                  </p>
                </div>
              </div>
            );
          })()}

          {/* === B. Emperor Details View === */}
          {type === 'emperor' && (() => {
            const e = data as Emperor;
            return (
              <div className="space-y-4">
                {/* Emperor Meta */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[#20202A] p-3 rounded-2xl border border-[#2E2E3E] text-xs font-serif">
                  <div>
                    <span className="text-stone-400 text-[11px]">本名 / 尊称:</span>
                    <p className="font-bold text-amber-300 mt-0.5">
                      {e.name}
                    </p>
                    <span className="text-[10px] text-stone-400">
                      {e.templeName !== '无' ? `庙号: ${e.templeName}` : '秦尊号'}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 text-[11px]">年号:</span>
                    <p className="font-bold text-amber-300 mt-0.5">{e.reignName}</p>
                  </div>
                  <div>
                    <span className="text-stone-400 text-[11px]">在位 / 寿命:</span>
                    <p className="font-bold text-stone-200 mt-0.5">
                      在位{e.reignYears}年 / 享年{e.lifespan}
                    </p>
                  </div>
                  <div>
                    <span className="text-stone-400 text-[11px]">谥号:</span>
                    <p className="font-bold text-stone-200 mt-0.5 truncate" title={e.posthumousName}>
                      {e.posthumousName}
                    </p>
                  </div>
                </div>

                {/* Overview */}
                <div className="bg-[#20202A] p-4 rounded-2xl border border-[#2E2E3E]">
                  <h4 className="font-serif font-bold text-sm text-stone-100 mb-2 flex items-center">
                    <Crown className="w-4 h-4 text-amber-400 mr-1.5" /> 帝王概览
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed">
                    {e.overview}
                  </p>
                </div>

                {/* Achievements vs Faults */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-[#18261E] p-3.5 rounded-2xl border border-emerald-800/40">
                    <h5 className="text-xs font-serif font-bold text-emerald-300 mb-2 flex items-center">
                      <Award className="w-3.5 h-3.5 mr-1 text-emerald-400" /> 核心功绩
                    </h5>
                    <ul className="space-y-1.5 text-xs text-stone-300 font-serif">
                      {e.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-emerald-400 mr-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#29181A] p-3.5 rounded-2xl border border-rose-800/40">
                    <h5 className="text-xs font-serif font-bold text-rose-300 mb-2 flex items-center">
                      <ShieldAlert className="w-3.5 h-3.5 mr-1 text-rose-400" /> 历史过失与争议
                    </h5>
                    <ul className="space-y-1.5 text-xs text-stone-300 font-serif">
                      {e.flaws.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-rose-400 mr-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Anecdotes */}
                {e.anecdotes.length > 0 && (
                  <div className="bg-[#20202A] p-4 rounded-2xl border border-[#2E2E3E]">
                    <h4 className="font-serif font-bold text-sm text-stone-100 mb-2">
                      历史典故与起居录逸事
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {e.anecdotes.map((an, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-[#282834] text-stone-200 text-xs font-serif border border-[#353545]"
                        >
                          {an}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Historical Evaluation */}
                {e.historicalEvaluation && (
                  <div className="p-3.5 bg-[#25201C] rounded-2xl border border-amber-800/40 text-xs font-serif">
                    <span className="font-bold text-amber-300 text-sm flex items-center">
                      <Scale className="w-3.5 h-3.5 mr-1.5" /> 历史公允评价：
                    </span>
                    <p className="mt-1 text-stone-300 leading-relaxed">
                      {e.historicalEvaluation}
                    </p>
                  </div>
                )}
              </div>
            );
          })()}

          {/* === C. Event Details View === */}
          {type === 'event' && (() => {
            const ev = data as HistoricalEvent;
            return (
              <div className="space-y-4">
                {/* Event Summary */}
                <div className="bg-[#20202A] p-4 rounded-2xl border border-[#2E2E3E]">
                  <h4 className="font-serif font-bold text-sm text-stone-100 mb-2">
                    事件概述
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed">
                    {ev.summary}
                  </p>
                </div>

                {/* Key Figures */}
                {ev.keyFigures && ev.keyFigures.length > 0 && (
                  <div className="p-3 bg-[#20202A] rounded-2xl border border-[#2E2E3E] text-xs font-serif">
                    <span className="font-bold text-amber-300">核心历史人物：</span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {ev.keyFigures.map((fig, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-[#2A2A38] text-stone-200 border border-[#383848]"
                        >
                          {fig}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Background, Process & Impact */}
                <div className="space-y-2.5">
                  <div className="p-3.5 bg-[#20202A] rounded-2xl border border-[#2E2E3E] text-xs font-serif">
                    <span className="font-bold text-stone-100 text-sm">历史背景：</span>
                    <p className="mt-1 text-stone-300 leading-relaxed">
                      {ev.background}
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#20202A] rounded-2xl border border-[#2E2E3E] text-xs font-serif">
                    <span className="font-bold text-stone-100 text-sm">经过与关键战役：</span>
                    <p className="mt-1 text-stone-300 leading-relaxed">
                      {ev.process}
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#20202A] rounded-2xl border border-[#2E2E3E] text-xs font-serif">
                    <span className="font-bold text-emerald-300 text-sm">事件结果：</span>
                    <p className="mt-1 text-stone-300 leading-relaxed">
                      {ev.result}
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#25201C] rounded-2xl border border-amber-800/40 text-xs font-serif">
                    <span className="font-bold text-amber-300 text-sm">长远深层历史影响：</span>
                    <p className="mt-1 text-stone-300 leading-relaxed">
                      {ev.impact}
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#20202A] rounded-2xl border border-[#2E2E3E] text-xs font-serif">
                    <span className="font-bold text-stone-100 text-sm flex items-center">
                      <Scale className="w-3.5 h-3.5 mr-1.5 text-amber-400" /> 历史评价：
                    </span>
                    <p className="mt-1 text-stone-300 leading-relaxed">
                      {ev.evaluation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* === D. Idiom Details View === */}
          {type === 'idiom' && (() => {
            const idm = data as HistoricalIdiom;
            return (
              <div className="space-y-4">
                {/* Origin Event */}
                {idm.originEvent && (
                  <div className="inline-flex items-center px-3 py-1.5 rounded-xl bg-amber-950/50 border border-amber-800/50 text-xs font-serif text-amber-200">
                    <Flame className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                    典源事件：{idm.originEvent}
                  </div>
                )}

                {/* Origin Quote */}
                <div className="p-3.5 bg-[#20202A] rounded-2xl border-l-4 border-amber-500 text-xs font-serif">
                  <span className="font-bold text-stone-400 text-[11px] block mb-1">
                    史料原文出处：
                  </span>
                  <p className="italic text-amber-200 leading-relaxed">
                    {idm.originText}
                  </p>
                </div>

                {/* Modern Meaning */}
                <div className="bg-[#20202A] p-4 rounded-2xl border border-[#2E2E3E]">
                  <h4 className="font-serif font-bold text-sm text-stone-100 mb-2">
                    今义释读
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed">
                    {idm.modernMeaning}
                  </p>
                </div>

                {/* Vivid Story */}
                <div className="bg-[#20202A] p-4 rounded-2xl border border-[#2E2E3E]">
                  <h4 className="font-serif font-bold text-sm text-stone-100 mb-2">
                    典故历史故事
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed whitespace-pre-wrap">
                    {idm.story}
                  </p>
                </div>

                {/* Philosophical Takeaway */}
                <div className="p-3.5 bg-[#25201C] rounded-2xl border border-amber-800/40 text-xs font-serif">
                  <span className="font-bold text-amber-300">
                    历史启迪与哲思：
                  </span>
                  <p className="mt-1 text-stone-300 leading-relaxed">
                    {idm.takeaway}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

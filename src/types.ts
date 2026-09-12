export interface Dynasty {
  id: string;
  name: string;
  shortName: string;
  pinyin: string;
  startYear: number; // negative for BCE
  endYear: number;
  periodText: string;
  durationYears: number;
  founder: string;
  lastEmperor: string;
  capitalAncient: string;
  capitalModern: string;
  territoryPeak: string;
  politicalSystem: string;
  tags: string[]; // e.g. "大一统", "盛世辉煌", "分裂乱世", "民族融合"
  isUnified: boolean;
  color: string; // hex
  badgeColor: string;
  overview: string;
  features: {
    politics: string;
    economy: string;
    culture: string;
    tech: string;
    diplomacy: string;
  };
  succession: {
    previous: string;
    next: string;
    concurrent?: string;
    reason: string;
  };
  keyTurningPoints: string[];
}

export interface Emperor {
  id: string;
  dynastyId: string;
  dynastyName: string;
  name: string; // 姓名
  templeName: string; // 庙号 如 唐太宗
  posthumousName: string; // 谥号 如 文皇帝
  reignName: string; // 年号 如 贞观
  reignPeriod: string; // 在位起止年份 如 626 - 649
  reignYears: number; // 在位年数 如 23年
  lifespan: string; // 寿命 如 52岁 (598-649)
  generationLevel?: number; // 代数
  lineageParentId?: string; // 父辈ID，用于树形图谱
  lineageType?: 'son' | 'brother' | 'uncle' | 'usurper' | 'founder' | 'descendant';
  tags: ('开国帝王' | '盛世明君' | '中兴之主' | '守成之主' | '亡国之君' | '争议君王')[];
  portraitEmoji?: string;
  overview: string;
  achievements: string[]; // 核心功绩
  flaws: string[]; // 历史过失与局限
  anecdotes: string[]; // 经典典故
  historicalEvaluation: string; // 历史公允评价
}

export type EventCategory =
  | 'politics' // 政治变革
  | 'war' // 战争战乱
  | 'system' // 制度改革
  | 'culture' // 文化繁荣
  | 'tech' // 科技发明
  | 'ethnic' // 民族融合
  | 'diplomacy'; // 对外交流

export interface HistoricalEvent {
  id: string;
  name: string;
  year: number; // negative for BCE
  yearLabel: string;
  dynastyId: string;
  dynastyName: string;
  emperorId?: string;
  emperorName?: string;
  category: EventCategory;
  isKeyExam: boolean; // 教科书必考
  isTurningPoint: boolean; // 历史转折点
  keyFigures?: string[];
  summary: string;
  background: string;
  process: string;
  result: string;
  impact: string;
  evaluation: string;
}

export interface HistoricalIdiom {
  id: string;
  idiom: string;
  pinyin: string;
  dynastyId: string;
  dynastyName: string;
  emperorOrHero: string;
  originEvent?: string;
  originText: string; // 原文出处
  modernMeaning: string; // 现代通俗释义
  story: string; // 历史典故完整生动故事
  takeaway: string; // 历史启迪与哲思
}

export interface KnowledgeNode {
  id: string;
  label: string;
  category: 'dynasty' | 'emperor' | 'event' | 'system' | 'culture';
  dynasty: string;
  description: string;
  x?: number;
  y?: number;
  connections: {
    targetId: string;
    relation: string;
  }[];
}

export interface AncientCityMatch {
  ancientName: string;
  modernName: string;
  dynastyEra: string;
  province: string;
  notes: string;
}

export interface EraConversionItem {
  dynasty: string;
  emperor: string;
  eraName: string;
  startYear: number;
  endYear: number;
  ganzhi: string;
}

export interface TriviaItem {
  id: string;
  title: string;
  myth: string; // 常见误区
  fact: string; // 正史真相
  detail: string;
  dynasty: string;
  tag: string;
}

export interface UserFavorite {
  targetType: 'dynasty' | 'emperor' | 'event' | 'idiom';
  targetId: string;
  title: string;
  subtitle?: string;
  addedAt: number;
}

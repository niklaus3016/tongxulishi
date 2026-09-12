import React from 'react';
import { History, Castle, Crown, BookOpen, User } from 'lucide-react';

export type NavTabId = 'timeline' | 'dynasties' | 'emperors' | 'explore' | 'profile';

interface BottomNavProps {
  activeTab: NavTabId;
  onChangeTab: (tab: NavTabId) => void;
  favoritesCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onChangeTab,
  favoritesCount
}) => {
  const tabs = [
    {
      id: 'timeline' as NavTabId,
      label: '时间轴',
      sublabel: '全景脉络',
      icon: History
    },
    {
      id: 'dynasties' as NavTabId,
      label: '朝代库',
      sublabel: '通史大典',
      icon: Castle
    },
    {
      id: 'emperors' as NavTabId,
      label: '帝王谱',
      sublabel: '宗法传承',
      icon: Crown
    },
    {
      id: 'explore' as NavTabId,
      label: '博古集',
      sublabel: '图谱·典故',
      icon: BookOpen
    },
    {
      id: 'profile' as NavTabId,
      label: '我的',
      sublabel: '收藏·隐私',
      icon: User,
      badge: favoritesCount > 0 ? favoritesCount : undefined
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#16161A]/95 backdrop-blur-md border-t border-[#2B2B36] pb-[env(safe-area-inset-bottom,0px)] shadow-lg">
      <div className="max-w-lg mx-auto flex items-center justify-around px-2 py-1.5">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChangeTab(tab.id)}
              className={`relative flex flex-col items-center justify-center flex-1 max-w-[72px] py-1 rounded-xl transition-all ${
                isActive
                  ? 'text-amber-400 font-semibold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'scale-110 stroke-[2.2] text-amber-400' : 'stroke-[1.7]'
                  }`}
                />
                {tab.badge !== undefined && (
                  <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[9px] font-sans font-bold px-1 min-w-[14px] h-[14px] rounded-full flex items-center justify-center border border-black/40">
                    {tab.badge > 99 ? '99+' : tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] mt-0.5 tracking-tight font-serif whitespace-nowrap">
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute bottom-0.5 w-4 h-0.5 rounded-full bg-amber-400" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

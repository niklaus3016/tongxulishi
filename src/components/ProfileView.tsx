import React, { useState } from 'react';
import { UserFavorite } from '../types';
import { storage } from '../utils/storage';
import { AgreementDetailModal, PrivacyPolicyContent } from './PrivacyModal';
import {
  Bookmark,
  Trash2,
  ShieldCheck,
  Shield,
  ChevronRight
} from 'lucide-react';

interface ProfileViewProps {
  onNavigateToTarget: (targetType: string, targetId: string) => void;
  onFavoritesChange?: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  onNavigateToTarget,
  onFavoritesChange
}) => {
  const [favorites, setFavorites] = useState<UserFavorite[]>(() => storage.getFavorites());

  // Privacy Policy Modal state
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Clear-history confirm modal state
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [clearDone, setClearDone] = useState(false);

  const handleRemoveFavorite = (targetType: string, targetId: string) => {
    const updated = storage.removeFavorite(targetType, targetId);
    setFavorites(updated);
    onFavoritesChange?.();
  };

  const handleConfirmClearCache = () => {
    storage.clearSearchHistory();
    setShowClearConfirm(false);
    setClearDone(true);
    setTimeout(() => setClearDone(false), 2500);
  };

  return (
    <div className="pb-28 pt-2 max-w-4xl mx-auto px-4 space-y-5">
      {/* 1. User Header Profile Card */}
      <div className="rounded-2xl border p-4 bg-[#1C1C22] border-[#2E2E38] shadow-md flex items-center justify-between">
        <div className="flex items-center space-x-3.5">
          <div className="w-12 h-12 rounded-2xl bg-red-900 text-amber-200 font-serif font-bold text-xl flex items-center justify-center shadow-inner border border-red-700/60 shrink-0">
            史
          </div>
          <div>
            <h2 className="font-serif font-bold text-lg text-stone-100">
              历史寻游者
            </h2>
            <p className="text-xs text-stone-400 font-serif mt-0.5">
              已收录 {favorites.length} 项研读藏书与条目
            </p>
          </div>
        </div>
      </div>

      {/* 2. Section: 我的收藏 */}
      <section className="bg-[#18181D] rounded-2xl border border-[#2A2A34] p-4 shadow-xs">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center space-x-2">
            <Bookmark className="w-4 h-4 text-amber-400" />
            <h3 className="font-serif font-bold text-sm text-stone-100">我的收藏</h3>
            <span className="text-[11px] px-2 py-0.5 rounded-full font-serif bg-[#242430] text-amber-300 border border-[#353545]">
              {favorites.length}
            </span>
          </div>
          <span className="text-[11px] text-stone-500 font-serif">点击卡片可快速跳转</span>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-7 bg-[#1C1C22] rounded-xl border border-[#2E2E38] px-4">
            <Bookmark className="w-6 h-6 text-stone-500 mx-auto mb-1.5 opacity-60" />
            <p className="font-serif text-xs text-stone-300 font-medium">暂无收藏内容</p>
            <p className="font-serif text-[11px] text-stone-500 mt-0.5">
              在朝代、帝王、事件或成语详情中点击“收藏”按钮即可收录于此
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {favorites.map(fav => (
              <div
                key={`${fav.targetType}_${fav.targetId}`}
                onClick={() => onNavigateToTarget(fav.targetType, fav.targetId)}
                className="p-3 rounded-xl border bg-[#1C1C22] border-[#2E2E38] hover:border-amber-500/50 flex items-center justify-between cursor-pointer transition-all shadow-xs"
              >
                <div className="flex items-center space-x-2.5 min-w-0">
                  <span className="text-[10px] px-2 py-0.5 rounded font-serif bg-red-950/80 text-amber-300 border border-red-800/60 font-medium shrink-0">
                    {fav.targetType === 'dynasty'
                      ? '朝代'
                      : fav.targetType === 'emperor'
                      ? '帝王'
                      : fav.targetType === 'event'
                      ? '事件'
                      : '成语'}
                  </span>
                  <div className="truncate">
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-100 truncate">
                      {fav.title}
                    </h4>
                    {fav.subtitle && (
                      <p className="text-[11px] text-stone-400 font-serif mt-0.5 truncate">
                        {fav.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={e => {
                    e.stopPropagation();
                    handleRemoveFavorite(fav.targetType, fav.targetId);
                  }}
                  className="p-1.5 text-stone-400 hover:text-red-400 transition-colors shrink-0 ml-2"
                  title="取消收藏"
                  aria-label="取消收藏"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. Section: 隐私政策 (独立模块，位于数据与存储安全上面) */}
      <section className="bg-[#18181D] rounded-2xl border border-[#2A2A34] p-4 shadow-xs">
        <button
          onClick={() => setIsPrivacyModalOpen(true)}
          className="w-full flex items-center justify-between group"
        >
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-amber-400" />
            <h3 className="font-serif font-bold text-sm text-stone-100">隐私政策</h3>
          </div>
          <div className="flex items-center space-x-1 text-xs font-serif text-amber-400 group-hover:text-amber-300 transition-colors">
            <span>点击查看完整隐私政策</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </button>
      </section>

      {/* 4. Section: 数据与存储安全 */}
      <section className="bg-[#18181D] rounded-2xl border border-[#2A2A34] p-4 shadow-xs">
        <div className="flex items-center space-x-2 mb-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <h3 className="font-serif font-bold text-sm text-stone-100">数据与存储安全</h3>
        </div>
        <p className="text-xs text-stone-400 font-serif leading-relaxed mb-3">
          所有书签收藏、历史研读数据均保存在当前设备本地。您可在此随时管理或清理本地检索历史记录。
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowClearConfirm(true)}
            className="px-3 py-1.5 rounded-lg border border-red-800/80 text-red-400 bg-red-950/30 text-xs font-serif hover:bg-red-950/60 transition-colors"
          >
            清空检索历史缓存
          </button>
          {clearDone && (
            <span className="text-[11px] font-serif text-emerald-400 flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" /> 历史检索记录已清除
            </span>
          )}
        </div>
      </section>

      {/* 5. Section: 关于通序历史 */}
      <section className="bg-[#18181D] rounded-2xl border border-[#2A2A34] p-4 shadow-xs space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-red-900 text-amber-200 font-serif font-bold text-lg flex items-center justify-center shadow-inner border border-red-700/60 shrink-0">
            序
          </div>
          <div>
            <h3 className="font-serif font-bold text-sm text-stone-100">
              通序历史
            </h3>
            <p className="text-[11px] text-stone-400 font-serif">版本号: v1.0</p>
          </div>
        </div>

        <p className="text-xs text-stone-300 font-serif leading-relaxed">
          以严谨时序为主线，系统化梳理华夏历代朝代沿革、帝王世系谱、重大历史事件与成语文化渊源，为您提供静心沉浸的历史研学体验。
        </p>

        <div className="pt-2.5 border-t border-[#2A2A34] flex items-center justify-center text-[11px] text-stone-400 font-serif">
          <span>© 2026 通序历史 · v1.0</span>
        </div>
      </section>

      {/* === 清空检索历史确认弹窗 === */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-[#18181E] border border-[#323240] rounded-2xl max-w-sm w-full shadow-2xl overflow-hidden">
            <div className="p-5">
              <div className="flex items-center space-x-2.5 mb-2.5">
                <div className="p-1.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
                  <Trash2 className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-base text-stone-100">清空检索历史</h3>
              </div>
              <p className="text-xs text-stone-300 font-serif leading-relaxed">
                确定要清空全部本地历史搜索记录吗？您的<strong className="text-amber-300">收藏内容将保留</strong>，此操作不可恢复。
              </p>
            </div>
            <div className="px-4 pb-4 flex items-center justify-end space-x-2">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 rounded-xl bg-[#23232C] hover:bg-[#2A2A36] text-stone-200 border border-[#343444] text-xs font-serif transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleConfirmClearCache}
                className="px-4 py-2 rounded-xl bg-red-700 hover:bg-red-600 text-white text-xs font-serif font-bold transition-colors"
              >
                确认清空
              </button>
            </div>
          </div>
        </div>
      )}

      {/* === 隐私政策弹窗（内容与启动时《隐私政策》完全一致） === */}
      {isPrivacyModalOpen && (
        <AgreementDetailModal
          onClose={() => setIsPrivacyModalOpen(false)}
          title="隐私政策"
          content={<PrivacyPolicyContent />}
        />
      )}
    </div>
  );
};

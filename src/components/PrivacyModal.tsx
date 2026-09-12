import React, { useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';

/* ── 隐私政策内容 ── */
export const PrivacyPolicyContent = () => (
  <div className="max-w-none">
    <h1 className="text-xl font-bold text-amber-400 text-center mb-2 font-serif">隐私政策</h1>
    <p className="text-center text-stone-500 text-sm mb-6">生效日期：2026年9月12日</p>

    <div className="bg-amber-500/10 border-l-2 border-amber-500 p-4 rounded-r-lg mb-6">
      <p className="text-stone-300 text-sm leading-relaxed">
        欢迎使用「通序历史」（以下简称"本应用"）。本应用由<strong className="text-stone-200">光年跃迁（温州）科技有限公司</strong>（以下简称"我们"）开发并运营。本应用为纯离线历史通识工具，不联网、不上传任何用户数据。我们深知个人信息对您的重要性，将严格遵守《中华人民共和国个人信息保护法》等相关法律法规，保护您的个人信息安全。
      </p>
    </div>

    <p className="mb-6 text-stone-300 text-sm leading-relaxed">
      本隐私政策旨在说明我们如何收集、使用、存储和保护您在使用本应用过程中产生的本地数据，以及您对这些数据所享有的权利。请您在使用本应用前仔细阅读并充分理解本政策的全部内容，尤其是加粗的条款。如您对本政策有任何疑问、意见或建议，可通过本政策末尾提供的联系方式与我们联系。
    </p>

    <h2 className="text-base font-semibold text-stone-100 mt-6 mb-3 pb-2 border-b border-[#2B2B36] font-serif">一、我们收集的信息</h2>
    <p className="mb-4 text-stone-300 text-sm leading-relaxed">在您使用本应用的过程中，我们仅收集以下本地数据：</p>
    <ol className="list-decimal pl-5 mb-6 space-y-3">
      <li className="text-stone-300 text-sm leading-relaxed">
        <strong className="text-stone-200">收藏数据</strong>：您在浏览朝代、帝王、事件、成语时主动收藏的内容。这些数据存储于您的设备本地（localStorage），用于为您提供个人收藏管理功能。
      </li>
      <li className="text-stone-300 text-sm leading-relaxed">
        <strong className="text-stone-200">搜索历史</strong>：您在使用全局搜索功能时输入的检索词条。这些数据同样存储于设备本地，用于为您提供便捷的检索历史回溯。
      </li>
      <li className="text-stone-300 text-sm leading-relaxed">
        <strong className="text-stone-200">不收集设备信息</strong>：本应用为纯离线工具，不收集设备型号、操作系统版本、设备标识符（如IMEI/Android ID）、IP地址等任何设备信息，亦不进行任何形式的数据上传或网络通信。
      </li>
    </ol>

    <h2 className="text-base font-semibold text-stone-100 mt-6 mb-3 pb-2 border-b border-[#2B2B36] font-serif">二、我们如何使用收集的信息</h2>
    <p className="mb-4 text-stone-300 text-sm leading-relaxed">我们仅会在以下合法、正当、必要的范围内使用您的本地数据：</p>
    <ol className="list-decimal pl-5 mb-6 space-y-3">
      <li className="text-stone-300 text-sm leading-relaxed">
        <strong className="text-stone-200">提供和改进服务</strong>：使用您的收藏数据来实现收藏管理功能；使用搜索历史为您提供便捷的检索回溯。所有数据均在本地处理，不进行任何远程分析。
      </li>
      <li className="text-stone-300 text-sm leading-relaxed">
        <strong className="text-stone-200">不进行数据分析和统计</strong>：本应用不联网，不会对您的数据进行匿名化或去标识化处理后的远程统计分析。
      </li>
    </ol>

    <h2 className="text-base font-semibold text-stone-100 mt-6 mb-3 pb-2 border-b border-[#2B2B36] font-serif">三、我们如何共享、转让和公开披露信息</h2>
    <p className="mb-4 text-stone-300 text-sm leading-relaxed">我们郑重承诺：</p>
    <ol className="list-decimal pl-5 mb-6 space-y-3">
      <li className="text-stone-300 text-sm leading-relaxed">
        <strong className="text-stone-200">不共享</strong>：本应用为纯离线工具，不与任何第三方共享、转让或公开披露您的数据。
      </li>
      <li className="text-stone-300 text-sm leading-relaxed">
        <strong className="text-stone-200">不联网</strong>：本应用不包含任何网络请求功能，您的数据不会离开您的设备。
      </li>
      <li className="text-stone-300 text-sm leading-relaxed">
        <strong className="text-stone-200">法定情形</strong>：除非根据法律法规的规定、行政或司法机关的强制性要求，我们不会向任何第三方披露您的相关信息。
      </li>
    </ol>

    <h2 className="text-base font-semibold text-stone-100 mt-6 mb-3 pb-2 border-b border-[#2B2B36] font-serif">四、我们如何存储和保护信息</h2>
    <ol className="list-decimal pl-5 mb-6 space-y-3">
      <li className="text-stone-300 text-sm leading-relaxed">
        <strong className="text-stone-200">存储地点</strong>：您的所有数据均存储于您的设备本地（浏览器或应用的 localStorage 中），不上传至任何服务器。
      </li>
      <li className="text-stone-300 text-sm leading-relaxed">
        <strong className="text-stone-200">存储期限</strong>：您的数据将一直保存在设备本地，直至您主动删除或卸载本应用。卸载后，所有数据将自动清除。
      </li>
      <li className="text-stone-300 text-sm leading-relaxed">
        <strong className="text-stone-200">安全措施</strong>：由于数据仅存于本地，不受网络攻击威胁。您可通过设备本身的锁屏、加密等安全措施保护数据安全。
      </li>
    </ol>

    <h2 className="text-base font-semibold text-stone-100 mt-6 mb-3 pb-2 border-b border-[#2B2B36] font-serif">五、您的权利</h2>
    <p className="mb-4 text-stone-300 text-sm leading-relaxed">根据相关法律法规，您对您的本地数据享有以下权利：</p>
    <ol className="list-decimal pl-5 mb-6 space-y-3">
      <li className="text-stone-300 text-sm leading-relaxed">
        <strong className="text-stone-200">访问权</strong>：您可以随时在本应用"我的"页面查看和管理您的收藏数据及搜索历史。
      </li>
      <li className="text-stone-300 text-sm leading-relaxed">
        <strong className="text-stone-200">更正权</strong>：您可以删除单条收藏或搜索记录，重新收藏或搜索以更新数据。
      </li>
      <li className="text-stone-300 text-sm leading-relaxed">
        <strong className="text-stone-200">删除权</strong>：您可以随时删除单条收藏记录或清空全部搜索历史，应用将立即删除相关数据。
      </li>
      <li className="text-stone-300 text-sm leading-relaxed">
        <strong className="text-stone-200">数据导出</strong>：本应用所有数据存储在您的设备本地，您可通过设备备份等方式导出您的数据。
      </li>
    </ol>

    <h2 className="text-base font-semibold text-stone-100 mt-6 mb-3 pb-2 border-b border-[#2B2B36] font-serif">六、未成年人保护</h2>
    <p className="mb-6 text-stone-300 text-sm leading-relaxed">我们非常重视对未成年人个人信息的保护。如您是未满14周岁的未成年人，在使用本应用前，应在监护人的指导下仔细阅读本政策，并征得监护人的同意。如我们发现自己在未事先获得监护人可验证同意的情况下收集了未成年人的个人信息，将立即删除相关数据。</p>

    <h2 className="text-base font-semibold text-stone-100 mt-6 mb-3 pb-2 border-b border-[#2B2B36] font-serif">七、本政策的更新</h2>
    <p className="mb-6 text-stone-300 text-sm leading-relaxed">我们可能会根据法律法规的更新、业务的调整或技术的发展，适时对本隐私政策进行修订。修订后的政策将在本应用内显著位置公示，并在生效前通过合理方式通知您。如您继续使用本应用，即表示您同意接受修订后的政策。</p>

    <h2 className="text-base font-semibold text-stone-100 mt-6 mb-3 pb-2 border-b border-[#2B2B36] font-serif">八、联系我们</h2>
    <p className="mb-4 text-stone-300 text-sm leading-relaxed">如您对本隐私政策有任何疑问、意见或建议，或需要行使您的相关权利，请通过以下方式与我们联系：</p>
    <div className="bg-[#1C1C20] border border-[#2B2B36] p-4 rounded-lg mb-6">
      <p className="text-stone-300 text-sm"><strong className="text-stone-200">电子邮箱</strong>：Jp112022@163.com</p>
    </div>

    <div className="mt-8 pt-6 border-t border-[#2B2B36] text-center">
      <p className="text-stone-500 text-sm mb-2">感谢您使用通序历史！</p>
      <p className="text-stone-500 text-sm mb-2">我们致力于为您提供纯粹、离线、沉浸式的中国历史通识体验。</p>
      <p className="text-stone-600 text-xs">© 2026 光年跃迁（温州）科技有限公司 版权所有</p>
    </div>
  </div>
);

/* ── 用户服务协议内容 ── */
const UserAgreementContent = () => (
  <div className="max-w-none">
    <h1 className="text-xl font-bold text-amber-400 text-center mb-2 font-serif">用户服务协议</h1>
    <p className="text-center text-stone-500 text-sm mb-6">更新日期：2026年9月12日</p>

    <h2 className="text-base font-semibold text-stone-100 mt-6 mb-3 font-serif">1. 协议的接受</h2>
    <p className="text-stone-300 text-sm leading-relaxed mb-2">欢迎使用「通序历史」应用（以下简称「本应用」）。</p>
    <p className="text-stone-300 text-sm leading-relaxed mb-2">本协议是您与光年跃迁（温州）科技有限公司（以下简称「我们」）之间关于使用本应用的法律协议。</p>
    <p className="text-stone-300 text-sm leading-relaxed mb-4">通过下载、安装或使用本应用，您表示同意接受本协议的全部条款和条件。</p>

    <h2 className="text-base font-semibold text-stone-100 mt-6 mb-3 font-serif">2. 服务内容</h2>
    <p className="text-stone-300 text-sm leading-relaxed mb-3">本应用是一款纯离线中国历史通识工具，提供以下服务：</p>
    <ul className="list-disc pl-5 mb-4 space-y-2">
      <li className="text-stone-300 text-sm leading-relaxed">全景历史时间线浏览</li>
      <li className="text-stone-300 text-sm leading-relaxed">历代朝代百科详情查阅</li>
      <li className="text-stone-300 text-sm leading-relaxed">帝王谱系与世系传承图谱</li>
      <li className="text-stone-300 text-sm leading-relaxed">历史大事记、成语典故、古今地名对照、干支纪年换算等博古集功能</li>
      <li className="text-stone-300 text-sm leading-relaxed">个人收藏与检索历史管理</li>
    </ul>

    <h2 className="text-base font-semibold text-stone-100 mt-6 mb-3 font-serif">3. 用户义务</h2>
    <p className="text-stone-300 text-sm leading-relaxed mb-3">作为本应用的用户，您同意：</p>
    <ul className="list-disc pl-5 mb-4 space-y-2">
      <li className="text-stone-300 text-sm leading-relaxed">遵守本协议的所有条款</li>
      <li className="text-stone-300 text-sm leading-relaxed">不使用本应用进行任何非法活动</li>
      <li className="text-stone-300 text-sm leading-relaxed">不干扰本应用的正常运行</li>
      <li className="text-stone-300 text-sm leading-relaxed">保护您的设备安全，防止未授权访问</li>
    </ul>

    <h2 className="text-base font-semibold text-stone-100 mt-6 mb-3 font-serif">4. 知识产权</h2>
    <p className="text-stone-300 text-sm leading-relaxed mb-2">本应用的所有内容，包括但不限于文字、图像、音频、视频、软件等，均受知识产权法律保护。</p>
    <p className="text-stone-300 text-sm leading-relaxed mb-4">未经我们的书面许可，您不得复制、修改、分发或商业使用本应用的任何内容。</p>

    <h2 className="text-base font-semibold text-stone-100 mt-6 mb-3 font-serif">5. 免责声明</h2>
    <p className="text-stone-300 text-sm leading-relaxed mb-2">本应用按「原样」提供，不做任何形式的保证。</p>
    <p className="text-stone-300 text-sm leading-relaxed mb-3">我们不保证：</p>
    <ul className="list-disc pl-5 mb-4 space-y-2">
      <li className="text-stone-300 text-sm leading-relaxed">本应用将完全符合您的个人需求</li>
      <li className="text-stone-300 text-sm leading-relaxed">本应用将无中断、及时、安全或无错误地运行</li>
      <li className="text-stone-300 text-sm leading-relaxed">本应用中的历史内容将绝对准确或无任何疏漏</li>
    </ul>

    <h2 className="text-base font-semibold text-stone-100 mt-6 mb-3 font-serif">6. 终止</h2>
    <p className="text-stone-300 text-sm leading-relaxed mb-2">我们有权在任何时候，出于任何原因，终止或暂停您对本应用的访问。</p>
    <p className="text-stone-300 text-sm leading-relaxed mb-4">您也可以随时停止使用本应用或卸载本应用。</p>

    <h2 className="text-base font-semibold text-stone-100 mt-6 mb-3 font-serif">7. 适用法律</h2>
    <p className="text-stone-300 text-sm leading-relaxed mb-2">本协议受中华人民共和国法律管辖。</p>
    <p className="text-stone-300 text-sm leading-relaxed mb-4">任何与本协议相关的争议，应通过友好协商解决；协商不成的，应提交至温州市有管辖权的人民法院诉讼解决。</p>
  </div>
);

/* ── 协议详情弹窗 ── */
export const AgreementDetailModal = ({ onClose, title, content }: { onClose: () => void; title: string; content: React.ReactNode }) => (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-[60]">
    <div className="animate-in slide-in-from-bottom bg-[#1C1C20] rounded-2xl w-full max-w-lg h-[80vh] overflow-hidden shadow-2xl border border-[#2B2B36] flex flex-col">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#2B2B36] shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-amber-500/15 text-amber-400 rounded-lg flex items-center justify-center">
            <ShieldCheck size={20} />
          </div>
          <h2 className="text-lg font-bold text-stone-100 font-serif">{title}</h2>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-[#2B2B36] flex items-center justify-center text-stone-400 active:scale-90 transition-transform hover:text-stone-200"
        >
          <X size={18} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-5">
        {content}
      </div>
    </div>
  </div>
);

/* ── 拒绝确认弹窗 ── */
const DeclineConfirmModal = ({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) => (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-[70]">
    <div className="animate-in slide-in-from-bottom bg-[#1C1C20] rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl border border-[#2B2B36] flex flex-col">
      <div className="p-5">
        <h2 className="text-lg font-bold text-stone-100 mb-3 font-serif">确认拒绝</h2>
        <p className="text-stone-400 text-sm leading-relaxed">您确定要拒绝用户协议与隐私政策吗？拒绝后将无法使用本应用的功能。</p>
      </div>
      <div className="flex border-t border-[#2B2B36]">
        <button
          onClick={onCancel}
          className="flex-1 py-3.5 text-sm font-medium text-stone-400 border-r border-[#2B2B36] active:bg-white/5 transition-colors"
        >
          取消
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 py-3.5 text-sm font-medium text-amber-400 active:bg-white/5 transition-colors"
        >
          确认拒绝
        </button>
      </div>
    </div>
  </div>
);

/* ── 主同意弹窗 ── */
export const PrivacyModal: React.FC<{ onAccept: () => void; onDecline: () => void }> = ({ onAccept, onDecline }) => {
  const [detailModal, setDetailModal] = useState<'agreement' | 'privacy' | null>(null);
  const [showDecline, setShowDecline] = useState(false);

  return (
    <>
      {/* 同意弹窗 */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-[50]">
        <div className="animate-in slide-in-from-bottom bg-[#1C1C20] w-full max-w-sm shadow-2xl max-h-[80vh] overflow-y-auto rounded-2xl border border-[#2B2B36]">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-amber-500/15 text-amber-400 rounded-xl flex items-center justify-center">
                <ShieldCheck size={28} />
              </div>
            </div>
            <h3 className="text-lg font-bold text-stone-100 mb-5 text-center font-serif">
              用户协议与隐私政策
            </h3>
            <div className="mb-5 space-y-3">
              <p className="text-sm text-stone-300 leading-relaxed">
                <span className="text-amber-400 font-medium">①</span> 本应用为纯离线工具，所有数据（收藏、搜索历史）仅存储于您的设备本地，不上传至任何服务器。
              </p>
              <p className="text-sm text-stone-300 leading-relaxed">
                <span className="text-amber-400 font-medium">②</span> 本应用不收集设备标识、IP地址等任何个人信息，不进行任何形式的数据共享或网络通信。
              </p>
            </div>
            <div className="bg-[#121214] rounded-lg p-3 mb-2">
              <p className="text-xs text-stone-500 leading-relaxed">
                请阅读完整的
                <span
                  onClick={() => setDetailModal('agreement')}
                  className="text-amber-400 hover:underline cursor-pointer font-medium"
                >
                  《用户服务协议》
                </span>
                和
                <span
                  onClick={() => setDetailModal('privacy')}
                  className="text-amber-400 hover:underline cursor-pointer font-medium"
                >
                  《隐私政策》
                </span>
                了解详细内容。
              </p>
            </div>
          </div>
          <div className="flex border-t border-[#2B2B36]">
            <button
              onClick={() => setShowDecline(true)}
              className="flex-1 py-3.5 text-sm font-medium text-stone-400 border-r border-[#2B2B36] active:bg-white/5 transition-colors"
            >
              不同意
            </button>
            <button
              onClick={onAccept}
              className="flex-1 py-3.5 text-sm font-medium text-black bg-amber-500 hover:bg-amber-600 active:bg-amber-600 transition-colors"
            >
              同意并继续
            </button>
          </div>
        </div>
      </div>

      {/* 协议详情弹窗 */}
      {detailModal && (
        <AgreementDetailModal
          onClose={() => setDetailModal(null)}
          title={detailModal === 'agreement' ? '用户服务协议' : '隐私政策'}
          content={detailModal === 'agreement' ? <UserAgreementContent /> : <PrivacyPolicyContent />}
        />
      )}

      {/* 拒绝确认弹窗 */}
      {showDecline && (
        <DeclineConfirmModal
          onCancel={() => setShowDecline(false)}
          onConfirm={() => {
            setShowDecline(false);
            onDecline();
          }}
        />
      )}
    </>
  );
};

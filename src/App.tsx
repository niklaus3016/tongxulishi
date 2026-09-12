import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav, NavTabId } from './components/BottomNav';
import { TimelineView } from './components/TimelineView';
import { DynastyView } from './components/DynastyView';
import { EmperorView } from './components/EmperorView';
import { ExploreView } from './components/ExploreView';
import { ProfileView } from './components/ProfileView';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { DetailModal } from './components/DetailModal';
import { Dynasty, Emperor, HistoricalEvent, HistoricalIdiom } from './types';
import { DYNASTIES } from './data/dynasties';
import { EMPERORS } from './data/emperors';
import { HISTORICAL_EVENTS } from './data/events';
import { HISTORICAL_IDIOMS } from './data/idioms';
import { storage } from './utils/storage';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTabId>('timeline');
  const [searchOpen, setSearchOpen] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState<number>(() => storage.getFavorites().length);
  const [privacyAccepted, setPrivacyAccepted] = useState<boolean>(() => storage.getPrivacyAccepted());

  // Detail Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<Dynasty | Emperor | HistoricalEvent | HistoricalIdiom | null>(null);
  const [modalType, setModalType] = useState<'dynasty' | 'emperor' | 'event' | 'idiom' | null>(null);

  const handleRefreshFavorites = () => {
    setFavoritesCount(storage.getFavorites().length);
  };

  // Open modals
  const handleSelectDynasty = (dynasty: Dynasty) => {
    setModalData(dynasty);
    setModalType('dynasty');
    setModalOpen(true);
  };

  const handleSelectEmperor = (emperor: Emperor) => {
    setModalData(emperor);
    setModalType('emperor');
    setModalOpen(true);
  };

  const handleSelectEvent = (event: HistoricalEvent) => {
    setModalData(event);
    setModalType('event');
    setModalOpen(true);
  };

  const handleSelectIdiom = (idiom: HistoricalIdiom) => {
    setModalData(idiom);
    setModalType('idiom');
    setModalOpen(true);
  };

  // Jump from Search or Profile to entity
  const handleNavigateToTarget = (targetType: string, targetId: string) => {
    if (targetType === 'dynasty') {
      const target = DYNASTIES.find(d => d.id === targetId);
      if (target) handleSelectDynasty(target);
    } else if (targetType === 'emperor') {
      const target = EMPERORS.find(e => e.id === targetId);
      if (target) handleSelectEmperor(target);
    } else if (targetType === 'event') {
      const target = HISTORICAL_EVENTS.find(ev => ev.id === targetId);
      if (target) handleSelectEvent(target);
    } else if (targetType === 'idiom') {
      const target = HISTORICAL_IDIOMS.find(i => i.id === targetId);
      if (target) handleSelectIdiom(target);
    }
  };

  const handleJumpToEra = (eraId: string) => {
    if (activeTab !== 'timeline') {
      setActiveTab('timeline');
    }
    setTimeout(() => {
      const el = document.getElementById(`timeline-${eraId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen flex flex-col font-serif bg-[#121214] text-stone-100">
      {/* Top Header */}
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onJumpToEra={handleJumpToEra}
        activeTab={activeTab}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto">
        {activeTab === 'timeline' && (
          <TimelineView
            onSelectDynasty={handleSelectDynasty}
            onSelectEvent={handleSelectEvent}
          />
        )}

        {activeTab === 'dynasties' && (
          <DynastyView
            onSelectDynasty={handleSelectDynasty}
          />
        )}

        {activeTab === 'emperors' && (
          <EmperorView
            onSelectEmperor={handleSelectEmperor}
          />
        )}

        {activeTab === 'explore' && (
          <ExploreView
            onSelectEvent={handleSelectEvent}
            onSelectIdiom={handleSelectIdiom}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileView
            onNavigateToTarget={handleNavigateToTarget}
            onFavoritesChange={handleRefreshFavorites}
          />
        )}
      </main>

      {/* Bottom 5-Bar Navigation */}
      <BottomNav
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        favoritesCount={favoritesCount}
      />

      {/* Global Instant Search Modal */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectDynasty={handleSelectDynasty}
        onSelectEmperor={handleSelectEmperor}
        onSelectEvent={handleSelectEvent}
        onSelectIdiom={handleSelectIdiom}
      />

      {/* Detail Universal Modal */}
      <DetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        data={modalData}
        type={modalType}
        onRefreshFavorites={handleRefreshFavorites}
      />

      {/* Privacy Agreement Modal (startup) */}
      {!privacyAccepted && (
        <PrivacyModal
          onAccept={() => {
            storage.setPrivacyAccepted(true);
            setPrivacyAccepted(true);
          }}
          onDecline={() => {
            storage.setPrivacyAccepted(false);
          }}
        />
      )}
    </div>
  );
}

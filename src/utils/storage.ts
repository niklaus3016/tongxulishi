import { UserFavorite } from '../types';

const STORAGE_KEYS = {
  FAVORITES: 'tx_history_favorites_v1',
  SEARCH_HISTORY: 'tx_history_search_history_v1',
  PRIVACY_ACCEPTED: 'tx_history_privacy_accepted_v1'
};

export const storage = {
  // Favorites
  getFavorites(): UserFavorite[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },
  addFavorite(favorite: Omit<UserFavorite, 'addedAt'>): UserFavorite[] {
    try {
      const list = this.getFavorites();
      const existing = list.find(f => f.targetType === favorite.targetType && f.targetId === favorite.targetId);
      if (existing) return list;
      const updated = [{ ...favorite, addedAt: Date.now() }, ...list];
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(updated));
      return updated;
    } catch {
      return [];
    }
  },
  removeFavorite(targetType: string, targetId: string): UserFavorite[] {
    try {
      const list = this.getFavorites();
      const updated = list.filter(f => !(f.targetType === targetType && f.targetId === targetId));
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(updated));
      return updated;
    } catch {
      return [];
    }
  },
  isFavorite(targetType: string, targetId: string): boolean {
    const list = this.getFavorites();
    return list.some(f => f.targetType === targetType && f.targetId === targetId);
  },

  // Search History
  getSearchHistory(): string[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },
  addSearchQuery(query: string): string[] {
    if (!query.trim()) return this.getSearchHistory();
    try {
      const list = this.getSearchHistory().filter(q => q !== query.trim());
      const updated = [query.trim(), ...list].slice(0, 15);
      localStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(updated));
      return updated;
    } catch {
      return [];
    }
  },
  removeSearchQuery(query: string): string[] {
    try {
      const list = this.getSearchHistory().filter(q => q !== query);
      localStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(list));
      return list;
    } catch {
      return [];
    }
  },
  clearSearchHistory(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.SEARCH_HISTORY);
    } catch (e) {
      console.error(e);
    }
  },

  // Privacy Agreement
  getPrivacyAccepted(): boolean {
    try {
      return localStorage.getItem(STORAGE_KEYS.PRIVACY_ACCEPTED) === 'true';
    } catch {
      return false;
    }
  },
  setPrivacyAccepted(accepted: boolean): void {
    try {
      if (accepted) {
        localStorage.setItem(STORAGE_KEYS.PRIVACY_ACCEPTED, 'true');
      } else {
        localStorage.removeItem(STORAGE_KEYS.PRIVACY_ACCEPTED);
      }
    } catch (e) {
      console.error(e);
    }
  }
};

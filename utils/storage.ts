import { STORAGE_KEYS } from '@/constants';
import type { Language } from '@/types';

export const storage = {
  getFavorites: (): number[] => {
    try {
      if (typeof window === 'undefined') return [];
      const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  setFavorites: (favorites: number[]): void => {
    try {
      if (typeof window === 'undefined') return;
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  },

  getLanguage: (): Language => {
    try {
      if (typeof window === 'undefined') return 'en';
      const lang = localStorage.getItem(STORAGE_KEYS.LANGUAGE) as Language;
      return lang || 'en';
    } catch {
      return 'en';
    }
  },

  setLanguage: (lang: Language): void => {
    try {
      if (typeof window === 'undefined') return;
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
    } catch (error) {
      console.error('Error saving language:', error);
    }
  },
}; 
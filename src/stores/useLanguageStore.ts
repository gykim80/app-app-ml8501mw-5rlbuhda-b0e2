import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Language } from '@/types';

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'ja',
      setLanguage: (language) => set({ language }),
      toggleLanguage: () => {
        const current = get().language;
        set({ language: current === 'ja' ? 'en' : 'ja' });
      },
    }),
    {
      name: 'language-storage',
    }
  )
);
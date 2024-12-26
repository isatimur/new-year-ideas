export interface Idea {
  id: number;
  title: {
    ru: string;
    en: string;
  };
  description: {
    ru: string;
    en: string;
  };
  difficulty: number;
  cost: number;
  funFactor: number;
  author?: string;
  createdAt?: string;
}

export type Language = 'en' | 'ru';

export interface TranslationStrings {
  title: string;
  subtitle: string;
  difficulty: string;
  cost: string;
  funFactor: string;
  loading: string;
  difficultyLevels: {
    all: string;
    easy: string;
    medium: string;
    hard: string;
  };
  costLevels: {
    all: string;
    cheap: string;
    medium: string;
    expensive: string;
  };
  funLevels: {
    all: string;
    normal: string;
    fun: string;
    superFun: string;
  };
  buttons: {
    newIdea: string;
    previousIdea: string;
    nextIdea: string;
    favorite: string;
    inFavorites: string;
    share: string;
    shareIdea: string;
    addToFavorites: string;
    removeFromFavorites: string;
    shareViaTelegram: string;
    shareViaWhatsapp: string;
    shareViaTwitter: string;
  };
  stats: {
    totalIdeas: string;
    currentIdea: string;
    inFavorites: string;
  };
  form: {
    authorName: string;
  };
}
export type Translations = {
  [key in Language]: TranslationStrings;
};
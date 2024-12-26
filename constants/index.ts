export const DIFFICULTY_LEVELS = {
  EASY: '1',
  MEDIUM: '2',
  HARD: '3',
} as const;

export const COST_LEVELS = {
  CHEAP: '1',
  MEDIUM: '2',
  EXPENSIVE: '3',
} as const;

export const FUN_LEVELS = {
  NORMAL: '3',
  FUN: '4',
  SUPER_FUN: '5',
} as const;

export const SNOWFALL_INTERVAL = 3000;
export const CONFETTI_DEFAULTS = {
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 },
};

export const STORAGE_KEYS = {
  FAVORITES: 'ny-ideas-favorites',
  LANGUAGE: 'ny-ideas-language',
} as const; 
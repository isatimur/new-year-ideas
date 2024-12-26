import confetti from 'canvas-confetti';
import type { Idea, Language } from '@/types';

export function generateConfetti(options?: {
  origin?: { x: number; y: number };
  spread?: number;
  count?: number;
}) {
  const defaults = {
    origin: { y: 0.6 },
    spread: 70,
    count: 100,
  };

  const config = { ...defaults, ...options };

  confetti({
    particleCount: config.count,
    spread: config.spread,
    origin: config.origin,
  });
}

export function shareIdea(idea: Idea, lang: Language) {
  const shareText = `Check out this New Year's celebration idea: ${idea.title[lang]} - ${idea.description[lang]}`;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
  window.open(shareUrl, '_blank');
} 
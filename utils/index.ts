import confetti from 'canvas-confetti';
import { Share2, MessageCircle, Send } from 'lucide-react';
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

export const shareServices = {
  twitter: {
    name: 'Twitter',
    icon: Share2,
    getUrl: (text: string) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
    className: 'bg-blue-500 hover:bg-blue-600'
  },
  telegram: {
    name: 'Telegram',
    icon: Send,
    getUrl: (text: string) => `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`,
    className: 'bg-[#0088cc] hover:bg-[#0077b5]'
  },
  whatsapp: {
    name: 'WhatsApp',
    icon: MessageCircle,
    getUrl: (text: string) => `https://wa.me/?text=${encodeURIComponent(text)}`,
    className: 'bg-[#25D366] hover:bg-[#128C7E]'
  }
};

export function shareIdea(idea: Idea, lang: Language, service: keyof typeof shareServices = 'twitter') {
  const shareText = `${idea.title[lang]}\n\n${idea.description[lang]}`;
  const shareUrl = shareServices[service].getUrl(shareText);
  window.open(shareUrl, '_blank');
}
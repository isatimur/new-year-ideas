"use client"

import { Twitter, Share2, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react';

interface ShareButtonsProps {
    title: string;
    text: string;
    url?: string;
}

export function ShareButtons({ title, text, url = typeof window !== 'undefined' ? window.location.href : '' }: ShareButtonsProps) {
    const [mounted, setMounted] = useState(false);
    const [canShare, setCanShare] = useState(false);

    useEffect(() => {
        setMounted(true);
        setCanShare(typeof navigator !== 'undefined' && 'share' in navigator);
    }, []);

    if (!mounted) return null;
    const shareData = {
        title,
        text,
        url
    }

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share(shareData)
            }
        } catch (error) {
            console.error('Error sharing:', error)
        }
    }

    const shareViaTwitter = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
        window.open(twitterUrl, '_blank')
    }

    const shareViaTelegram = () => {
        const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
        window.open(telegramUrl, '_blank')
    }

    return (
        <div className="flex items-center gap-2">
            <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-blue-50 text-blue-500 transition-colors"
                onClick={shareViaTwitter}
                aria-label="Share on Twitter"
            >
                <Twitter className="h-5 w-5" />
            </Button>

            <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-sky-50 text-sky-500 transition-colors"
                onClick={shareViaTelegram}
                aria-label="Share on Telegram"
            >
                <MessageCircle className="h-5 w-5" />
            </Button>

            {typeof navigator !== 'undefined' && 'share' in navigator && (
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-gray-50 text-gray-500 transition-colors"
                    onClick={handleShare}
                    aria-label="Share"
                >
                    <Share2 className="h-5 w-5" />
                </Button>
            )}
        </div>
    )
} 
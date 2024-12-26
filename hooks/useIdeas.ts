'use client';

import { useState, useCallback, useEffect } from 'react';
import { Idea } from '@/types';
import { storage } from '@/utils/storage';

export function useIdeas(initialIdea: Idea) {
    const [ideaHistory, setIdeaHistory] = useState<Idea[]>([]);
    const [currentIdeaIndex, setCurrentIdeaIndex] = useState(-1);
    const [favoriteIdeas, setFavoriteIdeas] = useState<number[]>(() => storage.getFavorites());
    const [isInitialized, setIsInitialized] = useState(false);

    // Initialize with initial idea
    useEffect(() => {
        if (!isInitialized) {
            setIdeaHistory([initialIdea]);
            setCurrentIdeaIndex(0);
            setIsInitialized(true);
        }
    }, [initialIdea, isInitialized]);

    const addToHistory = useCallback((newIdea: Idea) => {
        setIdeaHistory(prev => [...prev, newIdea]);
        setCurrentIdeaIndex(prev => prev + 1);
    }, []);

    const goToPreviousIdea = useCallback(() => {
        if (currentIdeaIndex > 0) {
            setCurrentIdeaIndex(prev => prev - 1);
        }
    }, [currentIdeaIndex]);

    const goToNextIdea = useCallback(() => {
        if (currentIdeaIndex < ideaHistory.length - 1) {
            setCurrentIdeaIndex(prev => prev + 1);
        }
    }, [currentIdeaIndex, ideaHistory.length]);

    const toggleFavorite = useCallback((id: number) => {
        setFavoriteIdeas(prev => {
            const newFavorites = prev.includes(id)
                ? prev.filter(ideaId => ideaId !== id)
                : [...prev, id];
            storage.setFavorites(newFavorites);
            return newFavorites;
        });
    }, []);

    const currentIdea = ideaHistory[currentIdeaIndex] || initialIdea;

    return {
        ideaHistory,
        currentIdea,
        currentIdeaIndex,
        favoriteIdeas,
        addToHistory,
        goToPreviousIdea,
        goToNextIdea,
        toggleFavorite,
        isInitialized,
    };
} 
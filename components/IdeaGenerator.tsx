'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Sparkles, Star, DollarSign, Smile, Heart, Share2, ChevronLeft, ChevronRight, MessageCircle, Send } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { translations } from '@/app/translations/index'
import { Footer } from '@/components/ui/footer'
import { useIdeas } from '@/hooks/useIdeas'
import { generateConfetti, shareIdea } from '@/utils'
import { storage } from '@/utils/storage'
import { DIFFICULTY_LEVELS, COST_LEVELS, FUN_LEVELS, SNOWFALL_INTERVAL } from '@/constants'
import type { Idea, Language } from '@/types'
import { shareServices } from '@/utils'

interface IdeaGeneratorProps {
  initialIdea: Idea;
  initialLang?: Language;
}

export default function IdeaGenerator({ initialIdea, initialLang }: IdeaGeneratorProps) {
  const {
    ideaHistory,
    currentIdea,
    currentIdeaIndex,
    favoriteIdeas,
    addToHistory,
    goToPreviousIdea,
    goToNextIdea,
    toggleFavorite,
    isInitialized,
  } = useIdeas(initialIdea);

  const [isLoading, setIsLoading] = useState(false);
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [costFilter, setCostFilter] = useState<string>('all');
  const [funFactorFilter, setFunFactorFilter] = useState<string>('all');
  const [lang, setLang] = useState<Language>(initialLang || storage.getLanguage());
  const t = translations[lang];

  const generateIdea = async () => {
    setIsLoading(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
      const url = new URL('/api/generate-idea', baseUrl);

      // Add filters to URL params
      url.searchParams.set('difficulty', difficultyFilter);
      url.searchParams.set('cost', costFilter);
      url.searchParams.set('funFactor', funFactorFilter);

      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
        },
        cache: 'no-store',
        next: { revalidate: 0 },
      });

      if (!response.ok) {
        if (response.status === 404) {
          // Handle no matching ideas
          console.warn('No matching ideas found with current filters');
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newIdea = await response.json();
      addToHistory(newIdea);
      generateConfetti();
    } catch (error) {
      console.error('Error fetching idea:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    storage.setLanguage(lang);
  }, [lang]);

  useEffect(() => {
    storage.setFavorites(favoriteIdeas);
  }, [favoriteIdeas]);

  useEffect(() => {
    const snowfall = () => {
      generateConfetti({
        count: 50,
        spread: 70,
        origin: { x: 0.5, y: -0.1 },
      });
    };

    const interval = setInterval(snowfall, SNOWFALL_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const Stats = () => {
    if (!isInitialized) return null;

    return (
      <div className="grid grid-cols-3 gap-6 p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-lg">
        <div className="text-center space-y-2">
          <p className="text-gray-600 font-medium">{t.stats.totalIdeas}</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {Math.max(0, ideaHistory.length)}
          </p>
        </div>
        <div className="text-center space-y-2">
          <p className="text-gray-600 font-medium">{t.stats.currentIdea}</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {Math.max(0, currentIdeaIndex + 1)}
          </p>
        </div>
        <div className="text-center space-y-2">
          <p className="text-gray-600 font-medium">{t.stats.inFavorites}</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
            {favoriteIdeas.length}
          </p>
        </div>
      </div>
    );
  };

  const NavigationButtons = () => {
    if (!isInitialized) return null;

    return (
      <div className="flex justify-between gap-4">
        <Button
          onClick={goToPreviousIdea}
          disabled={currentIdeaIndex <= 0}
          variant="outline"
          className="flex-1 max-w-[200px]"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          {t.buttons.previousIdea}
        </Button>
        <Button
          onClick={goToNextIdea}
          disabled={currentIdeaIndex >= ideaHistory.length - 1}
          variant="outline"
          className="flex-1 max-w-[200px]"
        >
          {t.buttons.nextIdea}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <motion.h1
            className="text-5xl font-bold text-blue-800 mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {t.title}
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t.subtitle}
          </motion.p>
        </header>

        <nav
          aria-label="Filters"
          className="mb-8 flex flex-wrap justify-center gap-4 bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Select onValueChange={setDifficultyFilter}>
              <SelectTrigger className="w-[160px] bg-white">
                <SelectValue placeholder={t.difficultyLevels.all} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.difficultyLevels.all}</SelectItem>
                <SelectItem value="1">{t.difficultyLevels.easy}</SelectItem>
                <SelectItem value="2">{t.difficultyLevels.medium}</SelectItem>
                <SelectItem value="3">{t.difficultyLevels.hard}</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={setCostFilter}>
              <SelectTrigger className="w-[160px] bg-white">
                <SelectValue placeholder={t.costLevels.all} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.costLevels.all}</SelectItem>
                <SelectItem value="1">{t.costLevels.cheap}</SelectItem>
                <SelectItem value="2">{t.costLevels.medium}</SelectItem>
                <SelectItem value="3">{t.costLevels.expensive}</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={setFunFactorFilter}>
              <SelectTrigger className="w-[160px] bg-white">
                <SelectValue placeholder={t.funLevels.all} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.funLevels.all}</SelectItem>
                <SelectItem value="3">{t.funLevels.normal}</SelectItem>
                <SelectItem value="4">{t.funLevels.fun}</SelectItem>
                <SelectItem value="5">{t.funLevels.superFun}</SelectItem>
              </SelectContent>
            </Select>

            <Button
              onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
              className="bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              size="icon"
            >
              <span className="text-lg font-medium">
                {lang === 'ru' ? 'EN' : 'RU'}
              </span>
            </Button>
          </div>
        </nav>

        <main className="space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdea.title[lang]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden"
            >
              <Card className="mb-6 overflow-hidden transform transition-all hover:scale-[1.01] duration-200">
                <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-6">
                  <CardTitle className="text-3xl font-bold tracking-tight">
                    {currentIdea.title[lang]}
                  </CardTitle>
                  {currentIdea.author && (
                    <CardDescription className="text-blue-50 mt-2">
                      {t.form.authorName}: {currentIdea.author}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="p-8 bg-white/90">
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {currentIdea.description[lang]}
                  </p>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-yellow-500" />
                        <span className="font-medium text-gray-700">{t.difficulty}</span>
                      </div>
                      <Progress
                        value={currentIdea.difficulty * 20}
                        className="h-3 bg-yellow-100"
                        indicatorClassName="bg-gradient-to-r from-yellow-400 to-yellow-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-6 h-6 text-green-500" />
                        <span className="font-medium text-gray-700">{t.cost}</span>
                      </div>
                      <Progress
                        value={currentIdea.cost * 20}
                        className="h-3 bg-green-100"
                        indicatorClassName="bg-gradient-to-r from-green-400 to-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Smile className="w-6 h-6 text-pink-500" />
                        <span className="font-medium text-gray-700">{t.funFactor}</span>
                      </div>
                      <Progress
                        value={currentIdea.funFactor * 20}
                        className="h-3 bg-pink-100"
                        indicatorClassName="bg-gradient-to-r from-pink-400 to-pink-500"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap justify-between p-6 bg-gray-50/80 backdrop-blur-sm gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={() => toggleFavorite(currentIdea.id)}
                          className={`flex items-center gap-2 transition-all ${favoriteIdeas.includes(currentIdea.id)
                            ? 'bg-red-500 hover:bg-red-600 text-white'
                            : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                            }`}
                          size="lg"
                        >
                          <Heart className={`w-5 h-5 ${favoriteIdeas.includes(currentIdea.id) ? 'text-white' : 'text-red-500'
                            }`} />
                          {favoriteIdeas.includes(currentIdea.id) ? t.buttons.inFavorites : t.buttons.favorite}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{favoriteIdeas.includes(currentIdea.id) ? t.buttons.removeFromFavorites : t.buttons.addToFavorites}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <div className="flex gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            onClick={() => shareIdea(currentIdea, lang, 'telegram')}
                            className={`flex items-center gap-2 text-white ${shareServices.telegram.className}`}
                            size="lg"
                          >
                            <Send className="w-5 h-5" />
                            Telegram
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t.buttons.shareViaTelegram}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            onClick={() => shareIdea(currentIdea, lang, 'whatsapp')}
                            className={`flex items-center gap-2 text-white ${shareServices.whatsapp.className}`}
                            size="lg"
                          >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t.buttons.shareViaWhatsapp}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            onClick={() => shareIdea(currentIdea, lang, 'twitter')}
                            className={`flex items-center gap-2 text-white ${shareServices.twitter.className}`}
                            size="lg"
                          >
                            <Share2 className="w-5 h-5" />
                            Twitter
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t.buttons.shareViaTwitter}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>

          <NavigationButtons />

          <Button
            onClick={generateIdea}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02]"
            disabled={isLoading}
            aria-label={isLoading ? t.loading : t.buttons.newIdea}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                {t.loading}
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <Star className="w-6 h-6" />
                {t.buttons.newIdea}
              </div>
            )}
          </Button>

          <Stats />
        </main>
      </div>

      <Footer lang={lang} />
    </div>
  );
}


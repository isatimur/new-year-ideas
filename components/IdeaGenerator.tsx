'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Sparkles, Star, DollarSign, Smile, Heart, Share2, PlusCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { addIdea } from '@/app/actions/addIdea'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { translations } from '@/app/translations'

interface Idea {
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
}

interface IdeaGeneratorProps {
  initialIdea: Idea;
  initialLang?: 'en' | 'ru';
}

export default function IdeaGenerator({ initialIdea, initialLang }: IdeaGeneratorProps) {
  const [idea, setIdea] = useState<Idea>(initialIdea);
  const [isLoading, setIsLoading] = useState(false);
  const [ideaHistory, setIdeaHistory] = useState<Idea[]>([initialIdea]);
  const [currentIdeaIndex, setCurrentIdeaIndex] = useState(0);
  const [favoriteIdeas, setFavoriteIdeas] = useState<number[]>([]);
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [costFilter, setCostFilter] = useState<string>('all');
  const [funFactorFilter, setFunFactorFilter] = useState<string>('all');
  const [showAddIdeaForm, setShowAddIdeaForm] = useState(false);
  const [lang, setLang] = useState<'en' | 'ru'>(initialLang || 'ru');
  const t = translations[lang];

  const generateIdea = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-idea');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Oops, we haven't got JSON!");
      }
      const newIdea = await response.json();
      if (isIdeaMatchingFilters(newIdea)) {
        setIdea(newIdea);
        setIdeaHistory(prev => [...prev, newIdea]);
        setCurrentIdeaIndex(prev => prev + 1);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        generateIdea(); // Try again if the idea doesn't match the filters
      }
    } catch (error) {
      console.error('Error fetching idea:', error);
      setIdea({
        id: 0,
        title: {
          ru: "Упс! Что-то пошло не так",
          en: "Oops! Something went wrong"
        },
        description: {
          ru: "Похоже, наш волшебный шар временно не работает. Попробуйте еще раз позже!",
          en: "Looks like our magic ball is temporarily down. Please try again later!"
        },
        difficulty: 0,
        cost: 0,
        funFactor: 0
      });
    } finally {
      setIsLoading(false);
    }
  };

  const goToPreviousIdea = () => {
    if (currentIdeaIndex > 0) {
      setCurrentIdeaIndex(prev => prev - 1);
      setIdea(ideaHistory[currentIdeaIndex - 1]);
    }
  };

  const goToNextIdea = () => {
    if (currentIdeaIndex < ideaHistory.length - 1) {
      setCurrentIdeaIndex(prev => prev + 1);
      setIdea(ideaHistory[currentIdeaIndex + 1]);
    }
  };

  const toggleFavorite = (id: number) => {
    setFavoriteIdeas(prev =>
      prev.includes(id) ? prev.filter(ideaId => ideaId !== id) : [...prev, id]
    );
  };

  const shareIdea = () => {
    const shareText = `Посмотрите на эту крутую идею для празднования Нового года: ${idea.title[lang]} ${idea.description[lang]}`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(shareUrl, '_blank');
  };

  const isIdeaMatchingFilters = (idea: Idea) => {
    return (
      (difficultyFilter === 'all' || idea.difficulty.toString() === difficultyFilter) &&
      (costFilter === 'all' || idea.cost.toString() === costFilter) &&
      (funFactorFilter === 'all' || idea.funFactor.toString() === funFactorFilter)
    );
  };

  const handleAddIdea = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await addIdea(formData);
    if (result.success && result.idea) {
      setShowAddIdeaForm(false);
      setIdeaHistory(prev => [...prev, result.idea as unknown as Idea]);
      setCurrentIdeaIndex(ideaHistory.length);
      setIdea(result.idea as unknown as Idea);
    } else {
      alert(result.error);
    }
  };

  useEffect(() => {
    const snowfall = () => {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: -0.1 },
        colors: ['#ffffff'],
        shapes: ['circle'],
        gravity: 0.1,
        scalar: 0.5,
        drift: 1,
      });
    };

    const interval = setInterval(snowfall, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl shadow-2xl">
      <motion.h1
        className="text-5xl font-bold mb-8 text-center text-blue-800 text-shadow"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {t.title}
      </motion.h1>
      <motion.div
        className="mb-6 flex flex-wrap justify-center space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Select onValueChange={setDifficultyFilter}>
          <SelectTrigger className="w-[140px] mb-2">
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
          <SelectTrigger className="w-[140px] mb-2">
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
          <SelectTrigger className="w-[140px] mb-2">
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
          className="mb-2 bg-gray-200 hover:bg-gray-300"
        >
          {lang === 'ru' ? 'EN' : 'RU'}
        </Button>
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={idea.title[lang]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-6 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <CardTitle className="text-2xl font-semibold">{idea.title[lang]}</CardTitle>
              {idea.author && (
                <CardDescription className="text-sm text-blue-100">{t.form.authorName}: {idea.author}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">{idea.description[lang]}</p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center mb-1">
                    <Sparkles className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-sm font-medium">  {t.difficulty}</span>
                  </div>
                  <Progress value={idea.difficulty * 20} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <DollarSign className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm font-medium"> {t.cost}</span>
                  </div>
                  <Progress value={idea.cost * 20} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <Smile className="w-5 h-5 text-pink-500 mr-2" />
                    <span className="text-sm font-medium"> {t.funFactor}</span>
                  </div>
                  <Progress value={idea.funFactor * 20} className="h-2" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between bg-gray-50">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => toggleFavorite(idea.id)}
                      className={`flex items-center ${favoriteIdeas.includes(idea.id) ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                      <Heart className={`w-5 h-5 mr-2 ${favoriteIdeas.includes(idea.id) ? 'text-white' : 'text-gray-500'}`} />
                      {favoriteIdeas.includes(idea.id) ? t.buttons.inFavorites : t.buttons.favorite}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{favoriteIdeas.includes(idea.id) ? t.buttons.removeFromFavorites : t.buttons.addToFavorites}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button onClick={shareIdea} className="flex items-center bg-blue-500 hover:bg-blue-600 text-white">
                      <Share2 className="w-5 h-5 mr-2" />
                      {t.buttons.share}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t.buttons.shareIdea}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardFooter>
          </Card>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between mb-6">
        <Button
          onClick={goToPreviousIdea}
          disabled={currentIdeaIndex === 0}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          {t.buttons.previousIdea}
        </Button>
        <Button
          onClick={goToNextIdea}
          disabled={currentIdeaIndex === ideaHistory.length - 1}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t.buttons.nextIdea}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Button
          onClick={generateIdea}
          className="w-full mb-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-200 hover:scale-105"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
              {t.loading}
            </div>
          ) : (
            <>
              <Star className="w-5 h-5 mr-2" />
              {t.buttons.newIdea}
            </>
          )}
        </Button>
        <Button
          onClick={() => setShowAddIdeaForm(!showAddIdeaForm)}
          className="w-full mb-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-200 hover:scale-105"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          {showAddIdeaForm ? t.buttons.hideForm : t.buttons.addIdea}
        </Button>
      </motion.div>
      <AnimatePresence>
        {showAddIdeaForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-purple-700">{t.form.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddIdea} className="space-y-4">
                  <div>
                    <Label htmlFor="title">{t.form.ideaTitle}</Label>
                    <Input id="title" name="title" placeholder={t.form.ideaTitle} required />
                  </div>
                  <div>
                    <Label htmlFor="description">{t.form.description}</Label>
                    <Textarea id="description" name="description" placeholder={t.form.description} required />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="difficulty">{t.difficulty}</Label>
                      <Select name="difficulty" defaultValue="2">
                        <SelectTrigger id="difficulty">
                          <SelectValue placeholder={t.difficultyLevels.all} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">{t.difficultyLevels.easy}</SelectItem>
                          <SelectItem value="2">{t.difficultyLevels.medium}</SelectItem>
                          <SelectItem value="3">{t.difficultyLevels.hard}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="cost">{t.cost}</Label>
                      <Select name="cost" defaultValue="2">
                        <SelectTrigger id="cost">
                          <SelectValue placeholder={t.costLevels.all} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">{t.costLevels.cheap}</SelectItem>
                          <SelectItem value="2">{t.costLevels.medium}</SelectItem>
                          <SelectItem value="3">{t.costLevels.expensive}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="funFactor">{t.funFactor}</Label>
                      <Select name="funFactor" defaultValue="4">
                        <SelectTrigger id="funFactor">
                          <SelectValue placeholder={t.funLevels.all} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">{t.funLevels.normal}</SelectItem>
                          <SelectItem value="4">{t.funLevels.fun}</SelectItem>
                          <SelectItem value="5">{t.funLevels.superFun}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="author">{t.form.authorName}</Label>
                    <Input id="author" name="author" placeholder={t.form.authorName} required />
                  </div>
                  <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full">
                    {t.form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="text-center text-gray-600 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p>{t.stats.totalIdeas}: {ideaHistory.length}</p>
        <p>{t.stats.currentIdea}: {currentIdeaIndex + 1}</p>
        <p>{t.stats.inFavorites}: {favoriteIdeas.length}</p>
      </motion.div>
    </div>
  );
}


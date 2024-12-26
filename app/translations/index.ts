import { Translations } from "@/types";

export const translations: Translations = {
    ru: {
        title: "Генератор новогодних идей",
        subtitle: "Найдите креативные способы встретить Новый год",
        difficulty: "Сложность",
        cost: "Стоимость",
        funFactor: "Веселье",
        difficultyLevels: {
            all: "Все",
            easy: "Легко",
            medium: "Средне",
            hard: "Сложно"
        },
        costLevels: {
            all: "Все",
            cheap: "Дешево",
            medium: "Средне",
            expensive: "Дорого"
        },
        funLevels: {
            all: "Все",
            normal: "Нормально",
            fun: "Весело",
            superFun: "Супер весело"
        },
        buttons: {
            previousIdea: "Предыдущая идея",
            nextIdea: "Следующая идея",
            newIdea: "Новая идея",
            share: "Поделиться",
            shareIdea: "Поделиться идеей",
            favorite: "В избранное",
            inFavorites: "В избранном",
            addToFavorites: "Добавить в избранное",
            removeFromFavorites: "Удалить из избранного",
            shareViaTelegram: "Поделиться в Telegram",
            shareViaWhatsapp: "Поделиться в WhatsApp",
            shareViaTwitter: "Поделиться в Twitter",
        },
        form: {
            authorName: "Ваше имя",
        },
        stats: {
            totalIdeas: "Всего идей",
            currentIdea: "Текущая идея",
            inFavorites: "В избранном"
        },
        loading: "Генерация магии..."
    },
    en: {
        title: "New Year's Ideas Generator",
        subtitle: "Find creative ways to celebrate New Year",
        difficulty: "Difficulty",
        cost: "Cost",
        funFactor: "Fun Factor",
        difficultyLevels: {
            all: "All",
            easy: "Easy",
            medium: "Medium",
            hard: "Hard"
        },
        costLevels: {
            all: "All",
            cheap: "Cheap",
            medium: "Medium",
            expensive: "Expensive"
        },
        funLevels: {
            all: "All",
            normal: "Normal",
            fun: "Fun",
            superFun: "Super Fun"
        },
        buttons: {
            previousIdea: "Previous Idea",
            nextIdea: "Next Idea",
            newIdea: "Get New Idea",
            share: "Share",
            shareIdea: "Share Idea",
            favorite: "Favorite",
            inFavorites: "In Favorites",
            addToFavorites: "Add to Favorites",
            removeFromFavorites: "Remove from Favorites",
            shareViaTelegram: "Share via Telegram",
            shareViaWhatsapp: "Share via WhatsApp",
            shareViaTwitter: "Share via Twitter",
        },
        form: {
            authorName: "Your Name",
        },
        stats: {
            totalIdeas: "Total Ideas",
            currentIdea: "Current Idea",
            inFavorites: "In Favorites"
        },
        loading: "Generating magic..."
    }
} as const;

export type Language = keyof typeof translations;
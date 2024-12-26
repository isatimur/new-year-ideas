import { headers } from 'next/headers';
import IdeaGenerator from '@/components/IdeaGenerator';
import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import type { Language } from '@/types';

function getInitialLanguage(): Language {
  const headersList = headers();
  const acceptLanguage = headersList.get('accept-language') || '';
  return acceptLanguage.includes('ru') ? 'ru' : 'en';
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const getInitialIdea = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const url = new URL('/api/generate-idea', baseUrl);

    const response = await fetch(url.toString(), {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching initial idea:', error);
    return {
      id: 1,
      title: {
        ru: "Добро пожаловать!",
        en: "Welcome!"
      },
      description: {
        ru: "Нажмите кнопку, чтобы получить новую идею.",
        en: "Click the button to get a new idea."
      },
      difficulty: 1,
      cost: 1,
      funFactor: 5
    };
  }
};

export default async function Home() {
  const initialIdea = await getInitialIdea();
  const initialLang = getInitialLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100">
      <Suspense fallback={<LoadingSpinner />}>
        <IdeaGenerator
          initialIdea={initialIdea}
          initialLang={initialLang}
        />
      </Suspense>
    </div>
  );
}


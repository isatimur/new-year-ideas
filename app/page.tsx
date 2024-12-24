import IdeaGenerator from '@/components/IdeaGenerator';
import { getUserIdeas } from '@/app/lib/db';
import { translations } from '@/app/translations';

const getInitialIdea = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/generate-idea`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200">
      <IdeaGenerator initialIdea={initialIdea} />
    </main>
  );
}


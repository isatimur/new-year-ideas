import { NextResponse } from 'next/server';
import { ideas } from '@/app/lib/db';
import type { Idea } from '@/types';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const difficulty = searchParams.get('difficulty');
    const cost = searchParams.get('cost');
    const funFactor = searchParams.get('funFactor');

    // Filter ideas based on criteria
    const filteredIdeas = ideas.filter(idea => {
      const matchesDifficulty = difficulty === 'all' || 
                               idea.difficulty.toString() === difficulty;
      const matchesCost = cost === 'all' || 
                         idea.cost.toString() === cost;
      const matchesFunFactor = funFactor === 'all' || 
                              idea.funFactor.toString() === funFactor;

      return matchesDifficulty && matchesCost && matchesFunFactor;
    });

    if (filteredIdeas.length === 0) {
      return NextResponse.json(
        { error: 'No matching ideas found' },
        { status: 404 }
      );
    }

    const randomIndex = Math.floor(Math.random() * filteredIdeas.length);
    const randomIdea = filteredIdeas[randomIndex];
    
    const headers = {
      'Cache-Control': 'no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    };

    return NextResponse.json(randomIdea, { headers });
  } catch (error) {
    console.error('Error generating idea:', error);
    return NextResponse.json(
      { error: 'Failed to generate idea' },
      { status: 500 }
    );
  }
}

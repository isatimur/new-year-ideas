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

    let filteredIdeas = ideas;

    if (difficulty && difficulty !== 'all') {
      filteredIdeas = filteredIdeas.filter(idea => idea.difficulty === Number(difficulty));
    }
    if (cost && cost !== 'all') {
      filteredIdeas = filteredIdeas.filter(idea => idea.cost === Number(cost));
    }
    if (funFactor && funFactor !== 'all') {
      filteredIdeas = filteredIdeas.filter(idea => idea.funFactor === Number(funFactor));
    }

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

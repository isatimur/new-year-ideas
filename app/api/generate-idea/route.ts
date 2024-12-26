import { NextResponse } from 'next/server';
import { ideas } from '@/app/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    const randomIdea = ideas[randomIndex];
    
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

import { writeFile, readFile } from 'fs/promises'
import path from 'path'

export interface UserIdea {
  id: number;
  title: string;
  description: string;
  difficulty: number;
  cost: number;
  funFactor: number;
  author: string;
}

const DB_PATH = path.join(process.cwd(), 'user_ideas.json')

export async function getUserIdeas(): Promise<UserIdea[]> {
  try {
    const data = await readFile(DB_PATH, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading user ideas:', error)
    return []
  }
}

export async function addUserIdea(idea: Omit<UserIdea, 'id'>): Promise<UserIdea> {
  const ideas = await getUserIdeas()
  const newIdea: UserIdea = {
    ...idea,
    id: ideas.length > 0 ? Math.max(...ideas.map(i => i.id)) + 1 : 1
  }
  ideas.push(newIdea)
  await writeFile(DB_PATH, JSON.stringify(ideas, null, 2))
  return newIdea
}


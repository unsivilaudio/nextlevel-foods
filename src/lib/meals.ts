import { Meal } from '@/types/meal';
import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals(): Promise<Meal[]> {
    await new Promise((res) => setTimeout(res, 3 * 1000));
    // throw new Error('Failed to fetch meals!');
    return db.prepare<Meal[]>('SELECT * FROM meals').all() as Meal[];
}

export function getMeal(slug: string): Meal {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal;
}

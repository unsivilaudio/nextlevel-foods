import { Meal } from '@/types/meal';
import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals(): Promise<Meal[]> {
    await new Promise((res) => setTimeout(res, 5 * 1000));
    // throw new Error('Failed to fetch meals!');
    return db.prepare<Meal[]>('SELECT * FROM meals').all() as Meal[];
}

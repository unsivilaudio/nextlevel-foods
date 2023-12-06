import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

import { Meal } from '@/types/meal';

const db = sql('meals.db');

export async function getMeals(): Promise<Meal[]> {
    await new Promise((res) => setTimeout(res, 3 * 1000));
    // throw new Error('Failed to fetch meals!');
    return db.prepare<Meal[]>('SELECT * FROM meals').all() as Meal[];
}

export function getMeal(slug: string): Meal {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal;
}

type SaveMeal = Omit<Meal, 'id'> & {
    image: File | string;
};

export async function saveMeal(meal: SaveMeal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = (meal.image as File).name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await (meal.image as File).arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (err) => {
        if (err) {
            throw new Error('Saving image failed');
        }
    });

    meal.image = `/images/${fileName}`;

    db.prepare(
        `
        INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )
    `,
    ).run(meal);
}

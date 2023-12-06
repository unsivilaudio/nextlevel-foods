'use server';

import { redirect } from 'next/navigation';

import { saveMeal } from '@/lib/meals';
import { Meal } from '@/types/meal';
import { revalidatePath } from 'next/cache';

export async function shareMeal(formData: FormData) {
    const meal = Object.fromEntries(formData) as Omit<Meal, 'id'>;

    // @TODO -- Perform validation on incoming data!!!!!

    await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
}

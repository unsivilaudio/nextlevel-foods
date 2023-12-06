import MealsGrid from '@/components/meals/MealsGrid';
import MealsLoader from '@/components/meals/MealsLoader';
import Button from '@/components/ui/ButtonLink';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

async function Meals() {
    const meals = await getMeals();

    return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
    return (
        <>
            <header className='mx-auto mb-20 mt-12 w-[90%] max-w-[75rem] gap-12 text-2xl text-[#ddd6cb]'>
                <h1>
                    Delicious meals, created{' '}
                    <span className='highlight-text-gradient'>by you</span>
                </h1>
                <p className='mt-8'>
                    Choose your favorite recipe and cook it yourself. It is easy
                    and fun!
                </p>
                <p>
                    <Button href='/meals/share'>
                        Share Your Favorite Recipe
                    </Button>
                </p>
            </header>
            <main>
                <Suspense fallback={<MealsLoader />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}

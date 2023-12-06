import { getMeal } from '@/lib/meals';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type MealDetailsPageProps = {
    params: {
        mealSlug: string;
    };
};

export async function generateMetadata({ params }: MealDetailsPageProps) {
    const meal = getMeal(params.mealSlug);
    if (!meal) {
        notFound();
    }

    return {
        title: meal.title,
        description: meal.summary,
    };
}

export default function MealDetailsPage({ params }: MealDetailsPageProps) {
    const meal = getMeal(params.mealSlug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

    return (
        <>
            <header className='mx-auto flex max-w-[80rem] gap-12 px-4 py-8'>
                <div className='relative h-[20rem] w-[30rem]'>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
                <div className='px-4 pt-2'>
                    <h1 className='text-shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] text-4xl uppercase'>
                        {meal.title}
                    </h1>
                    <p className='text-xl italic text-[#cfa69b]'>
                        by{' '}
                        <a
                            href={`mailto:${meal.creator_email}`}
                            className='highlight-gradient-text hover:text-shadow-[0_0_18px_rgba(0,0,0,0.8)]'
                        >
                            {meal.creator}
                        </a>
                    </p>
                    <p className='text-xl'>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p
                    className='animate-fade-slide-fb mx-auto my-8 max-w-[60rem] rounded-lg bg-[#6e6464] p-8 text-lg text-[#f7eedd] shadow-[0_0_0.5rem_rgba(0,0,0,0.5)]'
                    dangerouslySetInnerHTML={{ __html: meal.instructions }}
                ></p>
            </main>
        </>
    );
}

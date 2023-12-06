import clsx from 'clsx';

import { shareMeal } from '@/actions/share-meal';
import ImagePicker from '@/components/meals/ImagePicker';
import MealsFormSubmit from '@/components/meals/MealsFormSubmit';

export default function ShareMealPage() {
    return (
        <>
            <header className='mx-auto mb-20 mt-12 w-[90%] max-w-[75rem] gap-12 text-xl text-[#ddd6cb]'>
                <h1>
                    Share your{' '}
                    <span className='highlight-text-gradient'>
                        favorite meal
                    </span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className='mx-auto my-12 w-[90%] max-w-[75rem] text-white'>
                <form
                    className='mx-auto max-w-[50rem] space-y-4'
                    action={shareMeal}
                >
                    <div className='flex gap-4 [&>p]:w-full'>
                        <p>
                            <label
                                htmlFor='name'
                                className='mb-2 block font-display text-base font-bold uppercase text-[#b3aea5]'
                            >
                                Your name
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='creator'
                                required
                                className='block w-full rounded border border-[#454952] bg-[#1c2027] px-4 py-2 font-display text-lg text-[#ddd6cb]'
                            />
                        </p>
                        <p>
                            <label
                                htmlFor='email'
                                className='mb-2 block font-display text-base font-bold uppercase text-[#b3aea5]'
                            >
                                Your email
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='creator_email'
                                required
                                className='block w-full rounded border border-[#454952] bg-[#1c2027] px-4 py-2 font-display text-lg text-[#ddd6cb]'
                            />
                        </p>
                    </div>
                    <p>
                        <label
                            htmlFor='title'
                            className='mb-2 block font-display text-base font-bold uppercase text-[#b3aea5]'
                        >
                            Title
                        </label>
                        <input
                            type='text'
                            id='title'
                            name='title'
                            required
                            className='block w-full rounded border border-[#454952] bg-[#1c2027] px-4 py-2 font-display text-lg text-[#ddd6cb]'
                        />
                    </p>
                    <p>
                        <label
                            htmlFor='summary'
                            className='mb-2 block font-display text-base font-bold uppercase text-[#b3aea5]'
                        >
                            Short Summary
                        </label>
                        <input
                            type='text'
                            id='summary'
                            name='summary'
                            required
                            className='block w-full rounded border border-[#454952] bg-[#1c2027] px-4 py-2 font-display text-lg text-[#ddd6cb]'
                        />
                    </p>
                    <p>
                        <label
                            htmlFor='instructions'
                            className='mb-2 block font-display text-base font-bold uppercase text-[#b3aea5]'
                        >
                            Instructions
                        </label>
                        <textarea
                            id='instructions'
                            name='instructions'
                            rows={10}
                            required
                            className='block w-full rounded border border-[#454952] bg-[#1c2027] px-4 py-2 font-display text-lg text-[#ddd6cb]'
                        ></textarea>
                    </p>
                    <ImagePicker label='Your Meal' name='image' />
                    <p className='flex justify-end text-center'>
                        <MealsFormSubmit />
                    </p>
                </form>
            </main>
        </>
    );
}

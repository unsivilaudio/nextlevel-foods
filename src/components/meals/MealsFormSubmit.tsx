'use client';
import clsx from 'clsx';
import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
    const { pending } = useFormStatus();

    return (
        <button
            type='submit'
            className={clsx(
                'rounded-sm border-none px-8 py-3 font-bold text-white duration-300 disabled:cursor-not-allowed disabled:bg-stone-400 disabled:text-stone-200',
                {
                    'animate-bg-gradient bg-gradient-to-r from-[#f9572a] from-[15%] to-[#ff9b05] to-[50%]':
                        true,
                },
            )}
        >
            {pending ? 'Submitting...' : 'Share Meal'}
        </button>
    );
}

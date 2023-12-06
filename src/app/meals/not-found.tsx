'use client';

export default function MealNotFound() {
    return (
        <main className='mx-auto mt-20 flex max-w-[40rem] flex-col gap-6 text-center'>
            <h1 className='error-text-gradient bg-cover font-extrabold uppercase'>
                Meal Not Found
            </h1>
            <p className='text-2xl font-normal text-[#ddd8d8]'>
                Unfortunately, we could not find the requested page or meal
                data.
            </p>
        </main>
    );
}

'use client';

export default function MealsError() {
    return (
        <main className='mx-auto mt-20 flex max-w-[40rem] flex-col gap-6 text-center'>
            <h1 className='error-text-gradient bg-cover font-extrabold uppercase'>
                An Error Occurred!
            </h1>
            <p className='text-2xl font-normal text-[#ddd8d8]'>
                Failed to fetch meal data. Please try again later.
            </p>
        </main>
    );
}

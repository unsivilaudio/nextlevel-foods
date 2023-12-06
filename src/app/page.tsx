import Link from 'next/link';

export default function Home() {
    return (
        <section className='container mx-auto max-w-[48rem] p-8 pb-12 text-center'>
            <h2 className='text-3xl font-semibold'>Time to get started</h2>
            <menu className='[&>a]:underline-[#3added] flex flex-col space-y-2 p-8 [&>a]:text-[#3added] [&>a]:underline'>
                <Link href='/meals'>Meals</Link>
                <Link href='/meals/share'>Meals Share</Link>
                <Link href='/meals/m1'>Meal Details</Link>
                <Link href='/community'>Community</Link>
            </menu>
        </section>
    );
}

import ImageSlideshow from '@/components/images/SlideShow';
import Link from 'next/link';

export const metadata = {
    title: 'All Meals',
    description: 'Browser the delicious meals shared by our vibrant community.',
};

export default function Home() {
    return (
        <>
            <header className='mx-auto my-12 flex max-w-[75rem] gap-12'>
                <div className='flex h-[25rem] w-[40rem] items-center justify-center'>
                    <ImageSlideshow />
                </div>
                <div className='space-y-4'>
                    <div className='space-y-6 text-xl text-[#ddd6cb]'>
                        <h1 className='highlight-text-gradient font-display text-4xl font-bold uppercase text-transparent'>
                            NextLevel Food for NextLevel Foodies
                        </h1>
                        <p>Taste & share food from all over the world.</p>
                    </div>
                    <div className='flex items-center gap-4 text-2xl'>
                        <Link
                            href='/community'
                            className='mt-4 inline-block rounded-lg bg-transparent px-4 py-2 font-normal text-[#ff9b05] duration-200 hover:text-[#f9b241]'
                        >
                            Join the Community
                        </Link>
                        <Link
                            href='/meals'
                            className='animate-bg-gradient mt-4 inline-block rounded-lg bg-gradient-to-r from-[#f9572a] from-[15%] to-[#ff9b05] to-[40%] px-4 py-2 font-bold text-white duration-300'
                        >
                            Explore Meals
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                <section className='mx-auto my-8 flex w-[90%] max-w-[50rem] flex-col gap-8 text-center text-xl text-[#ddd6cb]'>
                    <h2>How it works</h2>
                    <p>
                        NextLevel Food is a platform for foodies to share their
                        favorite recipes with the world. It&apos;s a place to
                        discover new dishes, and to connect with other food
                        lovers.
                    </p>
                    <p>
                        NextLevel Food is a place to discover new dishes, and to
                        connect with other food lovers.
                    </p>
                </section>

                <section className='mx-auto my-8 flex w-[90%] max-w-[50rem] flex-col gap-8 text-center text-xl text-[#ddd6cb]'>
                    <h2>Why NextLevel Food?</h2>
                    <p>
                        NextLevel Food is a platform for foodies to share their
                        favorite recipes with the world. It&apos;s a place to
                        discover new dishes, and to connect with other food
                        lovers.
                    </p>
                    <p>
                        NextLevel Food is a place to discover new dishes, and to
                        connect with other food lovers.
                    </p>
                </section>
            </main>
        </>
    );
}

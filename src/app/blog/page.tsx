import Link from 'next/link';

export default function BlogPage() {
    return (
        <section>
            <h1 className='mb-4 text-3xl font-bold'>The Blog</h1>
            <nav className='space-y-3'>
                <p className='text-xl'>
                    <Link
                        href='/blog/p1'
                        className='border-b-2 border-[#f4c33d] pb-[2px] text-[#f4c33d] duration-200 hover:border-[#bd3df4] hover:text-[#bd3df4]'
                    >
                        Post 1
                    </Link>
                </p>
                <p className='text-xl'>
                    <Link
                        href='/blog/p2'
                        className='border-b-2 border-[#f4c33d] pb-[2px] text-[#f4c33d] duration-200 hover:border-[#bd3df4] hover:text-[#bd3df4]'
                    >
                        Post 2
                    </Link>
                </p>
                <p className='text-xl'>
                    <Link
                        href='/'
                        className='border-b-2 border-[#f4c33d] pb-[2px] text-[#f4c33d] duration-200 hover:border-[#bd3df4] hover:text-[#bd3df4]'
                    >
                        Go Back.
                    </Link>
                </p>
            </nav>
        </section>
    );
}

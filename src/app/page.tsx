import Link from 'next/link';

import MainContent from '@/layout/MainContent';
import Header from '@/layout/Header';

export default function Home() {
    return (
        <section>
            <Header />
            <p className='mb-4 text-xl'>🔥 Let&apos;s get started! 🔥</p>
            <nav className='space-y-3'>
                <p className='text-xl'>
                    <Link
                        href='/about'
                        className='border-b-2 border-[#f4c33d] pb-[2px] text-[#f4c33d] duration-200 hover:border-[#bd3df4] hover:text-[#bd3df4]'
                    >
                        About Us
                    </Link>
                </p>
                <p className='text-xl'>
                    <Link
                        href='/blog'
                        className='border-b-2 border-[#f4c33d] pb-[2px] text-[#f4c33d] duration-200 hover:border-[#bd3df4] hover:text-[#bd3df4]'
                    >
                        Blog
                    </Link>
                </p>
            </nav>
        </section>
    );
}

import Image from 'next/image';
import MainContent from '@/layout/MainContent';

export default function Home() {
    return (
        <MainContent>
            <Image
                width={128}
                height={128}
                src='/logo.png'
                alt='A server surrounded by magic sparkles.'
                className='mx-auto h-32 w-32 object-cover drop-shadow-[0_0_4px_#f6c363]'
            />
            <h1 className='mx-auto my-12 font-display text-5xl font-semibold text-[#ede9f3]'>
                Welcome to this NextJS Course!
            </h1>
            <p className='text-xl'>🔥 Let&apos;s get started! 🔥</p>
        </MainContent>
    );
}

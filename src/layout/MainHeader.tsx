import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';

export default function MainHeader() {
    return (
        <header className='flex items-center justify-between px-4 py-8 md:px-[10%] md:py-8'>
            <Link
                href='/'
                className='flex items-center justify-center gap-8 font-display text-2xl font-bold uppercase tracking-[0.15rem] text-[#ddd6cb]'
            >
                <Image
                    className='h-20 w-20 object-contain drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]'
                    width={75}
                    height={75}
                    src={logoImg.src}
                    alt='A plate with food on it'
                />
                NextLevel Food
            </Link>

            <nav>
                <ul className='flex gap-6 text-lg'>
                    <li>
                        <Link
                            href='/meals'
                            className='hover:text-shadow-[0_0_18px_rgba(248,190,42,0.8)] rounded-md px-4 py-2 font-bold text-[#ddd6cb] hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:bg-clip-text hover:text-transparent'
                        >
                            Browse Meals
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/community'
                            className='hover:text-shadow-[0_0_18px_rgba(248,190,42,0.8)] rounded-md px-4 py-2 font-bold text-[#ddd6cb] hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:bg-clip-text hover:text-transparent'
                        >
                            Community
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

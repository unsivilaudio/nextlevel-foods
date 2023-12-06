import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';
import MainHeaderBG from '@/layout/MainHeaderBG';
import NavLink from '@/components/nav/NavLink';

export default function MainHeader() {
    return (
        <>
            <MainHeaderBG />
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
                        priority
                    />
                    NextLevel Food
                </Link>

                <nav>
                    <ul className='flex gap-6 text-lg'>
                        <li>
                            <NavLink href='/meals'>Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href='/community'>
                                Foodies Community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

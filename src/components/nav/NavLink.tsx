'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
    const path = usePathname();

    return (
        <Link
            href={href}
            className={clsx(
                'hover:text-shadow-[0_0_18px_rgba(255,188,17,0.616)] rounded-md px-4 py-2 font-bold text-[#ddd6cb] transition-[text-shadow,background-image]  duration-200 ease-out hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:bg-clip-text hover:text-transparent',
                {
                    'bg-gradient-to-r from-[#ff8a05] to-[#f9b331] bg-clip-text text-transparent':
                        path.startsWith(href),
                },
            )}
        >
            {children}
        </Link>
    );
}

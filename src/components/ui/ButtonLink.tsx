import Link from 'next/link';

type ButtonProps = {
    href: string;
    children: React.ReactNode;
};

export default function Button({ children, href }: ButtonProps) {
    return (
        <Link
            href={href}
            className='animate-bg-gradient mt-4 inline-block rounded-lg bg-gradient-to-r from-[#f9572a] from-[15%] to-[#ff9b05] to-[40%] px-4 py-2 font-bold text-white duration-300'
        >
            {children}
        </Link>
    );
}

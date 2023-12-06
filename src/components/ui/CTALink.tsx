import Link from 'next/link';

type CTALinkProps = {
    children: React.ReactNode;
    href: string;
};

export default function CTALink({ children, href }: CTALinkProps) {
    return (
        <Link
            href={href}
            className='mt-4 inline-block rounded-lg bg-transparent px-4 py-2 font-normal text-[#ff9b05] duration-200 hover:text-[#f9b241]'
        >
            {children}
        </Link>
    );
}

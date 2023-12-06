import type { PropsWithChildren } from 'react';

export default function MainContent({ children }: PropsWithChildren) {
    return (
        <main className='container mx-auto my-20 max-w-[60rem] text-center'>
            {children}
        </main>
    );
}

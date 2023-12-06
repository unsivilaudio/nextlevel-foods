import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

export default function CommunityPage() {
    return (
        <>
            <header className='mx-auto mb-20 mt-12 gap-12 text-center text-2xl text-[#ddd6cb]'>
                <h1>
                    One shared passion:{' '}
                    <span className='highlight-text-gradient'>Food</span>
                </h1>
                <p className='mt-4'>
                    Join our community and share your favorite recipes!
                </p>
            </header>
            <main className='mx-auto w-[90%] max-w-[40rem] text-center'>
                <h2>Community Perks</h2>

                <ul className='my-12'>
                    <li className='flex flex-col items-center gap-8'>
                        <Image
                            className='h-32 w-32 object-contain'
                            src={mealIcon}
                            alt='A delicious meal'
                        />
                        <p>Share & discover recipes</p>
                    </li>
                    <li className='flex flex-col items-center gap-8'>
                        <Image
                            className='h-32 w-32 object-contain'
                            src={communityIcon}
                            alt='A crowd of people, cooking'
                        />
                        <p>Find new friends & like-minded people</p>
                    </li>
                    <li className='flex flex-col items-center gap-8'>
                        <Image
                            className='h-32 w-32 object-contain'
                            src={eventsIcon}
                            alt='A crowd of people at a cooking event'
                        />
                        <p>Participate in exclusive events</p>
                    </li>
                </ul>
            </main>
        </>
    );
}

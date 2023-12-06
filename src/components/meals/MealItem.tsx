import Image from 'next/image';

import type { Meal } from '@/types/meal';
import ButtonLink from '@/components/ui/ButtonLink';

type MealItemProps = Omit<Meal, 'id'>;

export default function MealItem({
    title,
    slug,
    image,
    summary,
    creator,
}: MealItemProps) {
    return (
        <article className='flex h-full flex-col justify-between overflow-hidden rounded bg-gradient-to-r from-[#2c1e19] to-[#25200f] text-[#ddd6cb] shadow-[0_0_12px_rgba(0,0,0,0.3)] duration-300 ease-in-out'>
            <header>
                <div className='relative h-[15rem]'>
                    <Image
                        className='object-cover'
                        src={image}
                        alt={title}
                        fill
                    />
                </div>
                <div className='px-4 pt-2'>
                    <h3>{title}</h3>
                    <p className='text-sm'>by {creator}</p>
                </div>
            </header>
            <div className='flex h-full flex-col justify-between p-4'>
                <p className='py-4 pr-4'>{summary}</p>
                <div className='flex justify-end'>
                    <ButtonLink href={`/meals/${slug}`}>
                        View Details
                    </ButtonLink>
                </div>
            </div>
        </article>
    );
}

import Link from 'next/link';

type BlogPostPageProps = {
    params: {
        slug: string;
    };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
    return (
        <div>
            <h2 className='mb-4 text-3xl font-bold'>The Blog Post Page</h2>
            <p className='my-3 font-semibold italic'>
                Visiting post {params.slug}
            </p>
            <p className='text-xl'>
                <Link
                    href='/blog'
                    className='border-b-2 border-[#f4c33d] pb-[2px] text-[#f4c33d] duration-200 hover:border-[#bd3df4] hover:text-[#bd3df4]'
                >
                    &larr; Go Back.
                </Link>
            </p>
        </div>
    );
}

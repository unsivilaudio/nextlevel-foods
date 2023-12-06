'use client';
import Image from 'next/image';
import { useRef, useState, type SyntheticEvent } from 'react';

type ImagePickerProps = {
    label?: string;
    name: string;
};

export default function ImagePicker({ label, name }: ImagePickerProps) {
    const [pickedImage, setPickedImage] = useState<
        string | ArrayBuffer | null
    >();
    const imageInput = useRef<HTMLInputElement>(null);

    function handlePickClick() {
        imageInput.current?.click();
    }

    function handleImageChange(event: SyntheticEvent<HTMLInputElement>) {
        const file = event.currentTarget.files
            ? event.currentTarget.files[0]
            : null;
        if (!file) return;

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    }

    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <div className='mb-4 flex items-start gap-6'>
                <div className='relative flex h-[10rem] w-[10rem] items-center justify-center border-2 border-[#a4abb9] text-center text-[#a4abb9]'>
                    {!pickedImage && (
                        <p className='p-4'>No image picked yet.</p>
                    )}
                    {pickedImage && (
                        <Image
                            className='object-cover'
                            src={pickedImage as string}
                            alt='the image picked by the user'
                            fill
                        />
                    )}
                </div>
                <input
                    ref={imageInput}
                    className='hidden'
                    onChange={handleImageChange}
                    type='file'
                    id={name}
                    accept='image/png, image/jpeg'
                    name={name}
                    required
                />
                <button
                    onClick={handlePickClick}
                    type='button'
                    className='rounded-sm bg-[#a4abb9] px-6 py-2 duration-200 hover:bg-[#b3b9c6]'
                >
                    Pick an Image
                </button>
            </div>
        </div>
    );
}

import Image from 'next/image'

export default function ImageBanner({ blok }) {
    const { banner_image } = blok;
    const { filename, alt } = banner_image;
    
    return (
        <>
            <div className="relative flex items-center justify-center w-full h-96 mt-11 mb-16">
                <Image
                    src={filename }
                    alt={alt || "Banner Image"}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </>
    )
}
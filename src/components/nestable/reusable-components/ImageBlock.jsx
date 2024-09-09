import Image from "next/image";

export default function ImageBlock({ blok }) {
    const { image } = blok;
    
    return (
        <>
            {blok.image_block}
        </>
    )
}
import Link from 'next/link';

export default function Links({ blok }) {
    const { link_text, link_title } = blok;
    return (
      <>
        <Link
          href={blok.link_text?.url || "#"}
          className="text-black font-semibold underline hover:text-gray-700 text-sm"
        >
          {blok.link_title || "Länk"}
        </Link>
      </>
    );
}
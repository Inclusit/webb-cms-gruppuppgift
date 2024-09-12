import Link from "next/link";

export default function Logo({ linkComponent }) {
    const linkUrl = linkComponent?.link_text?.cached_url;

    return (
        <div className="logo">
            {linkUrl ? (
                <Link href={`/${linkUrl}`} className="text-2xl font-bold">
                    {linkComponent.link_title || "Unnamed Link"}
                </Link>
            ) : (
                <h1 className="text-2xl font-bold">No Logo</h1>
            )}
        </div>
    );
}

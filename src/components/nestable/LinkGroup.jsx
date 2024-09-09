import Link from 'next/link';

export default function LinkGroup({ group, index }) {
    return (
        <div className="link_group">
            <h2 className="text-xl font-semibold mb-4">
                {group.Links[0]?.title_text || `Group ${index + 1}`}
            </h2>
            <ul className="space-y-2">
                {group.Links.map((linkItem) => (
                    <li key={linkItem._uid}>
                        <Link href={linkItem.link_text?.cached_url || "#"} className="text-gray-400 hover:underline">
                            {linkItem.link_title || "Unnamed Link"}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

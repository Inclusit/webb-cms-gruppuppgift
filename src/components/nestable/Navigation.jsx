
import Link from 'next/link';

export default function Navigation({ navigationComponent }) {
    if (!navigationComponent || !Array.isArray(navigationComponent.Nav_link)) {
        return <p>No navigation links available</p>;
    }

    return (
        <nav className="navigation">
            <ul className="flex space-x-6">
                {navigationComponent.Nav_link.map((linkItem) => (
                    <li key={linkItem._uid}>
                        <Link href={linkItem.link_text?.cached_url || "#"} className="text-lg hover:underline">
                            {linkItem.link_title || "Unnamed Link"}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

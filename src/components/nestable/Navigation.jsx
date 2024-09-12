import Link from 'next/link';
import { useState } from 'react';

export default function Navigation({ navigationComponent }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLinkClick = () => {
        // Stänger dropdown när ett alternativ har klickats
        setIsDropdownOpen(false);
    };

    if (!navigationComponent || !Array.isArray(navigationComponent.Nav_link)) {
        return <p>No navigation links available</p>;
    }

    return (
        <nav className="navigation">
            <ul className="flex space-x-6">
                {/* Den första länken "Products" med dropdown */}
                <li className="relative">
                    <button
                        onClick={handleDropdownToggle}
                        className="text-lg hover:underline"
                    >
                        Products
                    </button>

                    {isDropdownOpen && (
                        <ul className="absolute top-full mt-2 bg-white shadow-lg p-2 rounded-lg space-y-2">
                            <li>
                                <Link
                                    href="/shop-list"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                    onClick={handleLinkClick}
                                >
                                    All
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/shop-list?section=men"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                    onClick={handleLinkClick}
                                >
                                    Men
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/shop-list?section=women"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                    onClick={handleLinkClick}
                                >
                                    Women
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/shop-list?section=kids"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                    onClick={handleLinkClick}
                                >
                                    Kids
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Rendera resterande länkar */}
                {navigationComponent.Nav_link.slice(1).map((linkItem) => (
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

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchField({ searchFieldComponent }) {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/shop-list?category=${searchQuery}`);
    };

    return (
        <div className="search flex items-center space-x-2">
            {searchFieldComponent && searchFieldComponent.search_icon && searchFieldComponent.search_icon[0] && (
                <img
                    src={searchFieldComponent.search_icon[0].Icon.filename}
                    alt="Search Icon"
                    className="w-6 h-6"
                />
            )}
            {searchFieldComponent ? (
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="searchbar"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">Sök</button>
                </form>
            ) : (
                <p>No search field available</p>
            )}
        </div>
    );
}

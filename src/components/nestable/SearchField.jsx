"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchField() {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Ändra URL
        router.push(`/shop-list?search=${searchTerm}`);
    };

    return (
        <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
                type="text"
                placeholder="Sök produkter"
                value={searchTerm}
                onChange={handleSearchChange}
                className="border p-2 rounded"
            />
            <button type="submit" className="ml-2 bg-white text-black border border-black py-2 px-4 rounded">
                Sök
            </button>
        </form>
    );
}

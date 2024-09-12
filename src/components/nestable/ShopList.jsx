import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductFilter from "../nestable/product-components/ProductFilter";
import BtnGrid from "./reusable-components/BtnGrid";

// Funktion för att normalisera strängar
const normalizeString = (str) => {
    return str
        .toLowerCase()
        .replace(/['\s]/g, ""); // Tar bort apostrofer och mellanslag
};

export default function ShopList({ blok }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSection, setSelectedSection] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    // Använd `useSearchParams` för att få query-parametrar från URL:en
    const searchParams = useSearchParams();
    const section = searchParams.get("section");
    const searchQuery = searchParams.get("search");

    // Uppdatera vald sektion baserat på URL-query-parametern
    useEffect(() => {
        if (section) {
            setSelectedSection(normalizeString(section));
        } else {
            setSelectedSection(null); // Om sektion är null, visa alla produkter
        }
    }, [section]);

    // Uppdatera sökterm baserat på URL-query-parametern
    useEffect(() => {
        if (searchQuery) {
            setSearchTerm(normalizeString(searchQuery));
        }
    }, [searchQuery]);

    const handleFilterClick = (category) => {
        setSelectedCategory(normalizeString(category));
    };

    return (
        <div className="bg-white p-12 rounded-lg flex flex-col items-start w-full max-w-screen-lg mx-auto">
            {blok.component === "Shop_list" && blok.shop_list.length > 0 ? (
                blok.shop_list.map((item) => {
                    switch (item.component) {
                        case "title":
                            return (
                                <h1 key={item._uid} className="text-5xl font-bold mb-3">
                                    {item.title_text}
                                </h1>
                            );
                        case "text_field":
                            return (
                                <p key={item._uid} className="font-medium text-base mb-16 max-w-prose">
                                    {item.text_field}
                                </p>
                            );
                        case "btn_grid":
                            return (
                                <BtnGrid key={item._uid} item={item} handleFilterClick={handleFilterClick} />
                            );
                        case "product_grid":
                            // Filtrera produkterna baserat på vald kategori, sektion och sökterm
                            const filteredProducts = item.product_thumbnails.filter((product) => {
                                const normalizedCategory = normalizeString(product.product_category);
                                const normalizedSection = normalizeString(product.product_section);

                                const matchesCategory = selectedCategory
                                    ? normalizedCategory.includes(selectedCategory)
                                    : true;
                                const matchesSection = selectedSection
                                    ? normalizedSection === selectedSection
                                    : true;
                                const matchesSearch = searchTerm
                                    ? normalizeString(product.product_name).includes(searchTerm)
                                    : true;

                                // Om ingen sektion är vald (dvs. selectedSection är null), visa alla produkter
                                return matchesCategory && (selectedSection ? matchesSection : true) && matchesSearch;
                            });

                            if (filteredProducts.length === 0) {
                                return (
                                    <p key={item._uid} className="text-red-500 font-semibold m-5">
                                        Inga produkter hittades för vald filtrering.
                                    </p>
                                );
                            }

                            return (
                                <ProductFilter
                                    key={item._uid}
                                    products={filteredProducts}
                                    selectedCategory={selectedCategory}
                                    selectedSection={selectedSection}
                                />
                            );
                        default:
                            return null;
                    }
                })
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

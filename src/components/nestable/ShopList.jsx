import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";  // Ändrat från useRouter till useSearchParams
import ProductFilter from "../nestable/product-components/ProductFilter";
import BtnGrid from "./reusable-components/BtnGrid";

export default function ShopList({ blok }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Använd `useSearchParams` för att få query-parametrar från URL:en
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    // Uppdatera vald kategori baserat på URL-query-parametern
    useEffect(() => {
        if (category) {
            setSelectedCategory(category.toLowerCase());
        }
    }, [category]);

    const handleFilterClick = (category) => {
        setSelectedCategory(category.toLowerCase());
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
                            return <BtnGrid key={item._uid} item={item} handleFilterClick={handleFilterClick} />;
                        case "product_grid":
                            // Filtrera produkterna baserat på vald kategori
                            const filteredProducts = selectedCategory
                                ? item.product_thumbnails.filter((product) =>
                                    product.product_category.toLowerCase().includes(selectedCategory)
                                )
                                : item.product_thumbnails;

                            return (
                                <ProductFilter
                                    key={item._uid}
                                    products={filteredProducts}
                                    selectedCategory={selectedCategory}
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

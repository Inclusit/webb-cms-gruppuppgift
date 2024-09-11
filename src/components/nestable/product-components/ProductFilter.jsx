import ProductGrid from "../ProductGrid";

export default function ProductFilter({ products, selectedCategory }) {
    const filteredProducts = (products) => {
        if (!selectedCategory) {
            return products; // Visa alla 
        }

        return products.filter((product) => {
            const productCategory = product.product_category?.toLowerCase();
            const productSection = product.product_section?.toLowerCase();
            return (
                productCategory === selectedCategory || productSection === selectedCategory
            );
        });
    };

    return (
        <div>
            <ProductGrid products={filteredProducts(products)} />
        </div>
    );
}

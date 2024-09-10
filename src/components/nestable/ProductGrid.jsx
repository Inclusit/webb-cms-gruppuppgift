export default function ProductGrid({ products }) {

    if (!products || !Array.isArray(products)) {
        return <p>No products available</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 pt-10">
            {products.map((product) => (
                <div key={product._uid} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl" >
                    <img
                        src={product.product_image.filename}
                        alt={product.product_name}
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{product.product_name}</h2>
                        <p className="text-gray-600 mb-2">Size: {product.product_size}</p>
                        <p className="text-gray-800 font-bold">{product.product_prize} SEK</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

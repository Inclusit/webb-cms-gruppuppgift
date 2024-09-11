export default function ProductDesc({ blok }) {
    const {
      product_title = "Placeholder Title",
      product_price = "0",
      product_description = "No description available",
    } = blok || {};

    return (
      <>
        <div className=" text-gray-900 md:flex-1 px-4">
          <h2 className="text-3xl font-bold">
            {product_title || "Placeholder Title"}
          </h2>
          <p className=" mb-4">
            {product_price || "0"}$
          </p>
          <div className="flex mb-4">
            <div className="text-base text-gray-700">
              <p className="">
                {product_description || "No description available"}
              </p>
            </div>
          </div>
        </div>
      </>
    );
}
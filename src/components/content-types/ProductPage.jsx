import ProductDesc from "../nestable/product-components/ProductDesc";
import ProductColor from "../nestable/product-components/ProductColor";
import ProductSizing from "../nestable/product-components/ProductSizing";
import SizeGuide from "../nestable/product-components/SizeGuide";
import Image from "next/image";

export default function ProductPage({ blok }) {
  
  const { product_text, colors, sizes, size_links, product_image } = blok;
  console.log("size guide", blok.size_links);
  
  return (
    <>
      <div className="md:flex  md:space-x-8 px-4 mb-60 mt-20 max-w-7xl mx-auto">
        <div className="md:w-1/2">
          <div className="h-[554px] w-[554px]  rounded-lg mb-4 relative">
            {product_image && (
              <Image
                src={product_image?.filename || "https://placehold.co/554"}
                alt={product_image.alt || "Image"}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col -mx-4">
          <div className=" space-y-4">
            {product_text && <ProductDesc blok={product_text?.[0]} />}
          </div>
          <div className="space-y-2">
            <div>
              <ProductColor blok={colors?.[0]} />
              <div className="mt-3">
                <ProductSizing blok={sizes?.[0]} />
              </div>
            </div>
            <div className="mt-10">
              <SizeGuide blok={size_links?.[0]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

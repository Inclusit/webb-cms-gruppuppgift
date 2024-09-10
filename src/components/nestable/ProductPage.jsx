import ProductDesc from "./product-components/ProductDesc";
import ProductColor from "./product-components/ProductColor";
import ProductSizing from "./product-components/ProductSizing";
import SizeGuide from "./product-components/SizeGuide";
import Image from "next/image";

export default function ProductPage({ blok }) {
  const { product_text, colors, sizes, size_guide, product_image } = blok;
  /* console.log("sizes", sizes) */
  return (
    <>
      <div className="md:flex  md:space-x-8 px-4 mb-60 mt-20 max-w-7xl mx-auto">
        <div className="md:w-1/2">
          <div className="h-[554px] w-[554px]  rounded-lg mb-4 relative">
            {product_image && (
              <Image
                src={product_image.filename}
                alt={product_image.alt || "Image"}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col  -mx-4">
          <div className="md:w-1/2 space-y-4">
            {product_text && <ProductDesc blok={product_text[0]} />}
          </div>
          <div className="space-y-2">
            <ProductColor blok={colors} />
            <ProductSizing blok={sizes} />
            <SizeGuide blok={size_guide} />
          </div>
        </div>
      </div>
    </>
  );
}

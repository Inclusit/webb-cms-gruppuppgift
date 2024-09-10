import ProductDesc from "./product-components/ProductDesc";
import ProductColor from "./product-components/ProductColor";
import ProductSizing from "./product-components/ProductSizing";
import SizeGuide from "./product-components/SizeGuide";
import Image from "next/image";

export default function ProductPage({ blok }) {
  console.log("Blok:", blok); 
  const { product_description, product_color, product_sizing, size_guide, product_image } = blok;

  return (
    <>
      <div className="md:flex md:space-x-8 px-4 mb-28 mt-20 max-w-7xl mx-auto">
        <div className="md:w-1/2">
          <div className="h-[460px] w-full rounded-lg mb-4">
            {product_image && (
              <Image
                src={product_image.filename}
                alt={product_image.alt || "Image"}
                layout="responsive"
                width={554}
                height={554}
                className="rounded-md"
              />
            )}
          </div>
        </div>

        <div>
          <div className="md:w-1/2 space-y-4">
            <ProductDesc blok={product_description} />
          </div>
          <div className="space-y-2">
            <ProductColor blok={product_color} />
            <ProductSizing blok={product_sizing} />
            <SizeGuide blok={size_guide} />
          </div>
        </div>
      </div>
    </>
  );
}

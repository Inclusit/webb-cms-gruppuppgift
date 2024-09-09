import ProductDesc from "./product-components/ProductDesc";
import ProductColor from "./product-components/ProductColor";
import ProductSizing from "./product-components/ProductSizing";
import SizeGuide from "./product-components/SizeGuide";
import ImageBlock from "./reusable-components/ImageBlock";

export default function ProductPage({ blok }) {
  {
    console.log(blok);
  }

  return (
    <>
      <div className="md:flex-1 px-4 mb-28">
        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <ImageBlock
            blok={blok.image_block}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <ProductDesc blok={blok.product_description} />
      </div>
      <ProductColor blok={blok.product_color} />
      <ProductSizing blok={blok.product_sizing} />
      <SizeGuide blok={blok.size_guide} />
    </>
  );
}

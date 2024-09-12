import Btn from "../reusable-components/Btn";

export default function ProductSizing({ blok }) {
  if (!blok || !blok.sizes) return null;
  const { sizes } = blok;

  console.log("sizes", sizes);
  /* const { product_size, sizes, product_size_btn = [] } = blok?.[0] || {};
  const { btn_text } = product_size_btn; */

  return (
    <>
      <div className="md:flex-1 px-4">
        <p className="text-gray-500 text-sm">{blok?.product_size || `Sizes`}</p>
      </div>
      <div className="flex items-center ml-4 mb-10">
        <div className="flex items-center  space-x-4">
          {sizes.map((size, index) => (
            <Btn
              key={index}
              btn_text={size}
              className="w-8 h-8 mr-2 border rounded-sm hover:border-2 focus:border-2"
            />
          ))}
        </div>
      </div>
    </>
  );
}

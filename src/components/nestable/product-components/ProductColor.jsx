import Btn from "../reusable-components/Btn";

export default function ProductColor({ blok }) {
  const { product_color_btn = [] } = blok[0] || {};
  /* console.log("product_color_btn", product_color_btn); */
  return (
    <>
      <div className="md:flex-1 px-4">
        <div className=" text-gray-500 text-sm">
          <p>Hello from product color</p>
        </div>
        <div className="flex items-center mt-2 space-x-4">
          <Btn className="w-6 h-6 rounded-full hover:border-l hover:bg-orange-700 dark:bg-orange-700 hover:border-stone-900" />
        </div>
      </div>
    </>
  );
}

import Btn from "../reusable-components/Btn";

export default function ProductColor({ blok }) {
  if (!blok || !blok.colors) return null;
  const { product_color, colors } = blok || {};

  return (
    <>
      <div className="md:flex-1 px-4">
        <div className=" text-gray-500 text-sm">
          <p>{blok?.product_color || `Colors`}</p>
        </div>
        <div className="flex items-center mt-2 space-x-4">
          {colors.map((color, index) => (
            <span
              key={index}
              className="w-8 h-8 inline-block rounded-full border border-gray-300 cursor-pointer hover:opacity-75 hover:border-2 hover:border-black"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

import Btn from "../reusable-components/Btn";

export default function ProductSizing({ blok }) {
  const { product_size_btn = [] } = blok[0] || {};
  const { btn_text } = product_size_btn;
  console.log("blok", blok);
  console.log("btn_text", btn_text);

  return (
    <>
      <div className="md:flex-1 px-4">
        <p className="text-gray-500 text-sm">Hello from product sizing</p>
      </div>
      <div className="flex items-center ml-4 mt-2 mb-10">
        <div className="flex items-center mt-2 space-x-4">
          {product_size_btn.map(
            (size) =>
              size.btn_text && (
                <Btn
                  key={size._uid}
                  className="w-8 h-8 mr-2 border rounded-sm"
                >
                  {size.btn_text}
                </Btn>
              )
          )}
          {console.log("product_size_btn map", product_size_btn.map((size) => size.btn_text))}
        </div>
      </div>
    </>
  );
}

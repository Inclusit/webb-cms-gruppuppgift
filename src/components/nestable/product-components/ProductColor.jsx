import Btn from "../reusable-components/Btn";

export default function ProductColor({ blok }) {
  const { product_color, product_color_btn = [] } = blok?.[0] || {};
  const { btn_text } = product_color_btn;
  
  return (
    <>
      <div className="md:flex-1 px-4">
        <div className=" text-gray-500 text-sm">
          <p>
            {blok?.product_color || `Colors`}
          </p>
        </div>
        <div className="flex items-center mt-2 space-x-4">
          {blok?.product_color_btn.map(
            (color) =>
              color.btn_text && (
                <Btn
                  key={color._uid}
                  className="w-9 h-9 rounded-full hover:border-l hover:bg-orange-700 dark:bg-orange-700 hover:border-2 focus:border-2"
                  btn_text={color.btn_text}
                >
                  {color.btn_text}
                </Btn>
              )
          )}
        </div>
      </div>
    </>
  );
}

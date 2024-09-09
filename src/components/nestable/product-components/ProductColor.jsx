import Btn from "../reusable-components/Btn";

export default function ProductColor({ blok }) {
  return (
    <>
      <div className="md:flex-1 px-4">
        <div className=" text-gray-500 text-sm">
          <p>Hello from product color</p>
        </div>
        <div className="flex items-center mt-2 mb-3">
          <Btn className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2" />
        </div>
      </div>
    </>
  );
}

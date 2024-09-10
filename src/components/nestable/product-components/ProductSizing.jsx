export default function ProductSizing({ blok }) {
  return (
    <>
      <div className="md:flex-1 px-4">
        <p className=" text-gray-500 text-sm">Hello from product sizing</p>
      </div>
      <div className="flex items-center mt-2 mb-10">
        <div className="flex items-center mt-2 space-x-4">
          <div className="w-8 h-8 mr-2">XS</div>
          <div className="w-8 h-8 mr-2">S</div>
          <div className="w-8 h-8 mr-2">M</div>
          <div className="w-8 h-8 mr-2">L</div>
          <div className="w-8 h-8 mr-2">XL</div>
          <div className="w-8 h-8 mr-2">2XL</div>
          <div className="w-8 h-8 mr-2">3XL</div>
        </div>
      </div>
    </>
  );
}

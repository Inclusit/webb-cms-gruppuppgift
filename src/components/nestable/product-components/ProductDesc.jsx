export default function ProductDesc({ blok }) {
    console.log("product desc", blok);
    return (
      <>
        <div className=" text-gray-900 md:flex-1 px-4">
          <h2 className="text-3xl font-bold">Hello from product title</h2>
          <p className=" mb-6">Hello frm product price</p>
          <div className="flex mb-4">
            <div className="text-base text-gray-700">
              <p className="">hello from product description</p>
            </div>
          </div>
        </div>
      </>
    );
}
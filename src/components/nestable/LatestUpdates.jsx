import Title from "./reusable-components/Title";
import TextField from "./reusable-components/TextField";
import Image from "next/image";
import Btn from "./reusable-components/Btn";

export default function LatestUpdates({ blok }) {
    const { updates_btn, updates_images, updates_title, updates_description } = blok;
    const btn_text = updates_btn?.[0]?.btn_text || "Default Button Text";
    const text_field = updates_description?.[0]?.text_field || "Default Description";
    const title_text = updates_title?.[0]?.title_text || "Default Title";

    {console.log(updates_images)}

    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
          <div className="text-center mb-6">
            <h1 className="mb-8 text-4xl font-semibold lg:text-6xl">
              <Title blok={{ title_text }} />
            </h1>

            <p className="mb-4 text-gray-500 text-lg max-w-3xl mx-auto">
              <TextField blok={{ text_field }} />
            </p>
          </div>

          <div className="mb-10">
            <Btn btn_text={btn_text} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <p>En text</p>
            <p>En till text</p>
            <p>En tredje text</p>
            {/* {updates_images.map((image, index) => {
                return (
                  <div key={index} className="relative h-96">
                    <Image
                      src={image.filename}
                      alt={image.alt || `Image ${index + 1}`}
                      width={300}
                      height={400}
                      className="rounded-md object-cover"
                    />
                  </div>
                );
                })} */}
          </div>
        </div>
      </>
    );
}
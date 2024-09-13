import Image from "next/image";
import Title from "./reusable-components/Title";
import TextField from "./reusable-components/TextField";
import Btn from "./reusable-components/Btn";

export default function Hero({ blok }) {
  const { hero_image, hero_title, hero_description, hero_btn, background_color } = blok;
  const btn_text = hero_btn?.[0]?.btn_text || "Default Button Text";
  const text_field = hero_description?.[0]?.text_field || "Default Description";
  const title_text = hero_title?.[0]?.title_text || "Default Title";
  

  return (
    <>
      <div className={`flex flex-col items-center justify-center min-h-screen p-6 mt-14 `} style={{backgroundColor: blok.background_color?.color || "#FFFFFF"}}>
        <div className="text-center mb-6">
          <h1 className="mb-8 text-4xl font-semibold lg:text-6xl">
            <Title blok={{ title_text }} />
          </h1>

          <p className={`mb-4 text-gray-500 text-lg max-w-3xl mx-auto`}>
            <TextField blok={{ text_field }} />
          </p>
        </div>

        <div className="mb-10 ">
          <Btn btn_text={btn_text} />
        </div>
        <div className="w-full max-w-5xl mx-auto">
          {hero_image && (
            <Image
              src={hero_image?.filename || "https://placehold.co/1115x510"}
              alt={hero_image.alt || "Image"}
              layout="responsive"
              width={1115}
              height={510}
              className="rounded-md"
            />
          )}
        </div>
      </div>
    </>
  );
}

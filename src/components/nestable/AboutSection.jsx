import RichTextDefault from "./reusable-components/RichText";
import Title from "./reusable-components/Title";
import TextField from "./reusable-components/TextField";
import LatestUpdates from "./LatestUpdates";

export default function AboutSection({ blok }) {
    
    const {
      about_title: [{ title_text } = {}] = [],
      about_desc: [{ text_field } = {}] = [],
      about_text = [{ richtext_field: [] } = {}],
    } = blok || {};


    
    return (
      <div className="py-12">
        <div className="container mx-auto mb-14">
          <h1 className="flex flex-col items-center text-4xl font-semibold lg:text-6xl">
            <Title blok={{ title_text }} />
          </h1>
        </div>
        <div className="mb-4 text-gray-500 text-lg max-w-3xl mx-auto">
          <TextField blok={{ text_field }} />

          {about_text.map((item) => {
            console.log(item.richtext_field); 
            return (
              <RichTextDefault key={item._uid} blok={item.richtext_field} />
            );
          })}
        </div>
        <div></div>
      </div>
    );
}

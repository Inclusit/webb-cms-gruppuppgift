import Links from "../reusable-components/Links";

export default function SizeGuide({ blok }) {

  const { guide_link = [], link_subtitle } = blok || {};

  return (
    <>
      <div className="md:flex-1 px-4">
        <div>
          {guide_link.map((link) => (
            <Links
              key={link._uid}
              blok={link} 
              
            />
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-sm">{link_subtitle}</p>
      </div>
    </>
  );
}

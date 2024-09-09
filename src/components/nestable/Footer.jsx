export default function Footer({ blok }) {
    if (!blok || !Array.isArray(blok)) {
        console.error("blok is undefined or not an array");
        return null;
    }

    // Hämta titeln, textfältet och länkgrupp från blok-arrayen
    const FooterTitle = blok.find(item => item.component === "title");
    const TextField = blok.find(item => item.component === "text_field");
    const LinkGrid = blok.find(item => item.component === "Link_grid");

    return (
        <footer className="w-full p-8 border-t-2 border-black">
            {/* Flex container för titeln och länkgrupperna */}
            <div className="flex justify-between items-start">
                {/* Vänstra delen med titel och text */}
                <div className="text-left mr-8 w-1/3 max-w-sm">
                    {/* Rendera titeln */}
                    <div className="title mb-4">
                        {FooterTitle && FooterTitle.title_text ? (
                            <h1 className="text-2xl font-bold">{FooterTitle.title_text}</h1>
                        ) : (
                            <h1 className="text-2xl font-bold">No Title</h1>
                        )}
                    </div>

                    {/* Rendera textfältet */}
                    <div className="text_field">
                        {TextField && TextField.text_field ? (
                            <p className="text-lg">{TextField.text_field}</p>
                        ) : (
                            <p className="text-lg">No Text Field</p>
                        )}
                    </div>
                </div>

                {/* Högra delen med Link_groups - Flex container för länkgrupper horisontellt */}
                <div className="flex space-x-8">
                    {LinkGrid && LinkGrid.Link_groups ? (
                        LinkGrid.Link_groups.map((group, index) => (
                            <div key={index} className="link_group">
                                {/* Rubrik för varje länkgrupp */}
                                <h2 className="text-xl font-semibold mb-4">Group {index + 1}</h2>
                                <ul className="space-y-2">
                                    {/* Iterera över Links i varje grupp */}
                                    {group.Links.map((linkItem) => (
                                        <li key={linkItem._uid}>
                                            <a href={linkItem.link_text?.cached_url || "#"} className="text-blue-500 hover:underline">
                                                {linkItem.link_title || "Unnamed Link"}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p>No Links available</p>
                    )}
                </div>
            </div>
        </footer>
    );
}

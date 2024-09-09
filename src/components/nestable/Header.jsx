export default function Header({ blok }) {
    if (!blok || !Array.isArray(blok)) {
        console.error("blok is undefined or not an array");
        return null;
    }

    // Hämta logotyp, navigation och sökfält från blok-arrayen
    const logoComponent = blok.find(item => item.component === "Logo");
    const navigationComponent = blok.find(item => item.component === "Navigation");
    const searchFieldComponent = blok.find(item => item.component === "Search_field");
    const bagIcon = blok.find(item => item.component === "Icon" && item.Title === "bag");

    return (
        <header className="w-full p-4 border-b-2 border-black flex justify-between items-center">

            {/* Vänster del: Logotyp, Navigation och Sökfält */}
            <div className="flex items-center space-x-6 flex-grow">
                {/* Logotypen */}
                <div className="logo">
                    {logoComponent && logoComponent.Logo ? (
                        <h1 className="text-2xl font-bold">{logoComponent.Logo}</h1>
                    ) : (
                        <h1 className="text-2xl font-bold">No Logo</h1>
                    )}
                </div>

                {/* Navigationen */}
                <nav className="navigation">
                    {navigationComponent && navigationComponent.Nav_link && navigationComponent.Nav_link.length > 0 ? (
                        <ul className="flex space-x-6">
                            {navigationComponent.Nav_link.map((linkItem) => (
                                <li key={linkItem._uid}>
                                    <a href={linkItem.link_text?.cached_url || "#"} className="text-lg hover:underline">
                                        {linkItem.link_title || "Unnamed Link"}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No navigation links available</p>
                    )}
                </nav>

                {/* Sökfältet med ikon framför */}
                <div className="search flex items-center space-x-2">
                    {searchFieldComponent && searchFieldComponent.search_icon && searchFieldComponent.search_icon[0] && (
                        <img
                            src={searchFieldComponent.search_icon[0].Icon.filename}
                            alt="Search Icon"
                            className="w-6 h-6"
                        />
                    )}

                    {searchFieldComponent ? (
                        <input
                            type="text"
                            placeholder="Search..."
                            className="searchbar"
                        />
                    ) : (
                        <p>No search field available</p>
                    )}
                </div>
            </div>

            {/* Höger del: Bag-ikonen */}
            <div className="bag-icon flex items-center space-x-2">
                {bagIcon && bagIcon.Icon ? (
                    <img
                        src={bagIcon.Icon.filename}
                        alt="Bag Icon"
                        className="w-6 h-6"
                    />
                ) : null}

                <p className="text-lg font-bold">3</p>
            </div>
        </header>
    );
}

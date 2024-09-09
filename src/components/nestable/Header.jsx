export default function Header({ blok }) {
    if (!blok || !Array.isArray(blok)) {
        console.error("blok is undefined or not an array");
        return null;
    }

    // Hämta logotyp, navigation och sökfält från blok-arrayen
    const logoComponent = blok.find(item => item.component === "Logo");
    const navigationComponent = blok.find(item => item.component === "Navigation");
    const searchFieldComponent = blok.find(item => item.component === "Search_field");

    return (
        <header className="w-full p-4 border-b-2 border-black flex justify-between items-center">
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

            {/* Sökfältet */}
            <div className="search">
                {searchFieldComponent ? (
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border-2 border-gray-300 rounded-lg p-2"
                    />
                ) : (
                    <p>No search field available</p>
                )}
            </div>
        </header>
    );
}

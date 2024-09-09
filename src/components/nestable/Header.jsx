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
        <header className="w-full w-full p-4 border-b-2 border-black p-4">

            <div className="logo">
                {logoComponent && logoComponent.Logo ? (
                    <h1>{logoComponent.Logo}</h1>
                ) : (
                    <h1>No Logo</h1>
                )}
            </div>


            <nav className="navigation">
                {navigationComponent && navigationComponent.Nav_link && navigationComponent.Nav_link.length > 0 ? (
                    <ul>
                        {navigationComponent.Nav_link.map((linkItem) => (
                            <li key={linkItem._uid}>
                                <a href={linkItem.link_text?.cached_url || "#"}>
                                    {linkItem.link_title || "Unnamed Link"}
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No navigation links available</p>
                )}
            </nav>


            <div className="search">
                {searchFieldComponent ? (
                    <input type="text" placeholder="Search..." />
                ) : (
                    <p>No search field available</p>
                )}
            </div>
        </header>
    );
}

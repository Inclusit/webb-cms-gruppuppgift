import Navigation from './Navigation';
import Logo from './Logo';
import SearchField from './SearchField';
import HeaderBanner from './HeaderBanner';

export default function Header({ blok }) {
    if (!blok || !Array.isArray(blok)) {
        console.error("blok is undefined or not an array");
        return null;
    }

    // Hämta banner, logotyp, navigation, sökfält och shopping bag
    const bannerComponent = blok.find(item => item.component === "text_banner");
    const logoComponent = blok.find(item => item.component === "Logo");
    const logoLinkComponent = blok.find(item => item.component === "link" && item.link_title === "Ecommerce");
    const navigationComponent = blok.find(item => item.component === "Navigation");
    const searchFieldComponent = blok.find(item => item.component === "Search_field");
    const bagIcon = blok.find(item => item.component === "Icon" && item.Title === "bag");

    return (
        <>
            {/* Banner över headern */}
            <HeaderBanner bannerComponent={bannerComponent} />


            <header className="w-full p-4 border-b-2 border-black flex justify-between items-center">

                <div className="flex items-center space-x-6 flex-grow">

                    {/* Logotypen */}
                    <Logo linkComponent={logoLinkComponent} />


                    {/* Navigationen */}
                    <Navigation navigationComponent={navigationComponent} />

                    {/* Sökfältet med ikon framför */}
                    <SearchField searchFieldComponent={searchFieldComponent} />

                </div>

                {/*Bag-ikonen */}
                <div className="bag-icon flex items-center space-x-2 mr-4">
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
        </>
    );
}

"use client";
import Navigation from './Navigation';
import Logo from './Logo';
import HeaderBanner from './HeaderBanner';
import SearchField from './SearchField';
import { useRouter } from 'next/router';

export default function Header({ blok }) {
    if (!blok || !Array.isArray(blok)) {
        console.error("blok is undefined or not an array");
        return null;
    }

    // Hämta banner, logotyp, navigation, sökfält och shopping bag från blok
    const bannerComponent = blok.find(item => item.component === "text_banner");
    const logoComponent = blok.find(item => item.component === "Logo");
    const logoLinkComponent = blok.find(item => item.component === "link" && item.link_title === "Ecommerce");
    const navigationComponent = blok.find(item => item.component === "Navigation");
    const searchFieldComponent = blok.find(item => item.component === "search_field"); // Hämta sökfältet från Storyblok
    const bagIcon = blok.find(item => item.component === "Icon" && item.Title === "bag");

    return (
        <>
            <HeaderBanner bannerComponent={bannerComponent} />

            <header className="w-full p-4 border-b-2 border-black flex justify-between items-center">
                <div className="flex items-center space-x-6 flex-grow">
                    <Logo linkComponent={logoLinkComponent} />
                    <Navigation navigationComponent={navigationComponent} />

                    {/* Sökfältet från Storyblok */}
                    <SearchField blok={searchFieldComponent} />
                </div>

                {/* Bag-ikonen */}
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
            </header> {/* Lägg till den saknade stängande header-taggen här */}
        </>
    );
}


export default function SearchField({ searchFieldComponent }) {
    return (
        <>
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

        </>
    )
}





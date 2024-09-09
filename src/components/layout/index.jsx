//Uses config set global components for the layout4
import Header from "../nestable/Header";
export default function Layout({ config, children }) {
    console.log("config data:", config);
    //Create at least a header and footer component
    //Use console.log to determine blok object structure if unsure...
    if (!config || !config.content || !config.content.Header) {
        console.log('header:', config.data.Header);
        return null;
    }

    return (
        <>
            <header>
                {config.content.Header ? (
                    <Header blok={config.content.Header} />
                ) : (
                    <p>No Header available</p>
                )}
            </header>

            <main>{children}</main>
            <footer></footer>
        </>
    );
}
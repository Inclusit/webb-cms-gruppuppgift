//Uses config set global components for the layout4
import Footer from "../nestable/Footer";
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
                <Header blok={config.content.Header} />
            </header>

            <main>{children}</main>

            <footer>
                <Footer blok={config.content.Footer} />
            </footer>
        </>
    );
}
//Uses config set global components for the layout4
import Footer from "../nestable/Footer";
import Header from "../nestable/Header";
export default function Layout({ config, children }) {

    //Create at least a header and footer component


    if (!config || !config.content || !config.content.Header) {

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
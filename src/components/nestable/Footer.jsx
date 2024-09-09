import Link from 'next/link';
import LinkGrid from './LinkGrid';

export default function Footer({ blok }) {
    if (!blok || !Array.isArray(blok)) {
        console.error("blok is undefined or not an array");
        return null;
    }

    // Hämta titeln, textfältet och länkgrupp från blok-arrayen
    const FooterTitle = blok.find(item => item.component === "title");
    const TextField = blok.find(item => item.component === "text_field");
    const linkGridData = blok.find(item => item.component === "Link_grid");
    const EmailComponent = blok.find(item => item.component === "Input");

    return (
        <footer className="w-full p-8 border-t-2 border-black">
            <div className="max-w-7xl mx-auto flex justify-between px-4">

                {/* titel och textfält */}
                <div className="text-left max-w-lg">
                    <div className="title mb-4">
                        {FooterTitle && FooterTitle.title_text ? (
                            <h1 className="text-4xl font-bold">{FooterTitle.title_text}</h1>
                        ) : (
                            <h1 className="text-2xl font-bold">No Title</h1>
                        )}
                    </div>

                    <div className="text_field">
                        {TextField && TextField.text_field ? (
                            <p className="text-lg">{TextField.text_field}</p>
                        ) : (
                            <p className="text-lg">No Text Field</p>
                        )}
                    </div>

                    <div className="email">
                        {EmailComponent ? (
                            <input
                                type="text"
                                placeholder="Email Adress"
                                className="border-2 border-black mt-4 p-2 w-full md:w-96"
                            />
                        ) : (
                            <p>No Input field available</p>
                        )}
                    </div>
                </div>

                {/*  Link_groups */}
                <LinkGrid linkGridData={linkGridData} />

            </div>
        </footer>
    );
}

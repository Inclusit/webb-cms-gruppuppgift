import Link from "next/link";

export default function HeaderBanner({ bannerComponent }) {
    return (
        <>
            {
                bannerComponent && (
                    <div className="w-full bg-black py-2 text-center text-sm">
                        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
                            <span className="text-white">{bannerComponent.banner_text[0]?.title_text}</span>
                            <span className="text-white">{bannerComponent.banner_text[1]?.title_text}</span>
                            <Link href={bannerComponent.banner_text[2]?.link_text?.cached_url || "#"} className="text-white hover:underline">
                                {bannerComponent.banner_text[2]?.link_title || "Support"}
                            </Link>
                        </div>
                    </div>
                )
            }
        </>
    )
}
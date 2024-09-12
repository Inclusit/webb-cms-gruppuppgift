export default function Logo({ logoComponent, linkTitle }) {
    console.log(logoComponent, linkTitle);
    return (
        <div className="logo">
            {linkTitle ? (
                <h1 className="text-2xl font-bold">{linkTitle}</h1>
            ) : (
                <h1 className="text-2xl font-bold">No Logo</h1>
            )}
        </div>
    );
}

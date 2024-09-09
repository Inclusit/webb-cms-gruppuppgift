
export default function Logo({ logoComponent }) {
    return (
        <div className="logo">
            {logoComponent && logoComponent.Logo ? (
                <h1 className="text-2xl font-bold">{logoComponent.Logo}</h1>
            ) : (
                <h1 className="text-2xl font-bold">No Logo</h1>
            )}
        </div>
    );
}

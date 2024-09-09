import LinkGroup from './LinkGroup'; // Importera LinkGroup-komponenten

export default function LinkGrid({ linkGridData }) {
    return (
        <div className="flex space-x-10">
            {linkGridData && linkGridData.Link_groups ? (
                linkGridData.Link_groups.map((group, index) => (
                    <LinkGroup key={index} group={group} index={index} />
                ))
            ) : (
                <p>No Links available</p>
            )}
        </div>
    );
}

export default function BtnGrid({ item, handleFilterClick }) {
    return (
        <div className="flex gap-4 flex-wrap">
            {item.btns.map((btnItem) => (
                <button
                    key={btnItem._uid}
                    onClick={() => handleFilterClick(btnItem.btn_text.toLowerCase())} // Anropar handleFilterClick
                    className="bg-white text-black border border-black py-2 px-4 hover:bg-black hover:text-white transition-all"
                >
                    {btnItem.btn_text}
                </button>
            ))}
        </div>
    );
}

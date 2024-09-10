export default function BtnGrid({ item }) { // Tar emot hela "item" istället för bara "btnItem"
    return (
        <div className="flex gap-4 flex-wrap">
            {item.btns.map((btnItem) => (
                <button
                    key={btnItem._uid}
                    className="bg-white text-black border border-black py-2 px-4 rounded hover:bg-black hover:text-white transition-all"
                >
                    {btnItem.btn_text}
                </button>
            ))}
        </div>
    );
}

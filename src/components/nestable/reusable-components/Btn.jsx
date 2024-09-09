export default function Btn({ btn_text }) {
  return (
    <button className="h-12 w-44 border border-neutral-800 hover:bg-zinc-600 hover:text-amber-50 transition duration-100 ease-in-out text-base font-semibold">
      {btn_text}
    </button>
  );
}

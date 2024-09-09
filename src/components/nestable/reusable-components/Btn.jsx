export default function Btn({ btn_text }) {
   
  return (
    <button className=" py-2 px-14 border border-neutral-800 hover:bg-zinc-600 hover:text-amber-50 transition duration-100 ease-in-out text-sm font-semibold">
      {btn_text}
    </button>
  );
}

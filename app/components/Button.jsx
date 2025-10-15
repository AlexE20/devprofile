export default function Button({ text, className }) {
  return (
    <button
      className={`bg-blue-400 text-white px-6 py-1 rounded-full  hover:bg-blue-500 transition-all hover:cursor-pointer w-fit ${className}`}
    >
      {text}
    </button>
  );
}

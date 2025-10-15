export default function Badge({ things, className }) {
  return (
    <div className={`flex flex-wrap gap-1 mt-2 ${className}`}>
      {things.map((thing, index) => (
        <span
          key={index}
          className="bg-blue-100 text-blue-400 text-sm font-medium  px-2 py-0.5 rounded-full"
        >
          {thing}
        </span>
      ))}
    </div>
  );
}

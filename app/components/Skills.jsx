export default function Skills({ skills }) {
  return (
    <div className="mt-5 ml-5 flex flex-col gap-2">
      <h2 className="text-black font-extrabold text-xl">Skills</h2>
      <div className="flex flex-wrap gap-1 mt-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-400 text-sm font-medium  px-2 py-0.5 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

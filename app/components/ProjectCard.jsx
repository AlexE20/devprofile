import Badge from "./Badge";

export default function ProjectCard({ projects,className }) {
  return (
    <div className="max-h-[400px] overflow-y-auto p-2">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project,index) => (
        <div key={index} className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
          <h2 className="text-black text-lg font-semibold mb-2">{project.title}</h2>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap">
            <Badge things={project.technologies} />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

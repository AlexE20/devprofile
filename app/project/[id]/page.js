import { profileData } from "@/app/DummyData/DummyData";
import Card from "@/app/components/Card";
import Badge from "@/app/components/Badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectInfo({ params }) {
  const project = profileData.projects.find(
    (project) => project.id === parseInt(params.id)
  );

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="h-screen flex items-center justify-center bg-[#F5F8FA] ">
      <Card className="p-10 gap-7">
        <Link href="/" className="text-blue-500 hover:scale-102 transition-all">
          <ArrowLeft size={30} />
        </Link>
        <div>
          <h1 className="text-4xl font-extrabold text-black mb-2">
            {project.title}
          </h1>
        </div>

        <div>
          <h2 className="text-xl font-bold text-black mb-3">Descripción</h2>
          <p className="text-gray-700 ">{project.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-black mb-3">Tecnologías</h2>
          <Badge things={project.technologies} />
        </div>
      </Card>
    </div>
  );
}

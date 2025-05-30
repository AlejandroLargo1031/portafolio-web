import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string;
    link: string;
  }
  
  export default function ProjectCard({ title, description, techStack, link }: ProjectCardProps) {
    return (
      <div className="border rounded-lg p-4 shadow-lg text-white">
        <Image src=""
        width = {100}
        height = {100}
        />
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <p className="text-sm mb-4">Tecnologías: {techStack}</p>
        <Link href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Ver proyecto</Link>
      </div>
    );
  }
  
 
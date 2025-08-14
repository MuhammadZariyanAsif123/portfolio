import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  img: string;
  title: string;
  link?: string;
  color?: string;
}

export function ProjectCard({ img, title, link, color }: ProjectCardProps) {
  return (
    <div className="relative overflow-hidden group w-full h-full">
      {/* Image with blur on hover */}
      <div className="relative w-full h-full">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:blur-sm"
        />
      </div>

      {/* Centered overlay content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      >
        <h3 className={`"text-lg font-bold ${color} drop-shadow-md`}>
          {title}
        </h3>
        <Link href={link || "#"} target="_blank">
          <span className={`"text-sm ${color} font-medium hover:underline`}>
            See Details →
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;

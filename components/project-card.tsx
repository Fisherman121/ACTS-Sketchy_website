import React from "react";
import { RoughNotation } from "react-rough-notation";
import Image from "next/image";

interface Project {
  id: number;
  name: string;
  imageUrl: string;
  position: string[]; // Fix property name to 'position' (should be lowercase)
}

interface ProjectCardProps {
  item: Project;
}

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <div className="flex flex-col w-full h-full gap-5 duration-500 ease-in-out">
      {/* Image section */}
      <div className="relative w-full h-[180px] xs:h-[250px] md:h-[350px]">
        <Image
          src={item.imageUrl}
          alt={`Image for project ${item.name}`} // Descriptive alt text
          layout="fill"
          className="absolute"
          loading="lazy"
        />
      </div>

      {/* Project Info Section */}
      <div className="flex flex-col justify-between px-5">
        <h2 className="text-lg font-bold xs:text-2xl md:text-4xl">
          {item.id}. {item.name}
        </h2>

        {/* Display positions */}
        <p className="text-md text-gray-700">
          Positions: {item.position.join(", ")}
        </p>
      </div>
    </div>
  );
}

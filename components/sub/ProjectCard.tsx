import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  mediaType: "image" | "video"; // New prop to determine media type
}

const ProjectCard = ({ src, title, description, mediaType }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      {mediaType === "video" ? (
       <video
       src={src}
       controls
       muted
       autoPlay
       loop // This attribute makes the video play in a loop
       className="w-full object-cover"
       width={50000}
       height={50000}
     />
     
     
      ) : (
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
      )}

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

import Image from "next/image";
import Link from "next/link";
import React from "react";

function FeatureList() {
  const Features = [
    {
      id: 1,
      title: "AI-Thumbnail Generator",
      image: "/KeneGrad.jpeg",
      path: "/ai-thumbnail-generator",
    },
    {
      id: 2,
      title: "AI-Thumbnail Search",
      image: "/KeneGrad.jpeg",
      path: "#",
    },
    {
      id: 3,
      title: "AI-Content Generator",
      image: "/KeneGrad.jpeg",
      path: "#",
    },
    {
      id: 4,
      title: "Outlier",
      image: "/KeneGrad.jpeg",
      path: "#",
    },
    {
      id: 5,
      title: "Keywords",
      image: "/KeneGrad.jpeg",
      path: "#",
    },
    {
      id: 6,
      title: "Optimize Video",
      image: "/KeneGrad.jpeg",
      path: "#",
    },
  ];
  return (
    <div className="mt-7">
      <h2 className="text-2xl font-bold">AI Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Features.map((feature) => (
          <Link href={feature.path}>
            <Image
              src={feature.image}
              alt={feature.title}
              width={200}
              height={200}
              className="w-full aspect-video object-cover rounded-lg shadow-md hover:scale-105 transition-scale duration-700 ease-in-out cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FeatureList;

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProjectCardProps {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  pdfUrl: string;
}

export function ProjectCard({
  id,
  name,
  category,
  imageUrl,
  pdfUrl,
}: ProjectCardProps) {
  const handleViewProject = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <Card className="w-[300px] h-[400px] bg-[#fbf3ea] border-none rounded-none hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-0 h-[240px]">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start justify-between h-[160px] p-6">
        <div>
          <h3 className="text-xl font-semibold text-[#434850] line-clamp-2">
            {name}
          </h3>
          <p className="text-sm text-[#90b4aa] line-clamp-1">{category}</p>
        </div>
        <Button
          variant="outline"
          onClick={handleViewProject}
          className="w-full bg-[#90b4aa] text-white hover:bg-[#a3bcb5] hover:text-white transition-colors duration-300"
        >
          View Project
        </Button>
      </CardFooter>
    </Card>
  );
}

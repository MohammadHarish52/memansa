import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProjectCardProps {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
}

export function ProjectCard({
  id,
  name,
  category,
  imageUrl,
}: ProjectCardProps) {
  return (
    <Card className="w-[300px] bg-[#fbf3ea] border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-[#434850]">{name}</h3>
          <p className="text-sm text-[#90b4aa]">{category}</p>
        </div>
        <Link href={`/projects/${id}`} className="w-full">
          <Button
            variant="outline"
            className="w-full border-[#90b4aa] text-[#90b4aa] hover:bg-[#90b4aa] hover:text-white transition-colors duration-300"
          >
            View Project
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

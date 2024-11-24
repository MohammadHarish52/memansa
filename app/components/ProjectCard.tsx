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
    <Card className="w-[300px] bg-white">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] w-full">
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
        <Link href={`/projects/${id}`}>
          <Button variant="outline" className="w-full">
            View Project
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

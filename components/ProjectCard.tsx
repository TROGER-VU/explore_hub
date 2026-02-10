import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Difficulty, ProjectStatus } from "@/types";
import { ProjectCardActions } from "./ProjectCardActions";

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  author: { name: string; avatar?: string };
  likes: number;
  image?: string;
  difficulty: Difficulty;
  status: ProjectStatus;
}

export function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <Link href={`/projects/${project.id}`} className="block focus:outline-none">
      <Card className="group flex flex-col overflow-hidden border-slate-800 bg-slate-900/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30">
        
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-800">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <Zap className="w-10 h-10 text-slate-700" />
            </div>
          )}
        </div>

        {/* Header */}
        <CardHeader className="p-5 pb-2 space-y-2">
          <div className="flex gap-2">
            <Badge>{project.difficulty}</Badge>
            {project.status !== "Active" && <Badge>{project.status}</Badge>}
          </div>

          <h3 className="font-bold text-lg text-slate-100 group-hover:text-blue-400">
            {project.title}
          </h3>

          <p className="text-xs text-slate-400">
            by <span className="text-slate-300">{project.author.name}</span>
          </p>
        </CardHeader>

        {/* Content */}
        <CardContent className="p-5 py-2">
          <p className="text-slate-400 text-sm line-clamp-2">
            {project.description}
          </p>
        </CardContent>

        {/* Footer */}
        <CardFooter className="p-5 pt-2 border-t border-slate-800 flex items-center justify-between">
          <ProjectCardActions likes={project.likes} />

          <Avatar className="h-6 w-6 ring-2 ring-slate-950">
            <AvatarImage src={project.author.avatar} />
            <AvatarFallback className="text-[10px] bg-blue-900 text-blue-200">
              {project.author.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </CardFooter>
      </Card>
    </Link>
  );
}

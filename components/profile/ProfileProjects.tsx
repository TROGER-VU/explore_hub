"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderGit2, Star, GitFork, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface DummyProject {
    id: string;
    title: string;
    description: string;
    tags: string[];
    stars: number;
    forks: number;
}

interface ProfileProjectsProps {
    projects: DummyProject[];
}

export function ProfileProjects({ projects }: ProfileProjectsProps) {
    if (!projects || projects.length === 0) return null;

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2 px-1">
                <FolderGit2 className="w-5 h-5 text-blue-400" /> Pinned Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <Card key={project.id} className="bg-slate-900 border-slate-800 rounded-2xl flex flex-col hover:border-blue-500/50 transition-colors shadow-none group">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </CardTitle>
                            <p className="text-slate-400 text-sm leading-relaxed mt-2 line-clamp-2">
                                {project.description}
                            </p>
                        </CardHeader>

                        <CardContent className="mt-auto pt-0 flex flex-col gap-4">
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags.map(tag => (
                                    <Badge key={tag} variant="outline" className="text-xs border-slate-700 text-slate-400 bg-slate-950/50">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <div className="flex items-center justify-between mt-2 pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-4 text-slate-500 text-sm font-medium">
                                    <span className="flex items-center gap-1.5 hover:text-blue-400 transition-colors cursor-pointer">
                                        <Star className="w-4 h-4" /> {project.stars}
                                    </span>
                                    <span className="flex items-center gap-1.5 hover:text-blue-400 transition-colors cursor-pointer">
                                        <GitFork className="w-4 h-4" /> {project.forks}
                                    </span>
                                </div>

                                <Link href="#">
                                    <Button variant="ghost" size="sm" className="h-8 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 font-semibold px-2 -mr-2">
                                        View Project <ArrowUpRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

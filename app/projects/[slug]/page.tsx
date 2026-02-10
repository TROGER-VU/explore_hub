import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProjectBySlug } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TechIcon } from "@/components/TechIcon";
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Heart, 
  MessageSquare, 
  Share2, 
  Calendar,
  Layers,
  Zap,
  AlertCircle,
  Code2
} from 'lucide-react';

interface PageProps {
  params: { slug: string };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900/50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Optional: Background Glow Effects */}
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-20 right-1/4 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Navigation Breadcrumb */}
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-slate-400 hover:text-blue-400 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header Section */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="border-blue-500/30 text-blue-300 bg-blue-500/10 uppercase tracking-wider text-[10px] px-2 py-0.5">
                  {project.difficulty}
                </Badge>
                {project.status === 'Help Wanted' && (
                  <Badge variant="destructive" className="bg-amber-500/10 text-amber-500 border border-amber-500/20 hover:bg-amber-500/20">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Help Wanted
                  </Badge>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {project.title}
              </h1>
              
              <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Author & Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 pt-2">
                <div className="flex items-center gap-2.5">
                  <Avatar className="h-8 w-8 ring-2 ring-slate-900">
                    <AvatarImage src={project.author.avatarUrl} />
                    <AvatarFallback className="bg-blue-900 text-blue-200 font-bold">
                        {project.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-slate-200">{project.author.name}</span>
                </div>
                <div className="w-1 h-1 bg-slate-700 rounded-full" />
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span>{project.createdAt}</span>
                </div>
                <div className="w-1 h-1 bg-slate-700 rounded-full" />
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-slate-500" />
                  <span>12 Comments</span>
                </div>
              </div>
            </div>
            
            {/* Header Actions */}
            <div className="flex gap-3 flex-shrink-0">
              <Button variant="outline" size="lg" className="border-slate-700 bg-slate-900/50 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600">
                <Heart className="w-4 h-4 mr-2 text-rose-500 fill-rose-500/10" />
                Like ({project.upvotes})
              </Button>
              <Button variant="outline" size="icon" className="border-slate-700 bg-slate-900/50 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Main Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Banner Image (If exists) */}
            {project.image && (
                <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                    <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>
            )}

            {/* Overview Section */}
            <section className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/60">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2.5">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Zap className="w-5 h-5 text-blue-400" />
                </div>
                Overview
              </h2>
              <div className="prose prose-invert prose-slate max-w-none text-slate-400 leading-7">
                <p>{project.fullDescription}</p>
                {/* Mock text */}
                <p className="mt-4">
                  This project was built to address the gap in accessible tools for students. 
                  By leveraging modern web technologies, we ensure that users have a seamless experience 
                  regardless of their device or internet connection speed.
                </p>
              </div>
            </section>

            {/* Problem Statement - Highlighted Box */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/10 rounded-2xl p-8 border-l-4 border-blue-500">
              <h2 className="text-lg font-bold text-blue-200 mb-3 flex items-center gap-2">
                The Problem
              </h2>
              <p className="text-blue-100/80 leading-relaxed text-lg italic">
                {project.problemStatement}
              </p>
            </section>

            {/* Tech Stack */}
            {/* Tech Stack */}
            <section className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/60">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2.5">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                <Layers className="w-5 h-5 text-blue-400" />
                </div>
                Tech Stack
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.techStack.map((tech) => (
                <div
                    key={tech}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-blue-500/30 hover:bg-slate-900 transition-colors group"
                >
                    {/* Tech Icon */}
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-blue-500/40 transition-colors">
                    <TechIcon name={tech} size={18} />
                    </div>

                    {/* Tech Name */}
                    <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
                    {tech}
                    </span>
                </div>
                ))}
            </div>
            </section>


          </div>

          {/* Right Column: Sidebar (1/3 width) */}
          <div className="space-y-6">
            
            {/* Action Card */}
            <Card className="border-blue-500/20 shadow-[0_0_20px_-5px_rgba(79,70,229,0.15)] bg-slate-900/80 backdrop-blur-md overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">Project Links</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold" size="lg">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button variant="outline" className="w-full border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-600" size="lg">
                  <Github className="w-4 h-4 mr-2" />
                  View Source Code
                </Button>
              </CardContent>
            </Card>

            {/* Contribute Card */}
            <Card className="border-slate-800 bg-slate-900/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-slate-200">Want to Contribute?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-400">
                  This project is currently <span className="font-semibold text-blue-400">{project.status}</span>. 
                  Check out the issues tab on GitHub to get involved.
                </p>
                <div className="space-y-2.5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Looking For</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-slate-700 text-slate-400 hover:text-blue-300 hover:border-blue-500/50 cursor-pointer transition-colors">Frontend Polish</Badge>
                    <Badge variant="outline" className="border-slate-700 text-slate-400 hover:text-blue-300 hover:border-blue-500/50 cursor-pointer transition-colors">Unit Tests</Badge>
                    <Badge variant="outline" className="border-slate-700 text-slate-400 hover:text-blue-300 hover:border-blue-500/50 cursor-pointer transition-colors">Docs</Badge>
                  </div>
                </div>
                <Button variant="secondary" className="w-full mt-2 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white">
                  Contact Maintainer
                </Button>
              </CardContent>
            </Card>

            {/* Similar Projects */}
            <div className="pt-4">
              <h3 className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest pl-1">Similar Projects</h3>
              <div className="space-y-3">
                {[1, 2].map((i) => (
                  <div key={i} className="group flex gap-3 items-center p-3 rounded-xl bg-slate-900/30 border border-transparent hover:border-slate-700 hover:bg-slate-900 hover:shadow-lg transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                        <Code2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-200 text-sm group-hover:text-blue-400 transition-colors">React Dashboard Kit</div>
                      <div className="text-xs text-slate-500 mt-0.5">Web Development</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
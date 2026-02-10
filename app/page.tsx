import { getProjects } from '@/lib/data';
import { ProjectCard } from '@/components/ProjectCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Sparkles, TrendingUp, Clock, PlusCircle } from 'lucide-react';
import { toProjectCard } from '@/types';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="p-6 md:p-8 lg:p-10 space-y-12">
      
      {/* Dark Hero Section */}
      <section className="relative rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl shadow-black/50">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="relative z-10 p-8 md:p-16 flex flex-col items-center text-center max-w-3xl mx-auto">
          
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 px-4 py-1.5 rounded-full text-sm font-medium mb-6 text-blue-300 shadow-lg shadow-blue-900/20">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="tracking-wide">The Hub for Student Innovation</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-white">
            Turn your code into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400  to-blue-400 animate-gradient-x">
              collaborative impact.
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            Discover open-source projects, find coding partners, and showcase your portfolio to the world.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-lg relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative flex gap-2 bg-slate-950 p-2 rounded-xl border border-slate-800 shadow-xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <Input 
                  className="pl-10 h-12 border-0 bg-transparent text-slate-100 placeholder:text-slate-500 focus-visible:ring-0 text-base" 
                  placeholder="Search projects, stacks (e.g., 'Next.js')..." 
                />
              </div>
              <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:scale-[1.02]">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="space-y-6">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-6 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
                <button className="flex items-center gap-2 text-blue-400 font-medium text-sm border-b-2 border-blue-500 pb-4 -mb-4.5 px-1 shadow-[0_1px_10px_-1px_rgba(99,102,241,0.5)]">
                    <TrendingUp className="w-4 h-4" /> Trending
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-slate-300 font-medium text-sm pb-4 -mb-4 px-1 transition-colors">
                    <Clock className="w-4 h-4" /> Newest
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-slate-300 font-medium text-sm pb-4 -mb-4 px-1 transition-colors">
                    Help Wanted
                </button>
            </div>
            <div className="text-sm text-slate-500">
                Showing <span className="font-bold text-slate-200">{projects.length}</span> projects
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={toProjectCard(project)}
            />
          ))}
          
          {/* "Add New" Card */}
          <Link href="/projects/new">
            <div className="group border border-dashed border-slate-700 bg-slate-900/20 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-blue-500/50 hover:bg-slate-800/30 transition-all cursor-pointer min-h-[300px]">
              <div className="bg-slate-800 p-4 rounded-full group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors mb-4 text-slate-400">
                  <PlusCircle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-slate-200 text-lg">Have an idea?</h3>
              <p className="text-sm text-slate-500 mt-2 mb-6 max-w-[200px]">Share your project with the community and find contributors.</p>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600">Create Project</Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
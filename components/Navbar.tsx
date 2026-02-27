"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plus, Code2, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-black backdrop-blur-xl ">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 p-1.5 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-100 group-hover:text-white transition-colors">
              Explore Hub
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Bar - Hidden on Homepage */}
          <div className={cn(
            "hidden md:flex relative group transition-all duration-300 ease-in-out",
            isHomePage ? "opacity-0 scale-95 pointer-events-none w-0" : "opacity-100 scale-100 w-64"
          )}>
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
            <input
              className="w-full bg-slate-900 border border-slate-800 rounded-full py-2 pl-9 pr-4 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all hover:bg-slate-800/80"
              placeholder="Search projects..."
            />
          </div>

          <Link href="/projects/new">
            <Button size="sm" className="hidden sm:flex bg-blue-600 hover:bg-blue-500 text-white border border-blue-500/50 shadow-[0_0_15px_-3px_rgba(79,70,229,0.4)] rounded-full px-5">
              <Plus className="w-4 h-4 mr-1.5" />
              New Project
            </Button>
          </Link>

          <div className="h-6 w-[1px] bg-slate-800 mx-1 hidden sm:block" />

          <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-full">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
          </Button>

          <Link href="/dashboard/profile">
            <Avatar className="h-8 w-8 cursor-pointer border border-slate-700 hover:ring-2 hover:ring-blue-500/50 transition-all">
              <AvatarImage src="/pfp.jpg" className="object-cover" />
              <AvatarFallback className="bg-slate-800 text-slate-300">AS</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </nav>
  );
}
"use client";

import Link from "next/link";
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 p-1.5 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        <Code2 className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-100 group-hover:text-white transition-colors">
                        Explore Hub
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                    <Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
                    <Link href="#roadmap" className="hover:text-white transition-colors">Roadmap</Link>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/sign-in">
                        <Button className="bg-blue-600 hover:bg-blue-500 text-white border border-blue-500/50 shadow-[0_0_15px_-3px_rgba(79,70,229,0.4)] rounded-full px-6 transition-all hover:scale-105">
                            Sign In
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

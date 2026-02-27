"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 px-4 py-1.5 rounded-full text-sm font-medium mb-8 text-blue-300 shadow-lg shadow-blue-900/20 cursor-pointer hover:bg-slate-800 transition-colors"
                >
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="tracking-wide">Explore Hub v1.0 is live!</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white max-w-4xl"
                >
                    The Innovation Gallery for <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        Computer Science Students
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed"
                >
                    Discover, showcase and collaborate on real-world software projects. Turn your classroom assignments and hackathon code into a professional portfolio.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link href="/dashboard">
                        <Button size="lg" className="h-14 px-8 bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold rounded-full shadow-[0_0_20px_-3px_rgba(37,99,235,0.5)] transition-all hover:scale-105">
                            Get Started <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button size="lg" variant="outline" className="h-14 px-8 border-slate-700 hover:bg-slate-800 text-slate-200 text-lg font-semibold rounded-full transition-all hover:scale-105">
                            Explore Projects
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

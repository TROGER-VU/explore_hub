"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-950">
            <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
            <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-b from-slate-900 to-slate-950 p-10 md:p-16 rounded-3xl border border-slate-800 shadow-2xl"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to Build Your Portfolio?
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                        Join thousands of computer science students who are already showcasing their open-source projects.
                    </p>
                    <Link href="/sign-in">
                        <Button size="lg" className="h-14 px-10 bg-white text-slate-900 hover:bg-slate-200 text-lg font-bold rounded-full shadow-[0_0_20px_-3px_rgba(255,255,255,0.3)] transition-all hover:scale-105">
                            Start Exploring Now
                        </Button>
                    </Link>
                    <p className="mt-6 text-sm text-slate-500">
                        Free forever for students. No credit card required.
                    </p>
                </motion.div>
            </div>

            {/* Footer minimal */}
            <div className="text-center mt-24 text-slate-600 text-sm">
                <p>© {new Date().getFullYear()} Explore Hub. All rights reserved.</p>
            </div>
        </section>
    );
}

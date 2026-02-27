"use client";

import { motion } from "framer-motion";
import { Compass, Wand2, Users, ShieldCheck } from "lucide-react";

export function Features() {
    const features = [
        {
            title: "Advanced Discovery",
            description: "Find trending projects, filter by tech stack, and discover the most innovative work across your campus.",
            icon: Compass,
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "group-hover:border-blue-500/50"
        },
        {
            title: "Smart Upload Wizard",
            description: "Automatically parse your repository and extract tech stacks, reducing the friction to showcase your work.",
            icon: Wand2,
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "group-hover:border-purple-500/50"
        },
        {
            title: "Collaboration First",
            description: "Find teammates for your next hackathon or open-source project securely within our dedicated platform.",
            icon: Users,
            color: "text-green-400",
            bg: "bg-green-500/10",
            border: "group-hover:border-green-500/50"
        },
        {
            title: "Fully Type Safe",
            description: "Built with a robust end-to-end type safe architecture extending from your database to the frontend edge.",
            icon: ShieldCheck,
            color: "text-orange-400",
            bg: "bg-orange-500/10",
            border: "group-hover:border-orange-500/50"
        }
    ];

    return (
        <section id="features" className="py-24 bg-slate-900 border-y border-slate-800/50">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Designed for Excellence</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Everything you need to successfully launch your student project and gather an audience from day one.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative p-8 rounded-2xl bg-slate-950 border border-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 ${feature.border}`}
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.bg} transition-transform group-hover:scale-110`}>
                                <feature.icon className={`w-7 h-7 ${feature.color}`} />
                            </div>                            <h3 className="text-2xl font-bold text-slate-100 mb-4">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

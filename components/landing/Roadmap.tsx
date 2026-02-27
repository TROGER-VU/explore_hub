"use client";

import { motion } from "framer-motion";
import { CheckCircle2, CircleDashed } from "lucide-react";

export function Roadmap() {
    const phases = [
        {
            title: "Phase 1: Foundation",
            status: "completed",
            items: ["User Authentication", "GitHub Integration", "Basic Project Profiles", "Global Search"]
        },
        {
            title: "Phase 2: Collaboration",
            status: "current",
            items: ["Team Formation Workflow", "In-app Messaging", "Project Milestone Tracking", "Advanced Filtering"]
        },
        {
            title: "Phase 3: Community",
            status: "upcoming",
            items: ["University Leaderboards", "Hackathon Showcases", "Alumni Mentorship Network", "Automated Resume Generation"]
        }
    ];

    return (
        <section id="roadmap" className="py-24 bg-slate-900 border-y border-slate-800/50">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Product Roadmap</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        We are continuously building to provide the best experience for computer science students worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={phase.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`p-8 rounded-2xl border ${phase.status === 'current'
                                    ? 'bg-slate-800/80 border-blue-500/50 shadow-lg shadow-blue-900/20 transform md:-translate-y-4'
                                    : 'bg-slate-950 border-slate-800'
                                }`}
                        >
                            <div className="inline-block px-3 py-1 mb-6 rounded-full text-xs font-bold tracking-wider uppercase border text-slate-300 bg-slate-800 border-slate-700">
                                {phase.status}
                            </div>
                            <h3 className="text-xl font-bold text-slate-100 mb-6">{phase.title}</h3>
                            <ul className="space-y-4">
                                {phase.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        {phase.status === 'completed' ? (
                                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        ) : phase.status === 'current' ? (
                                            <CircleDashed className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 animate-[spin_4s_linear_infinite]" />
                                        ) : (
                                            <CircleDashed className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                                        )}
                                        <span className={phase.status === 'completed' ? 'text-slate-300' : 'text-slate-400'}>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

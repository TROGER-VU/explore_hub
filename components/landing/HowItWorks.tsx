"use client";

import { motion } from "framer-motion";

export function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Connect Your GitHub",
            description: "Sign in with your campus email or GitHub account. Our system automatically fetches your public repositories and generates a beautiful portfolio."
        },
        {
            number: "02",
            title: "Showcase Your Best Work",
            description: "Select the projects you're proud of. Add detailed READMEs, live demo links, and tag the technologies you used like React, Python, or Go."
        },
        {
            number: "03",
            title: "Find Partners & Collaborate",
            description: "Browse the Explore Hub for open roles, request to join trending projects, or invite top talent from your university to your team."
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        From empty repository to trending project in just three simple steps.
                    </p>
                </div>

                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm hover:border-blue-500/30 transition-colors"
                        >
                            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <span className="text-3xl font-black text-white">{step.number}</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-100 mb-3">{step.title}</h3>
                                <p className="text-slate-400 text-lg leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

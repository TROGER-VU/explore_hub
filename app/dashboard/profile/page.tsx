"use client";

import { motion, Variants } from "framer-motion";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileStats } from "@/components/profile/ProfileStats";
import { TechStack } from "@/components/profile/TechStack";
import { ProfileProjects } from "@/components/profile/ProfileProjects";

// --- DUMMY DATA ---
// Replace this entirely when connecting Firebase
const DUMMY_USER = {
    name: "Adi",
    username: "@dayfall",
    email: "demo@explorehub.com",
    avatarUrl: "/pfp.jpg",
    bio: "Building scalable web applications and collaborative platforms. Open-source enthusiast and constant learner.",
    location: "India",
    stats: {
        projects: 12,
        contributions: 342,
        followers: 89,
        following: 24,
    },
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Node.js", "PostgreSQL", "Docker", "Git"],
};

const DUMMY_PROJECTS = [
    {
        id: "proj-1",
        title: "EcoTrack API",
        description: "A comprehensive RESTful API built with Node.js and Express to track carbon footprints of small businesses in real-time.",
        tags: ["Node.js", "Express", "MongoDB", "Jest"],
        stars: 45,
        forks: 12,
    },
    {
        id: "proj-2",
        title: "Campus Connect",
        description: "Real-time chat application designed exclusively for university students supporting study groups and encrypted direct messaging.",
        tags: ["React", "Firebase", "Tailwind", "Socket.io"],
        stars: 128,
        forks: 34,
    },
    {
        id: "proj-3",
        title: "NextJS Portfolio Template",
        description: "A highly customizable, blazing fast developer portfolio template built specifically taking advantage of Next.js 14 App Router.",
        tags: ["Next.js", "TypeScript", "Framer Motion"],
        stars: 89,
        forks: 22,
    },
];
// ------------------

export default function ProfilePage() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    };

    return (
        <div className="min-h-screen bg-slate-950 px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="max-w-5xl mx-auto space-y-8"
            >
                {/* Header Section */}
                <motion.div variants={itemVariants}>
                    <ProfileHeader user={DUMMY_USER} />
                </motion.div>

                {/* 2-Column Grid for Stats and Skills */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div variants={itemVariants}>
                            <ProfileStats stats={DUMMY_USER.stats} />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <ProfileProjects projects={DUMMY_PROJECTS} />
                        </motion.div>
                    </div>

                    {/* Sidebar Content Column */}
                    <div className="lg:col-span-1 space-y-8">
                        <motion.div variants={itemVariants} className="h-full">
                            <TechStack skills={DUMMY_USER.skills} />
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
}

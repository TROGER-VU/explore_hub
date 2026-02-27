"use client";

import { FolderGit2, GitCommit, Users, UserPlus } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProfileStatsProps {
    stats: {
        projects: number;
        contributions: number;
        followers: number;
        following: number;
    };
}

export function ProfileStats({ stats }: ProfileStatsProps) {
    const statItems = [
        { label: "Projects", value: stats.projects, icon: FolderGit2, color: "text-blue-400" },
        { label: "Contributions", value: stats.contributions, icon: GitCommit, color: "text-green-400" },
        { label: "Followers", value: stats.followers, icon: Users, color: "text-purple-400" },
        { label: "Following", value: stats.following, icon: UserPlus, color: "text-orange-400" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statItems.map((item, index) => (
                <Card key={index} className="bg-slate-900 border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition-colors shadow-none">
                    <div className="flex items-center gap-3 mb-3">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{item.label}</h3>
                    </div>
                    <p className="text-3xl font-bold text-slate-100">{item.value.toLocaleString()}</p>
                </Card>
            ))}
        </div>
    );
}

"use client";

import { MapPin, Link as LinkIcon, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface ProfileHeaderProps {
    user: {
        name: string;
        username: string;
        bio: string;
        location: string;
        avatarUrl?: string; // Optional for future use
        portfolioUrl?: string;
    };
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
    return (
        <Card className="bg-slate-900 border-slate-800 shadow-xl overflow-hidden rounded-2xl">
            {/* Cover subtle gradient */}
            <div className="h-32 w-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 border-b border-slate-800" />

            <CardContent className="px-6 pb-6 pt-0 relative">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-12 sm:-mt-16 mb-6">
                    <Avatar className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-slate-900 rounded-2xl shadow-2xl bg-slate-800 shrink-0">
                        <AvatarImage src={user.avatarUrl || `https://api.dicebear.com/7.x/notionists/svg?seed=${user.username}`} className="object-cover" />
                        <AvatarFallback className="text-2xl font-bold bg-blue-500/10 text-blue-400 rounded-2xl">
                            {user.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>

                    <Button variant="outline" className="border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 mt-4 sm:mt-0 font-medium">
                        <Edit2 className="w-4 h-4 mr-2" /> Edit Profile
                    </Button>
                </div>

                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">{user.name}</h1>
                    <p className="text-slate-400 font-medium mt-1">{user.username}</p>
                </div>

                <p className="text-slate-300 mt-6 leading-relaxed max-w-2xl text-lg">
                    {user.bio}
                </p>

                <div className="flex flex-wrap items-center gap-6 mt-6 text-slate-400 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-500" />
                        {user.location}
                    </div>
                    {user.portfolioUrl && (
                        <a href={user.portfolioUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                            <LinkIcon className="w-4 h-4 text-slate-500" />
                            Portfolio
                        </a>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

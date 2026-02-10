"use client";

import { Heart, GitFork } from "lucide-react";

interface Props {
  likes: number;
}

export function ProjectCardActions({ likes }: Props) {
  return (
    <div className="flex items-center gap-4 text-slate-500 text-sm">
      <button
        className="flex items-center gap-1.5 hover:text-rose-400 transition-colors group/like"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <Heart className="w-4 h-4 group-hover/like:fill-rose-400/20" />
        <span className="font-medium">{likes}</span>
      </button>

      <button
        className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <GitFork className="w-4 h-4" />
      </button>
    </div>
  );
}

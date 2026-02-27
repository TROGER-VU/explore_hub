"use client";

import { usePathname } from "next/navigation";
import {
  BrainCircuit,
  Database,
  ShieldCheck,
  Globe,
  Users,
  Map,
  LayoutGrid,
  Trophy,
  Flame,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ---------- Types ---------- */

interface MenuItem {
  label: string;
  icon: LucideIcon;
  href: string;
  badge?: string;
}

interface MenuGroup {
  title: string;
  items: MenuItem[];
}

/* ---------- Config ---------- */

const MENU_GROUPS: MenuGroup[] = [
  {
    title: "Discover",
    items: [
      {
        label: "All Projects",
        icon: LayoutGrid,
        href: "/dashboard",
      },
      {
        label: "Trending",
        icon: Flame,
        href: "/trending",
        badge: "Hot",
      },
      //   {
      //     label: "Hackathons",
      //     icon: Trophy,
      //     href: "/hackathons",
      //   },
    ],
  },
  {
    title: "Domains",
    items: [
      {
        label: "AI / Machine Learning",
        icon: BrainCircuit,
        href: "/domains/ai-ml",
      },
      {
        label: "Web Development",
        icon: Globe,
        href: "/domains/web",
      },
      {
        label: "Cybersecurity",
        icon: ShieldCheck,
        href: "/domains/cybersecurity",
      },
      {
        label: "Data Science",
        icon: Database,
        href: "/domains/data-science",
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        label: "Find Partners",
        icon: Users,
        href: "/partners",
      },
      {
        label: "Roadmaps",
        icon: Map,
        href: "/roadmaps",
      },
    ],
  },
];

/* ---------- Component ---------- */

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 hidden lg:block sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto bg-black px-4 py-6">
      <div className="space-y-8">
        {MENU_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 px-4 text-[11px] font-bold uppercase tracking-widest text-slate-500">
              {group.title}
            </h3>

            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");

                return (
                  <Button
                    key={item.label}
                    variant="ghost"
                    asChild
                    className={cn(
                      "w-full justify-between font-medium h-9 transition-all duration-200",
                      isActive
                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                    )}
                  >
                    <a href={item.href} className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <item.icon
                          className={cn(
                            "mr-3 h-4 w-4",
                            isActive ? "text-blue-400" : "text-slate-500"
                          )}
                        />
                        {item.label}
                      </div>

                      {item.badge && (
                        <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[10px] px-1.5 py-0.5 rounded-md font-bold shadow-[0_0_10px_-3px_rgba(249,115,22,0.3)]">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

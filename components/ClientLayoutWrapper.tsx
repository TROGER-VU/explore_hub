"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isFullScreenRoute = pathname === "/" || pathname.startsWith("/sign-in");

    if (isFullScreenRoute) {
        return <main className="min-h-screen bg-slate-950">{children}</main>;
    }

    return (
        <>
            <Navbar />
            <div className="flex max-w-[1600px] mx-auto">
                <Sidebar />
                <main className="flex-1 min-w-0 border-l border-slate-800/50">
                    {children}
                </main>
            </div>
        </>
    );
}

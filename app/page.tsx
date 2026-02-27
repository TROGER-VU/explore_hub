import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Roadmap } from '@/components/landing/Roadmap';
import { CTA } from '@/components/landing/CTA';

export default function LandingPage() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-50 font-sans selection:bg-blue-500/30">
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <Roadmap />
            <CTA />
        </div>
    );
}

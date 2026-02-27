"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code2, ArrowRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            // Simulate network delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            if (email === "demo@explorehub.com" && password === "password123") {
                router.push("/dashboard");
            } else {
                setError("Invalid email or password");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = () => {
        // Placeholder for future Firebase integration
        alert("Google authentication with Firebase will be integrated soon.");
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay"></div>

            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 w-full max-w-md mx-4"
            >
                {/* Glassmorphism Card */}
                <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-8 sm:p-10 rounded-3xl shadow-2xl flex flex-col items-center">

                    <Link href="/" className="flex items-center gap-2.5 mb-8 group cursor-pointer inline-flex">
                        <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 p-2 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                            <Code2 className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-2xl tracking-tight text-slate-100 group-hover:text-white transition-colors">
                            Explore Hub
                        </span>
                    </Link>

                    <div className="w-full mb-8 text-center">
                        <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
                        <p className="text-slate-400 text-sm">Sign in to continue to your dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full space-y-5">
                        <div className="space-y-2">
                            <Label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Email</Label>
                            <Input
                                type="email"
                                placeholder="demo@explorehub.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-slate-950/50 border-slate-700/50 text-white focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 h-11"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Password</Label>
                                <Link href="#" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                                    Forgot password?
                                </Link>
                            </div>
                            <Input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="bg-slate-950/50 border-slate-700/50 text-white focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 h-11"
                            />
                        </div>

                        {error && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="text-red-400 text-sm font-medium pt-1"
                            >
                                {error}
                            </motion.p>
                        )}

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-11 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-[0_0_15px_-3px_rgba(37,99,235,0.4)] transition-all mt-6"
                        >
                            {isLoading ? (
                                <span className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Signing in...
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    Sign In <ArrowRight className="w-4 h-4" />
                                </span>
                            )}
                        </Button>
                    </form>

                    <div className="w-full flex items-center gap-4 my-8">
                        <div className="h-[1px] flex-1 bg-slate-800"></div>
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Or continue with</span>
                        <div className="h-[1px] flex-1 bg-slate-800"></div>
                    </div>

                    <Button
                        type="button"
                        variant="outline"
                        onClick={handleGoogleSignIn}
                        className="w-full h-11 bg-slate-950/50 border-slate-700/50 hover:bg-slate-800 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-3"
                    >
                        <FcGoogle className="w-5 h-5" />
                        Google
                    </Button>

                    <p className="mt-8 text-sm text-slate-400 text-center">
                        Don't have an account?{" "}
                        <Link href="/sign-up" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                            Sign up
                        </Link>
                    </p>

                </div>
            </motion.div>
        </div>
    );
}

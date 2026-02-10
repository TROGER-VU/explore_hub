"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, ArrowRight, ArrowLeft, CheckCircle2, Rocket, Code2, Link } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  shortDescription: z.string().min(10, "Give a catchy 1-sentence summary"),
  category: z.string().min(1, "Please select a domain"),
  difficulty: z.string().min(1, "Please select a level"),
  status: z.enum(["Active", "Help Wanted", "Archived"]),
  fullDescription: z.string().min(50, "Please provide more detail (min 50 chars)"),
  problemStatement: z.string().min(20, "What problem does this solve?"),
  techStack: z.string().min(3, "e.g., React, Python, AWS"),
  repoUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  demoUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

export default function NewProjectPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    title: "",
    shortDescription: "",
    category: "",
    difficulty: "",
    status: "Active",
    fullDescription: "",
    problemStatement: "",
    techStack: "",
    repoUrl: "",
    demoUrl: "",
    },
    mode: "onChange",
  });

  const onNext = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    if (step === 1) fieldsToValidate = ["title", "shortDescription", "category", "difficulty", "status"];
    if (step === 2) fieldsToValidate = ["fullDescription", "problemStatement", "techStack"];

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) setStep((s) => s + 1);
  };

  const onBack = () => setStep((s) => s - 1);

  const onSubmit = (data: FormValues) => {
    console.log("Submitting Project:", data);
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  const generateDescription = () => {
    form.setValue("fullDescription", "Generating brilliance... 🤖");
    setTimeout(() => {
      form.setValue(
        "fullDescription",
        "This project leverages advanced NLP techniques to analyze sentiment in real-time social media streams. Built with Python and Flask, it visualizes data trends using D3.js, helping marketers understand brand perception instantly."
      );
    }, 800);
  };

  return (
    <div className="bg-gray-900 py-5 px-4 flex justify-center items-start relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full  h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-4xl relative z-10">
        
        {/* Progress Indicator */}
        <div className="mb-10 flex justify-between items-center px-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center flex-1 last:flex-none group">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold border-2 transition-all duration-500 shadow-lg",
                    step >= i
                      ? "bg-blue-600 border-blue-500 text-white shadow-blue-500/20 scale-110"
                      : "bg-slate-900 border-slate-800 text-slate-500"
                  )}
                >
                  {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
                </div>
                <span className={cn(
                    "text-[10px] uppercase tracking-widest font-bold",
                    step >= i ? "text-blue-400" : "text-slate-600"
                )}>
                  {i === 1 ? "Basics" : i === 2 ? "Details" : "Links"}
                </span>
              </div>
              {i < 3 && (
                <div className={cn(
                    "h-[2px] flex-1 mx-4 rounded-full transition-colors duration-500",
                    step > i ? "bg-blue-600" : "bg-slate-800"
                )} />
              )}
            </div>
          ))}
        </div>

        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl">
          <CardHeader className="border-b border-slate-800/50 pb-6">
            <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
              {step === 1 && <><Rocket className="w-6 h-6 text-blue-400" /> Start with the basics</>}
              {step === 2 && <><Code2 className="w-6 h-6 text-purple-400" /> Tell the story</>}
              {step === 3 && <><CheckCircle2 className="w-6 h-6 text-emerald-400" /> Final touches</>}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="pt-1">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                {/* --- STEP 1: BASICS --- */}
                {step === 1 && (
                  <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Project Title</FormLabel>
                          <FormControl>
                            <Input 
                              className="bg-slate-950 border-slate-800 text-white focus:ring-blue-500/50" 
                              placeholder="e.g. EcoScan AI" {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-rose-400" />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Domain */}
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-300">Domain</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className="bg-slate-950 border-slate-800 text-slate-300">
                                <SelectValue placeholder="Select Domain" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-slate-900 border-slate-800 text-slate-300">
                                <SelectItem value="AI/ML">AI & Machine Learning</SelectItem>
                                <SelectItem value="Web Dev">Web Development</SelectItem>
                                <SelectItem value="Mobile">Mobile App</SelectItem>
                                <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                                <SelectItem value="Data Science">Data Science</SelectItem>
                                <SelectItem value="DevOps">DevOps</SelectItem>
                            </SelectContent>
                            </Select>
                            <FormMessage className="text-rose-400" />
                        </FormItem>
                        )}
                    />

                    {/* Difficulty */}
                    <FormField
                        control={form.control}
                        name="difficulty"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-300">Difficulty</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className="bg-slate-950 border-slate-800 text-slate-300">
                                <SelectValue placeholder="Select Level" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-slate-900 border-slate-800 text-slate-300">
                                <SelectItem value="Beginner">Beginner</SelectItem>
                                <SelectItem value="Intermediate">Intermediate</SelectItem>
                                <SelectItem value="Advanced">Advanced</SelectItem>
                            </SelectContent>
                            </Select>
                            <FormMessage className="text-rose-400" />
                        </FormItem>
                        )}
                    />

                    {/* Status */}
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-300">Status</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className="bg-slate-950 border-slate-800 text-slate-300">
                                <SelectValue placeholder="Select Status" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-slate-900 border-slate-800 text-slate-300">
                                <SelectItem value="Active">Active</SelectItem>
                                <SelectItem value="Help Wanted">Help Wanted</SelectItem>
                                <SelectItem value="Archived">Archived</SelectItem>
                            </SelectContent>
                            </Select>
                            <FormDescription className="text-slate-500 text-xs">
                            “Help Wanted” attracts contributors
                            </FormDescription>
                            <FormMessage className="text-rose-400" />
                        </FormItem>
                        )}
                    />
                    </div>


                    <FormField
                      control={form.control}
                      name="shortDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">The Hook (Short Pitch)</FormLabel>
                          <FormControl>
                            <Input 
                                className="bg-slate-950 border-slate-800 text-white" 
                                placeholder="A catchy one-sentence summary..." {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-slate-500">
                            This is the first thing people see on your project card.
                          </FormDescription>
                          <FormMessage className="text-rose-400" />
                        </FormItem>
                      )}
                    />
                    
                  </div>
                )}

                {/* --- STEP 2: DETAILS --- */}
                {step === 2 && (
                  <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                    <FormField
                      control={form.control}
                      name="problemStatement"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">The Problem</FormLabel>
                          <FormControl>
                            <Textarea 
                              className="bg-slate-950 border-slate-800 text-white min-h-[100px] resize-none" 
                              placeholder="Describe the pain point you're addressing..." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-rose-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="fullDescription"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex justify-between items-center mb-2">
                            <FormLabel className="text-slate-300">Full Project Overview</FormLabel>
                            <Button 
                              type="button" 
                              variant="outline" 
                              size="sm" 
                              className="text-blue-400 border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 h-7 text-xs"
                              onClick={generateDescription}
                            >
                              <Sparkles className="w-3.5 h-3.5 mr-1.5" /> AI Assist
                            </Button>
                          </div>
                          <FormControl>
                            <Textarea 
                              className="bg-slate-950 border-slate-800 text-white min-h-[160px]" 
                              placeholder="Features, architecture, and goals..." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-rose-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="techStack"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Tech Stack</FormLabel>
                          <FormControl>
                            <Input 
                                className="bg-slate-950 border-slate-800 text-white" 
                                placeholder="React, Node.js, Tailwind (comma separated)" {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-rose-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* --- STEP 3: LINKS --- */}
                {step === 3 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                    <FormField
                      control={form.control}
                      name="repoUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 flex items-center gap-2">
                            <Github className="w-4 h-4" /> Repository URL
                          </FormLabel>
                          <FormControl>
                            <Input 
                                className="bg-slate-950 border-slate-800 text-white" 
                                placeholder="https://github.com/username/repo" {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-rose-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="demoUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 flex items-center gap-2">
                            <Rocket className="w-4 h-4" /> Live Demo URL (Optional)
                          </FormLabel>
                          <FormControl>
                            <Input 
                                className="bg-slate-950 border-slate-800 text-white" 
                                placeholder="https://your-app.vercel.app" {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-rose-400" />
                        </FormItem>
                      )}
                    />

                    <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5 mt-6">
                      <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-blue-400 mt-0.5" />
                        <div>
                           <h4 className="text-blue-200 font-bold text-sm mb-1">Make it shine</h4>
                           <p className="text-blue-300/60 text-xs leading-relaxed">
                            Projects with a clear README and a live demo link receive significantly more attention and contribution requests.
                           </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* --- FOOTER BUTTONS --- */}
                <CardFooter className="flex justify-between px-0 pt-8 border-t border-slate-800/50">
                  {step > 1 ? (
                    <Button 
                        type="button" 
                        variant="ghost" 
                        onClick={onBack}
                        className="text-slate-400 hover:text-white hover:bg-slate-800"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" /> Previous
                    </Button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <Button 
                        type="button" 
                        onClick={onNext} 
                        className="bg-blue-600 hover:bg-blue-500 text-white px-8 rounded-lg shadow-lg shadow-blue-600/20"
                    >
                      Next Step <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button 
                        type="submit" 
                        className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 rounded-lg shadow-lg shadow-emerald-600/20"
                    >
                      Publish Project <CheckCircle2 className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
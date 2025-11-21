import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ChevronRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient with spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#121820] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,141,184,0.08)_0%,transparent_70%)]" />
      
      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Abstract shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5b8db8]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1a2632]/50 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#f5f1e8] mb-8 tracking-tight leading-[1.1]">
            Client onboarding shouldn't be chaos.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-[#a8a29e] mb-12 max-w-3xl mx-auto leading-relaxed">
            One link. Client fills out intake, uploads documents, signs agreements, and pays. 
            Everything syncs to your systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button 
                onClick={() => (window as any).navigateTo?.("demo")}
                className="bg-[#5b8db8] text-white hover:bg-[#4a7c9e] px-8 py-6 group"
              >
                Join Waitlist
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                onClick={() => (window as any).navigateTo?.("demo")}
                variant="outline" 
                className="border-[#5b8db8]/30 text-[#5b8db8] hover:bg-[#5b8db8]/10 px-8 py-6 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ChevronRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dramatic background with spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#121820] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(91,141,184,0.15)_0%,transparent_60%)]" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#5b8db8]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#1a2632]/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#f5f1e8] mb-8 leading-tight">
            Stop taping tools together.
          </h2>
          
          <p className="text-xl md:text-2xl text-[#a8a29e] mb-12 max-w-2xl mx-auto">
            See what onboarding looks like when it's built for accounting firms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button 
                onClick={() => (window as any).navigateTo?.("demo")}
                className="bg-[#5b8db8] text-white hover:bg-[#4a7c9e] px-10 py-7 group"
              >
                Join the Waitlist
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button 
                onClick={() => (window as any).navigateTo?.("demo")}
                variant="outline" 
                className="border-[#5b8db8]/30 text-[#5b8db8] hover:bg-[#5b8db8]/10 px-10 py-7 group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Request Demo
              </Button>
            </motion.div>
          </div>

          {/* Trust indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-[#a8a29e]/60 mt-12"
          >
            Launching Q1 2025
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
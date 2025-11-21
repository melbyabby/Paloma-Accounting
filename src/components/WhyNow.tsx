import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WhyNow() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121820] via-[#0a0a0a] to-[#121820]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl text-[#f5f1e8] mb-6">
                Can't scale without structure
              </h2>
              
              <p className="text-xl text-[#a8a29e] leading-relaxed mb-6">
                Firms are adopting AI. Teams work remote. Advisory is growing.
              </p>
              
              <p className="text-xl text-[#a8a29e] leading-relaxed">
                But onboarding? Still a mess.
              </p>
            </div>

            {/* Image */}
            <div className="relative order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden border border-[#5b8db8]/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1617969628836-228af8869347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29keSUyMHN0dWRpbyUyMGludGVydmlld3xlbnwxfHx8fDE3NjM1MDA0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern workspace"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>
              <div className="absolute -inset-4 bg-[#5b8db8]/5 blur-3xl -z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

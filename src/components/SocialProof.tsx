import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SocialProof() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden border border-[#5b8db8]/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjb2xsYWJvcmF0aW9uJTIwdGVhbXxlbnwxfHx8fDE3NjM0NjI5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team collaboration"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>
              <div className="absolute -inset-4 bg-[#5b8db8]/5 blur-3xl -z-10" />
            </div>

            {/* Text */}
            <div>
              <p className="text-2xl text-[#f5f1e8] mb-6 leading-relaxed">
                Built after talking to 50+ firms.
              </p>
              <p className="text-lg text-[#a8a29e] leading-relaxed">
                Same story everywhere: messy onboarding, lost documents, late billing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HowItWorks() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#f5f1e8] mb-16 text-center">
            What it looks like
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Client Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-lg overflow-hidden border border-[#5b8db8]/20 mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NjM0NzQ2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Client view"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              <h3 className="text-2xl text-[#f5f1e8] mb-6">Client sees</h3>

              <div className="space-y-3">
                {[
                  "Clean welcome",
                  "Simple questions",
                  "Upload checklist",
                  "Sign documents",
                  "Pay",
                  "Done"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5b8db8]" />
                    <p className="text-[#a8a29e]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Firm Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-lg overflow-hidden border border-[#5b8db8]/20 mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1685107306307-147226ea476f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9vZHklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNTAwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Firm view"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              <h3 className="text-2xl text-[#f5f1e8] mb-6">You see</h3>

              <div className="space-y-3">
                {[
                  "Client in Practice CS",
                  "Documents organized",
                  "Agreements signed",
                  "Payment received",
                  "Portal ready",
                  "Start work"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5b8db8]" />
                    <p className="text-[#a8a29e]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

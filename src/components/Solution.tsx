import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Check, ArrowRight } from "lucide-react";

export function Solution() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#121820] to-[#0a0a0a]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-[#f5f1e8] mb-16 text-center">
            One clean workflow
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden border border-[#5b8db8]/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758876017817-15b53881acf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNrJTIwb3JnYW5pemVkfGVufDF8fHx8MTc2MzUwMTQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Organized workflow"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 rounded-full bg-[#5b8db8]/20 border border-[#5b8db8] flex items-center justify-center backdrop-blur-sm">
                    <Check className="w-6 h-6 text-[#5b8db8]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                "Send link",
                "They fill intake",
                "Upload documents",
                "Sign agreements",
                "Pay",
                "Auto-sync to your systems"
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5b8db8]/10 border border-[#5b8db8]/30 flex items-center justify-center">
                    <span className="text-sm text-[#5b8db8]">{index + 1}</span>
                  </div>
                  <p className="text-xl text-[#f5f1e8]">{step}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Before/After */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg border border-white/5 bg-[#0f0f0f]/50">
              <p className="text-sm uppercase tracking-wider text-[#a8a29e] mb-4">Before</p>
              <p className="text-lg text-[#f5f1e8] mb-2">5 different tools</p>
              <p className="text-[#a8a29e]">Manual data entry</p>
            </div>
            
            <div className="p-8 rounded-lg border border-[#5b8db8]/20 bg-[#5b8db8]/5">
              <p className="text-sm uppercase tracking-wider text-[#5b8db8] mb-4">After</p>
              <p className="text-lg text-[#f5f1e8] mb-2">One link</p>
              <p className="text-[#a8a29e]">Everything syncs automatically</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

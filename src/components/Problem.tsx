import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X } from "lucide-react";

export function Problem() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-[#f5f1e8] mb-16 text-center">
            The usual mess
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Chaos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative h-64 rounded-lg overflow-hidden border border-red-500/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1737358054558-2d1d81018bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBkb2N1bWVudHMlMjB3b3JrZmxvd3xlbnwxfHx8fDE3NjM1MDE0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Documents scattered"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xl text-[#f5f1e8] mb-2">Emails. Texts. Portals.</p>
                <p className="text-[#a8a29e]">Documents everywhere.</p>
              </div>
            </motion.div>

            {/* Inconsistent */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative h-64 rounded-lg overflow-hidden border border-red-500/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1647154933795-422ba6b3034e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHR5cGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjM1MDE0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Manual work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xl text-[#f5f1e8] mb-2">Every client different.</p>
                <p className="text-[#a8a29e]">Stuff gets missed.</p>
              </div>
            </motion.div>

            {/* Late pricing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative h-64 rounded-lg overflow-hidden border border-red-500/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcHJvZmVzc2lvbmFsJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzQ4NTkxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Money issues"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xl text-[#f5f1e8] mb-2">Pricing comes last.</p>
                <p className="text-[#a8a29e]">Scope creeps.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

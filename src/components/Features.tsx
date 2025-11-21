import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckSquare, Bell, DollarSign, FileSignature, Workflow, MessageSquare } from "lucide-react";

const features = [
  {
    icon: CheckSquare,
    title: "Custom checklists",
    image: "https://images.unsplash.com/photo-1758876017817-15b53881acf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNrJTIwb3JnYW5pemVkfGVufDF8fHx8MTc2MzUwMTQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Bell,
    title: "Smart reminders",
    image: "https://images.unsplash.com/photo-1647154933795-422ba6b3034e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHR5cGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjM1MDE0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: DollarSign,
    title: "Upfront pricing",
    image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcHJvZmVzc2lvbmFsJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzQ4NTkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: FileSignature,
    title: "E-sign included",
    image: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGFncmVlbWVudHxlbnwxfHx8fDE3NjM0MTQxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Workflow,
    title: "Real integrations",
    image: "https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NjM0NzQ2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: MessageSquare,
    title: "Secure messaging",
    image: "https://images.unsplash.com/photo-1685107306307-147226ea476f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9vZHklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNTAwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Features() {
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
          <h2 className="text-3xl md:text-4xl text-[#f5f1e8] mb-16 text-center">
            Everything included
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-lg border border-[#5b8db8]/20 hover:border-[#5b8db8]/40 transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                      
                      {/* Icon */}
                      <div className="absolute top-4 left-4">
                        <div className="p-2 rounded-lg bg-[#5b8db8]/20 border border-[#5b8db8]/30 backdrop-blur-sm">
                          <Icon className="h-5 w-5 text-[#5b8db8]" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
                      <p className="text-lg text-[#f5f1e8]">{feature.title}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { ArrowRight, Check } from "lucide-react";
import palomaLogo from "figma:asset/31f930a355888a6b2f87c26a540ce31ce4ef9940.png";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Subtle grain texture */}
      <div 
        className="fixed inset-0 opacity-[0.015] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className="relative z-50 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={palomaLogo} alt="Paloma" className="h-7 w-7" />
            <span className="text-[#f5f1e8] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Paloma</span>
          </div>
          <Button
            onClick={() => (window as any).navigateTo?.("login")}
            variant="ghost"
            className="text-[#f5f1e8]/70 hover:text-[#f5f1e8] hover:bg-transparent"
          >
            Sign in
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 
              className="text-[56px] md:text-[72px] lg:text-[88px] leading-[1.05] text-[#f5f1e8] mb-8 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Client onboarding for accounting firms
            </h1>
            
            <p className="text-xl md:text-2xl text-[#a8a29e] mb-12 max-w-2xl leading-relaxed">
              One workflow for intake, billing, and data entry. Built for Practice CS, UltraTax, and Workpapers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-1 max-w-md">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-white/5 border-white/10 text-[#f5f1e8] placeholder:text-[#a8a29e]/40 focus:border-[#5b8db8] focus:ring-[#5b8db8]/20"
                  />
                  <Button
                    className="h-12 px-6 bg-[#5b8db8] hover:bg-[#4a7c9e] text-white border-0"
                  >
                    Request demo
                  </Button>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#a8a29e]/50 mt-4">
              Launching Q1 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-16">
          <p className="text-sm text-[#a8a29e]/60 mb-8 tracking-wide uppercase">
            Built for
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-40">
            <div className="text-[#f5f1e8]/60">Practice CS</div>
            <div className="text-[#f5f1e8]/60">UltraTax CS</div>
            <div className="text-[#f5f1e8]/60">Workpapers CS</div>
            <div className="text-[#f5f1e8]/60">Liscio</div>
          </div>
        </div>
      </section>

      {/* Main Value Prop */}
      <section className="relative border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-32">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-[44px] md:text-[56px] leading-[1.1] text-[#f5f1e8] mb-6 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Stop switching between systems
              </h2>
              <p className="text-lg text-[#a8a29e] leading-relaxed">
                Every firm uses different tools for intake, documents, billing, and data entry. Paloma brings it all into one structured workflow that syncs with your existing systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                "Client completes intake form",
                "Documents uploaded with checklists",
                "Engagement letter e-signed",
                "Payment collected upfront",
                "Data auto-syncs to Practice CS"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-[#5b8db8]/30 flex items-center justify-center group-hover:bg-[#5b8db8]/10 transition-colors">
                    <Check className="w-3 h-3 text-[#5b8db8]" />
                  </div>
                  <span className="text-lg text-[#f5f1e8]/80">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 
              className="text-[44px] md:text-[56px] leading-[1.1] text-[#f5f1e8] mb-6 tracking-tight max-w-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Everything you need in one place
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Smart intake forms",
                desc: "Custom forms that adapt based on client responses. No more back-and-forth emails."
              },
              {
                title: "Document collection",
                desc: "Automated checklists. Clients see exactly what's missing. Upload directly to your portal."
              },
              {
                title: "E-signatures",
                desc: "Engagement letters and POA forms signed electronically. Track status in real-time."
              },
              {
                title: "Upfront billing",
                desc: "Clear pricing, paid before work starts. Card and ACH payments built in."
              },
              {
                title: "Practice CS sync",
                desc: "Client data flows directly into Practice CS. No manual entry required."
              },
              {
                title: "Works with your stack",
                desc: "Integrates with UltraTax, Workpapers CS, and Liscio. More integrations coming."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl text-[#f5f1e8] mb-3">{feature.title}</h3>
                <p className="text-[#a8a29e] leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-32">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24"
            >
              <h2 
                className="text-[44px] md:text-[56px] leading-[1.1] text-[#f5f1e8] mb-6 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                One link does it all
              </h2>
              <p className="text-lg text-[#a8a29e] leading-relaxed">
                Send your client a single URL. They complete everything on their own time. You get notified when they're done.
              </p>
            </motion.div>

            <div className="space-y-16">
              {[
                { num: "01", title: "Client receives link", desc: "No login required. Works on any device." },
                { num: "02", title: "Completes intake", desc: "Smart forms that only ask relevant questions." },
                { num: "03", title: "Uploads documents", desc: "Guided checklist shows what's needed." },
                { num: "04", title: "Signs agreements", desc: "E-sign engagement letter and POA." },
                { num: "05", title: "Pays upfront", desc: "Card or ACH payment before work starts." },
                { num: "06", title: "Auto-syncs", desc: "Everything lands in Practice CS automatically." }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-8"
                >
                  <div className="text-[#5b8db8]/40 text-lg mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-[#f5f1e8] mb-2">{step.title}</h3>
                    <p className="text-[#a8a29e] leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 
              className="text-[44px] md:text-[56px] leading-[1.1] text-[#f5f1e8] mb-8 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              See Paloma in action
            </h2>
            
            <p className="text-lg text-[#a8a29e] mb-12 leading-relaxed">
              Request a personalized demo and we'll show you how Paloma fits into your firm's workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 bg-white/5 border-white/10 text-[#f5f1e8] placeholder:text-[#a8a29e]/40 focus:border-[#5b8db8] focus:ring-[#5b8db8]/20 max-w-sm"
              />
              <Button
                className="h-12 px-8 bg-[#5b8db8] hover:bg-[#4a7c9e] text-white border-0 gap-2"
              >
                Request demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex items-center gap-3">
              <img src={palomaLogo} alt="Paloma" className="h-6 w-6 opacity-60" />
              <span className="text-[#f5f1e8]/60 text-sm">© 2025 Paloma</span>
            </div>
            <div className="flex gap-8">
              <button className="text-sm text-[#a8a29e]/60 hover:text-[#f5f1e8]/80 transition-colors">Privacy</button>
              <button className="text-sm text-[#a8a29e]/60 hover:text-[#f5f1e8]/80 transition-colors">Terms</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import palomaLogo from "figma:asset/31f930a355888a6b2f87c26a540ce31ce4ef9940.png";

export function Footer() {
  const links = {
    Product: ["Features", "Integrations", "Pricing", "Roadmap"],
    Company: ["About", "Contact", "Careers", "Blog"],
    Legal: ["Privacy", "Terms", "Security", "Compliance"],
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0a]">
      {/* Subtle texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={palomaLogo} alt="Paloma" className="h-10 w-10" />
              <span className="text-xl text-[#f5f1e8] tracking-wide">Paloma</span>
            </div>
            <p className="text-[#a8a29e] leading-relaxed max-w-sm">
              Streamlined onboarding and billing for modern accounting firms.
              Bringing order, automation, and clarity to every client engagement.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-[#f5f1e8] mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-[#a8a29e] hover:text-[#5b8db8] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#a8a29e]/60">
            © 2025 Paloma. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#a8a29e]/60 hover:text-[#5b8db8] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-[#a8a29e]/60 hover:text-[#5b8db8] transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
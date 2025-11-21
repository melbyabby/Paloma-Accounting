import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import palomaLogo from "figma:asset/31f930a355888a6b2f87c26a540ce31ce4ef9940.png";

export function Header() {
  const navItems = ["Product", "Pricing", "Security", "About"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={palomaLogo} alt="Paloma" className="h-8 w-8" />
            <span className="text-[#f5f1e8] tracking-wide">Paloma</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#a8a29e] hover:text-[#5b8db8] transition-colors"
              >
                {item}
              </a>
            ))}
            <Button 
              onClick={() => (window as any).navigateTo?.("login")}
              className="bg-[#5b8db8] text-white hover:bg-[#4a7c9e]"
            >
              Login
            </Button>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-[#f5f1e8]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#0f0f0f] border-l border-white/10">
              <nav className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-[#a8a29e] hover:text-[#5b8db8] transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <Button 
                  onClick={() => (window as any).navigateTo?.("login")}
                  className="bg-[#5b8db8] text-white hover:bg-[#4a7c9e] w-full"
                >
                  Login
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
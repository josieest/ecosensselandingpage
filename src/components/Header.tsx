import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import logo from "figma:asset/8b0802d0b6a39071ba887d5279730203f5255349.png";

export function Header() {
  return (
    <div className="sticky top-0 z-50">
      <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-24 items-center px-2">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="ecosenssehealth logo" className="h-24 w-24" style={{marginTop: '81px'}} />
              <span className="font-semibold text-3xl" style={{marginTop: '64px'}}>
                eco<span style={{color: '#d4183d'}}>SENSSE</span>health
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-6 ml-16" style={{marginTop: '71px'}}>
              <a href="#problem" className="text-base font-bold text-[#0A2342] hover:text-[#d4183d] transition-colors">
                Problem
              </a>
              <a href="#solution" className="text-base font-bold text-[#0A2342] hover:text-[#d4183d] transition-colors">
                Solution
              </a>
              <a href="#platform" className="text-base font-bold text-[#0A2342] hover:text-[#d4183d] transition-colors">
                Platform
              </a>
              <a href="#pricing" className="text-base font-bold text-[#0A2342] hover:text-[#d4183d] transition-colors">
                Pricing
              </a>
              <a href="#partner" className="text-base font-bold text-[#0A2342] hover:text-[#d4183d] transition-colors">
                Partner
              </a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
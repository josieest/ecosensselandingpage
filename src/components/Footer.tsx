import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import logoImage from "figma:asset/08c6febabef0a4cdbffb121033a6556c9b7694cb.png";

export function Footer() {
  return (
    <footer className="border-t bg-[#F7F7F8]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoImage} alt="ecosenssehealth logo" className="h-16 w-16 object-contain" />
              <span className="font-semibold text-xl">
                eco<span style={{color: '#d4183d'}}>SENSSE</span>health
              </span>
            </div>
            <p className="text-[#0A2342] mb-6 max-w-md text-justify" style={{fontSize: '15px'}}>
              Empowering UK care agencies and families with real-time data to move from reactive crisis management to proactive elderly care.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[#0A2342]" style={{fontSize: '17px'}}>Product</h4>
            <ul className="space-y-2 text-[#0A2342]" style={{fontSize: '15px'}}>
              <li><span className="cursor-default">Features</span></li>
              <li><span className="cursor-default">Pricing</span></li>
              <li><span className="cursor-default">Changelog</span></li>
              <li><span className="cursor-default">Roadmap</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[#0A2342]" style={{fontSize: '17px'}}>Resources</h4>
            <ul className="space-y-2 text-[#0A2342]" style={{fontSize: '15px'}}>
              <li><span className="cursor-default">Documentation</span></li>
              <li><span className="cursor-default">Guides</span></li>
              <li><span className="cursor-default">Templates</span></li>
              <li><span className="cursor-default">Blog</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[#0A2342]" style={{fontSize: '17px'}}>Company</h4>
            <ul className="space-y-2 text-[#0A2342]" style={{fontSize: '15px'}}>
              <li><span className="cursor-default">About</span></li>
              <li><span className="cursor-default">Careers</span></li>
              <li><span className="cursor-default">Contact</span></li>
              <li><span className="cursor-default">Support</span></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-[#0A2342]/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#0A2342] mb-4 md:mb-0" style={{fontSize: '15px'}}>
            © 2026 ecosenssehealth. All rights reserved.
          </p>
          <div className="flex space-x-6 text-[#0A2342]" style={{fontSize: '15px'}}>
            <span className="cursor-default">Privacy Policy</span>
            <span className="cursor-default">Terms of Service</span>
            <span className="cursor-default">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
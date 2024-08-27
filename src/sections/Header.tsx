import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/button";


export const Header = () => {
  return (
    <header className="sticky top-0 z-10 py-4 border-b border-white/15 md:border-none backgdrop-blur md:backdrop-blur-none">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
        <div className="absolute inset-0 hidden backdrop-blur -z-10 md:block"></div>
          <div>
            <div className="inline-flex items-center justify-center w-10 h-10 border rounded-lg border-white/15">
              <LogoIcon className="w-8 h-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="transition text-white/70 hover:text-white">
                Features
              </a>
              <a href="#" className="transition text-white/70 hover:text-white">
                Developers
              </a>
              <a href="#" className="transition text-white/70 hover:text-white">
                Pricing
              </a>
              <a href="#" className="transition text-white/70 hover:text-white">
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button>Join waitlist</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

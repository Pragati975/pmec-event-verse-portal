
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-gray-900">Parala Maharaja Engineering College</h1>
              <p className="text-xs text-gray-600">Event Management Portal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("clubs")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Clubs
            </button>
            <button onClick={() => scrollToSection("events")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Events
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Gallery
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Admin Login
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t py-4 space-y-4">
            <button onClick={() => scrollToSection("clubs")} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Clubs
            </button>
            <button onClick={() => scrollToSection("events")} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Events
            </button>
            <button onClick={() => scrollToSection("gallery")} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
            <div className="px-4">
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                Admin Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

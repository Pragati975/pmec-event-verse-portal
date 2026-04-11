
import { useState, useEffect } from "react";
import { Menu, X, LogIn, UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const navLinks = [
    { label: "Events", action: () => scrollToSection("events") },
    { label: "Clubs", action: () => scrollToSection("clubs") },
    { label: "Gallery", action: () => scrollToSection("gallery") },
    { label: "About", action: () => navigate("/about") },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="/lovable-uploads/c6ad273d-c889-4afe-9d55-c5bafc990ce0.png"
                alt="PMEC Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg font-bold text-foreground hidden md:block">
              PMEC <span className="text-primary">EventVerse</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm px-4 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center gap-2 text-sm px-5 py-2 rounded-full border border-primary/50 text-primary hover:border-primary hover:shadow-[0_0_15px_hsl(263,70%,55%,0.3)] transition-all"
                >
                  <LogIn size={16} />
                  Login
                </Link>
                <Link
                  to="/register"
                  className="flex items-center gap-2 text-sm px-5 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:scale-105 transition-all"
                >
                  <UserPlus size={16} />
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed top-16 right-0 bottom-0 w-72 glass-strong p-6 space-y-4 md:hidden"
            >
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="block w-full text-left py-3 text-foreground/80 hover:text-foreground border-b border-border/30 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                {user ? (
                  <>
                    <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-3 rounded-full border border-primary/50 text-primary">
                      Dashboard
                    </Link>
                    <button onClick={handleLogout} className="block w-full text-center py-3 rounded-full bg-primary/20 text-primary">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-3 rounded-full border border-primary/50 text-primary">
                      Login
                    </Link>
                    <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold">
                      Register
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};


import { Heart, Github, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

const quickLinks = [
  { label: "Events", href: "/#events" },
  { label: "Clubs", href: "/#clubs" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About", href: "/about" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="/lovable-uploads/c6ad273d-c889-4afe-9d55-c5bafc990ce0.png" alt="PMEC Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-lg font-bold text-foreground">
                PMEC <span className="text-primary">EventVerse</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Parala Maharaja Engineering College — Fostering innovation, creativity, and excellence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-[0_0_15px_hsl(263,70%,55%,0.3)] transition-all" aria-label={social.label}>
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            &copy; 2025 Parala Maharaja Engineering College. Made with <Heart size={14} className="text-destructive fill-current" /> for students.
          </p>
        </div>
      </div>
    </footer>
  );
};

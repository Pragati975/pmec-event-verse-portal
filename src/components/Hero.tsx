
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Rocket } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";
import { Link } from "react-router-dom";

export const Hero = () => {
  const scrollToEvents = () => {
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <ParticleBackground />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(263,70%,20%,0.3),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(187,94%,30%,0.15),transparent_60%)]" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm text-muted-foreground"
          >
            <Sparkles size={16} className="text-secondary" />
            <span>Welcome to the Future of College Events</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight font-display">
            <span className="gradient-text">PMEC EventVerse</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-foreground/80 font-medium">
            Your College. Your Events. Your Stage.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-muted-foreground"
        >
          Empowering Innovation, Celebrating Culture. Explore events, connect with clubs,
          and celebrate the vibrant life at PMEC.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button
            onClick={scrollToEvents}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-lg transition-all duration-300 hover:scale-105 glow-violet min-w-[200px]"
          >
            <span className="flex items-center justify-center gap-2">
              <Rocket size={20} />
              Explore Events
            </span>
          </button>
          <Link
            to="/register"
            className="px-8 py-4 rounded-full border border-primary/50 text-foreground font-bold text-lg transition-all duration-300 hover:border-primary hover:glow-violet hover:scale-105 backdrop-blur-sm min-w-[200px] text-center"
          >
            Register Now
          </Link>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={32} className="mx-auto text-muted-foreground" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

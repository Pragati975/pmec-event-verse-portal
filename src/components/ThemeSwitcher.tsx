
import { Sun, Moon, Sunset, Waves } from "lucide-react";
import { useTheme, Theme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const themes: { value: Theme; label: string; icon: typeof Sun; color: string }[] = [
  { value: "dark", label: "Dark", icon: Moon, color: "hsl(263, 70%, 55%)" },
  { value: "light", label: "Light", icon: Sun, color: "hsl(45, 93%, 55%)" },
  { value: "sunset", label: "Sunset", icon: Sunset, color: "hsl(25, 95%, 55%)" },
  { value: "ocean", label: "Ocean", icon: Waves, color: "hsl(200, 80%, 50%)" },
];

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = themes.find((t) => t.value === theme)!;
  const Icon = current.icon;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-9 h-9 rounded-full border border-border/50 hover:border-primary/50 transition-all hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)]"
        aria-label="Change theme"
      >
        <Icon size={16} className="text-foreground" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -4 }}
            className="absolute right-0 top-12 glass-strong rounded-xl p-2 min-w-[140px] z-50"
          >
            {themes.map((t) => {
              const TIcon = t.icon;
              return (
                <button
                  key={t.value}
                  onClick={() => { setTheme(t.value); setOpen(false); }}
                  className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm transition-colors ${
                    theme === t.value
                      ? "bg-primary/20 text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <TIcon size={14} style={{ color: t.color }} />
                  {t.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

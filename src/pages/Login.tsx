
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { toast } from "sonner";
import { LogIn, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ParticleBackground";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Welcome back!");
      navigate("/dashboard");
    }
  };

  const handleGoogleLogin = async () => {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast.error(result.error.message);
      return;
    }
    if (result.redirected) return;
    toast.success("Welcome back!");
    navigate("/dashboard");
  };

  const inputClass = "w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50";

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative">
      <ParticleBackground />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(263,70%,20%,0.2),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md p-8 glass rounded-2xl mx-4"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-4">
            <img src="/lovable-uploads/c6ad273d-c889-4afe-9d55-c5bafc990ce0.png" alt="PMEC" className="w-16 h-16 mx-auto" />
          </Link>
          <h1 className="text-3xl font-black gradient-text inline-block">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Sign in to your EventVerse account</p>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-muted/50 transition-all flex items-center justify-center gap-2 mb-6"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Continue with Google
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-muted-foreground text-sm">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground/80 mb-2">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="you@pmec.ac.in" required />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground/80 mb-2">Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass} placeholder="••••••••" required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div className="text-right">
            <Link to="/forgot-password" className="text-sm text-primary hover:underline">Forgot password?</Link>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <LogIn size={18} />
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-muted-foreground text-sm mt-6">
          Don't have an account? <Link to="/register" className="text-primary font-semibold hover:underline">Register</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;

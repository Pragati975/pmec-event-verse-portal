
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { User, Calendar, LogOut, Settings } from "lucide-react";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/login");
        return;
      }
      setUser(session.user);
      setLoading(false);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { navigate("/login"); return; }
      setUser(session.user);
      setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const userName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Student";
  const avatarUrl = user?.user_metadata?.avatar_url;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-12 container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Profile Header */}
          <div className="glass rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-6">
              {avatarUrl ? (
                <img src={avatarUrl} alt="Avatar" className="w-20 h-20 rounded-full border-2 border-primary" />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-3xl font-bold text-primary-foreground">
                  {userName[0]?.toUpperCase()}
                </div>
              )}
              <div>
                <h1 className="text-3xl font-black text-foreground">Welcome, {userName}!</h1>
                <p className="text-muted-foreground">{user?.email}</p>
                <div className="flex gap-2 mt-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary">
                    {user?.user_metadata?.branch || "Student"}
                  </span>
                  {user?.user_metadata?.year && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/20 text-secondary">
                      Year {user.user_metadata.year}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all cursor-pointer">
              <Calendar size={32} className="text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Registered Events</h3>
              <p className="text-muted-foreground text-sm">View your upcoming and past event registrations.</p>
              <p className="text-3xl font-black text-primary mt-4">0</p>
            </div>
            <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all cursor-pointer">
              <User size={32} className="text-secondary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Profile</h3>
              <p className="text-muted-foreground text-sm">Edit your profile information and preferences.</p>
            </div>
            <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all cursor-pointer" onClick={handleLogout}>
              <LogOut size={32} className="text-destructive mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Logout</h3>
              <p className="text-muted-foreground text-sm">Sign out of your account.</p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

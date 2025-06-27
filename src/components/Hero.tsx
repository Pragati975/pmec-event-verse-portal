
import { ArrowDown } from "lucide-react";
export const Hero = () => {
  const scrollToClubs = () => {
    const element = document.getElementById("clubs");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/41aef742-c055-437a-a734-9bab348a8d26.png" 
          alt="PMEC College Building" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/70 via-indigo-600/70 to-purple-700/70"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/20 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-fade-in">
            Welcome to PMEC
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-100">Event Management Portal</h3>
        </div>
        
        <p className="text-xl md:text-2xl mb-12 text-blue-50 max-w-3xl mx-auto leading-relaxed">
          Empowering Innovation, Celebrating Culture. Explore events, connect with clubs, and celebrate the vibrant life at PMEC.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
          <button onClick={scrollToClubs} className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Explore Clubs
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
            View Events
          </button>
        </div>

        <div className="animate-bounce">
          <ArrowDown size={32} className="mx-auto text-white/70" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>;
};

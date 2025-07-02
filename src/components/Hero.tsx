
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

  const scrollToEvents = () => {
    const element = document.getElementById("events");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/41aef742-c055-437a-a734-9bab348a8d26.png" 
          alt="PMEC College Building" 
          className="w-full h-full object-cover object-center" 
        />
        {/* Soft transparent dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-white drop-shadow-2xl leading-tight" 
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Welcome to PMEC
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-white/95 drop-shadow-lg"
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Event Management Portal
          </h2>
        </div>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 drop-shadow-md font-medium animate-fade-in-delay"
           style={{ fontFamily: 'Montserrat, sans-serif', animationDelay: '0.3s' }}>
          Empowering Innovation, Celebrating Culture. Explore events, connect with clubs, and celebrate the vibrant life at PMEC.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-delay"
             style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={scrollToClubs} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 min-w-[200px]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Explore Clubs
          </button>
          <button 
            onClick={scrollToEvents} 
            className="border-2 border-white/80 hover:border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/10 min-w-[200px] transform hover:scale-105 hover:-translate-y-1"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            View Events
          </button>
        </div>

        <div className="animate-bounce">
          <ArrowDown size={36} className="mx-auto text-white/70 drop-shadow-lg" />
        </div>
      </div>

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/20 to-transparent"></div>
    </section>
  );
};


import { Code, Bot, Palette, Music, Heart, PenTool } from "lucide-react";

const clubs = [
  {
    name: "CDD (Code Debug Deploy)",
    description: "A coding club nurturing innovation and technical excellence.",
    icon: Code,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Robostreak",
    description: "The robotics club exploring automation, hardware, and AI applications.",
    icon: Bot,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Imagics",
    description: "Creative design, digital art, and multimedia enthusiasts unite here.",
    icon: Palette,
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Abhyudaya",
    description: "Dance, drama, and performance arts showcasing cultural expression.",
    icon: Music,
    color: "from-green-500 to-teal-500"
  },
  {
    name: "Sanskruti",
    description: "A club preserving and promoting Indian heritage and values.",
    icon: Heart,
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "Writerea",
    description: "For writers, poets, and creative thinkers who express through words.",
    icon: PenTool,
    color: "from-indigo-500 to-purple-500"
  }
];

export const ClubsSection = () => {
  return (
    <section id="clubs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Clubs</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover diverse communities where passion meets purpose and innovation thrives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, index) => {
            const IconComponent = club.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${club.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={28} className="text-white" />
                </div>
                
                <h4 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {club.name}
                </h4>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {club.description}
                </p>
                
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 flex items-center group">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

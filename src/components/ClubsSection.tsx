
import { useState } from "react";
import { Code, Bot, Palette, Music, Heart, PenTool } from "lucide-react";
import { motion } from "framer-motion";
import { ClubDetailsModal } from "./ClubDetailsModal";

const clubs = [
  { name: "CDD (Code Debug Deploy)", description: "A coding club nurturing innovation and technical excellence.", fullDescription: "CDD (Code Debug Deploy) is the premier coding club of PMEC, dedicated to fostering innovation and technical excellence among students. Our club focuses extensively on hackathons, competitive programming, and cutting-edge AI technologies.\n\nKey Activities:\n• Organizing and participating in national and international hackathons\n• Weekly coding competitions and algorithm challenges\n• AI/ML workshops covering deep learning, neural networks, and computer vision\n• Open source project development and collaboration\n• Industry expert talks on emerging technologies", icon: Code, color: "from-violet-500 to-cyan-400" },
  { name: "Robostreak", description: "The robotics club exploring automation, hardware, and AI applications.", fullDescription: "Robostreak is PMEC's dynamic robotics club where innovation meets automation. We are passionate about building intelligent machines and exploring the fascinating world of robotics and embedded systems.\n\nOur Focus Areas:\n• Autonomous robot development and programming\n• Arduino, Raspberry Pi, and microcontroller projects\n• Drone technology and aerial robotics\n• Industrial automation and IoT integration", icon: Bot, color: "from-purple-500 to-pink-500" },
  { name: "Imagics", description: "Creative design, digital art, and multimedia enthusiasts unite here.", fullDescription: "Imagics is the creative heart of PMEC, where artistic vision meets digital innovation. We are a vibrant community of artists, designers, and creative minds passionate about visual storytelling and digital craftsmanship.\n\nOur Creative Domains:\n• Digital illustration and concept art\n• Graphic design for posters, logos, and branding\n• Photography and photo manipulation\n• UI/UX design principles and prototyping", icon: Palette, color: "from-orange-500 to-red-500" },
  { name: "Abhyudaya", description: "Dance, drama, and performance arts showcasing cultural expression.", fullDescription: "Abhyudaya is PMEC's premier anchoring and performance club, dedicated to developing confident speakers, charismatic hosts, and captivating performers.\n\nCore Specializations:\n• Event hosting and anchoring\n• Public speaking and presentation skills\n• Drama and theatrical performances\n• Dance performances across various cultural styles", icon: Music, color: "from-green-500 to-teal-500" },
  { name: "Sanskruti", description: "A club preserving and promoting Indian heritage and values.", fullDescription: "Sanskruti is PMEC's cultural preservation society, dedicated to celebrating and promoting the rich heritage of Indian art, culture, and traditional values.\n\nCultural Focus Areas:\n• Traditional Indian classical music and instruments\n• Classical dance forms\n• Folk art and regional cultural traditions\n• Traditional crafts and heritage studies", icon: Heart, color: "from-yellow-500 to-orange-500" },
  { name: "Writerea", description: "For writers, poets, and creative thinkers who express through words.", fullDescription: "Writerea is PMEC's literary sanctuary, where words come alive and creativity flows through every verse, story, and article.\n\nLiterary Genres We Explore:\n• Poetry in multiple languages\n• Creative writing including short stories\n• Article writing on social issues, technology, and current affairs\n• Blog writing and digital content creation", icon: PenTool, color: "from-indigo-500 to-purple-500" }
];

export const ClubsSection = () => {
  const [selectedClub, setSelectedClub] = useState<typeof clubs[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="clubs" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(263,70%,15%,0.1),transparent_70%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text inline-block">Our Clubs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover diverse communities where passion meets purpose and innovation thrives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, index) => {
            const IconComponent = club.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_hsl(263,70%,55%,0.15)] cursor-pointer"
                onClick={() => { setSelectedClub(club); setIsModalOpen(true); }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${club.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{club.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{club.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ClubDetailsModal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setSelectedClub(null); }} club={selectedClub} />
    </section>
  );
};


import { useState } from "react";
import { Code, Bot, Palette, Music, Heart, PenTool } from "lucide-react";
import { ClubDetailsModal } from "./ClubDetailsModal";

const clubs = [
  {
    name: "CDD (Code Debug Deploy)",
    description: "A coding club nurturing innovation and technical excellence.",
    fullDescription: `CDD (Code Debug Deploy) is the premier coding club of PMEC, dedicated to fostering innovation and technical excellence among students. Our club focuses extensively on hackathons, competitive programming, and cutting-edge AI technologies.

Key Activities:
• Organizing and participating in national and international hackathons
• Weekly coding competitions and algorithm challenges
• AI/ML workshops covering deep learning, neural networks, and computer vision
• Open source project development and collaboration
• Industry expert talks on emerging technologies like blockchain, IoT, and cloud computing
• Code debugging sessions and peer programming
• Technical project mentorship and guidance

Achievements:
• Winner of multiple inter-college hackathons
• Successfully deployed 50+ student projects
• Trained over 200 students in competitive programming
• Established partnerships with leading tech companies for internships

Whether you're a beginner looking to learn your first programming language or an experienced coder aiming to build the next breakthrough application, CDD provides the perfect platform to enhance your technical skills and connect with like-minded innovators.`,
    icon: Code,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Robostreak",
    description: "The robotics club exploring automation, hardware, and AI applications.",
    fullDescription: `Robostreak is PMEC's dynamic robotics club where innovation meets automation. We are passionate about building intelligent machines and exploring the fascinating world of robotics and embedded systems.

Our Focus Areas:
• Autonomous robot development and programming
• Arduino, Raspberry Pi, and microcontroller projects
• Drone technology and aerial robotics
• Industrial automation and IoT integration
• Robotic process automation (RPA)
• Sensor integration and data acquisition systems
• 3D printing and rapid prototyping

Club Activities:
• Weekly hands-on workshops on robotics fundamentals
• National robotics competition participation (Robocon, TechFest)
• Industry visits to automation companies
• Guest lectures by robotics engineers and researchers
• Inter-departmental robot building competitions
• Collaboration with local industries for real-world projects

Recent Projects:
• Line following and obstacle avoiding robots
• Voice-controlled home automation systems
• Agricultural monitoring drones
• Automated warehouse management systems

Join Robostreak to transform your creative ideas into intelligent machines and be part of the automation revolution shaping our future!`,
    icon: Bot,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Imagics",
    description: "Creative design, digital art, and multimedia enthusiasts unite here.",
    fullDescription: `Imagics is the creative heart of PMEC, where artistic vision meets digital innovation. We are a vibrant community of artists, designers, and creative minds passionate about visual storytelling and digital craftsmanship.

Our Creative Domains:
• Digital illustration and concept art
• Graphic design for posters, logos, and branding
• Photography and photo manipulation
• Traditional art forms including sketching and painting
• Crafts and DIY projects using various materials
• Animation and motion graphics
• UI/UX design principles and prototyping

Regular Activities:
• Weekly art workshops and tutorials
• Digital art challenges and competitions
• Exhibition of student artwork in college galleries
• Collaborative projects with other clubs for event branding
• Art supply sharing and technique exchange sessions
• Guest artist workshops and masterclasses
• Online portfolio building and career guidance

Special Events:
• Annual art exhibition showcasing student talents
• Live art sessions during college festivals
• Charity art sales for social causes
• Collaborative murals and campus beautification projects

Whether you're skilled with traditional brushes, digital styluses, or crafting tools, Imagics provides the perfect platform to express your creativity, learn new techniques, and connect with fellow artists. Join us to transform imagination into stunning visual reality!`,
    icon: Palette,
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Abhyudaya",
    description: "Dance, drama, and performance arts showcasing cultural expression.",
    fullDescription: `Abhyudaya is PMEC's premier anchoring and performance club, dedicated to developing confident speakers, charismatic hosts, and captivating performers. We believe in the power of effective communication and stage presence to inspire and entertain audiences.

Core Specializations:
• Event hosting and anchoring for college functions
• Public speaking and presentation skills development
• Drama and theatrical performances
• Stand-up comedy and improvisational acting
• Dance performances across various cultural styles
• Voice modulation and speech training
• Stage management and event coordination

Training Programs:
• Weekly anchoring practice sessions with real event simulations
• Public speaking workshops focusing on confidence building
• Drama workshops covering acting techniques and script analysis
• Dance choreography sessions for cultural events
• Voice and diction training for clear communication
• Personality development and grooming sessions

Performance Opportunities:
• Hosting major college events, seminars, and cultural programs
• Inter-college competition participation in drama and dance
• Annual theatrical productions with original and adapted scripts
• Cultural festival performances representing PMEC
• Community outreach programs in local schools and organizations

Notable Achievements:
• Successfully hosted 100+ college events with professional standards
• Won multiple inter-college drama and dance competitions
• Trained over 150 students in public speaking and stage presence
• Established a repertoire of 20+ theatrical productions

Join Abhyudaya to overcome stage fear, develop your personality, and become a confident communicator who can captivate any audience!`,
    icon: Music,
    color: "from-green-500 to-teal-500"
  },
  {
    name: "Sanskruti",
    description: "A club preserving and promoting Indian heritage and values.",
    fullDescription: `Sanskruti is PMEC's cultural preservation society, dedicated to celebrating and promoting the rich heritage of Indian art, culture, and traditional values. We believe in connecting the modern generation with their roots while fostering cultural appreciation and diversity.

Cultural Focus Areas:
• Traditional Indian classical music and instruments
• Classical dance forms (Bharatanatyam, Kathak, Odissi, etc.)
• Folk art and regional cultural traditions
• Sanskrit literature and ancient Indian philosophy
• Traditional crafts like pottery, weaving, and metalwork
• Indian festivals and their historical significance
• Heritage architecture and monument studies
• Traditional Indian cuisine and cooking techniques

Regular Activities:
• Weekly classical music and dance practice sessions
• Sanskrit language learning workshops
• Traditional art and craft creation sessions
• Cultural storytelling and mythology discussions
• Heritage walks and visits to historical monuments
• Traditional festival celebrations with authentic rituals
• Guest lectures by cultural historians and traditional artists

Special Programs:
• Annual classical music and dance recitals
• Traditional art exhibitions showcasing student work
• Cultural exchange programs with other institutions
• Documentation projects preserving local cultural practices
• Community outreach promoting cultural awareness
• Collaboration with local artisans and traditional craftspeople

Mission & Vision:
We strive to create cultural ambassadors who can bridge the gap between traditional wisdom and contemporary life. Our members develop deep appreciation for Indian heritage while learning to present it in relevant, engaging ways for modern audiences.

Join Sanskruti to embark on a journey of cultural discovery, learn ancient arts, and become a guardian of our precious cultural legacy!`,
    icon: Heart,
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "Writerea",
    description: "For writers, poets, and creative thinkers who express through words.",
    fullDescription: `Writerea is PMEC's literary sanctuary, where words come alive and creativity flows through every verse, story, and article. We are a passionate community of writers, poets, and literary enthusiasts who believe in the transformative power of written expression.

Literary Genres We Explore:
• Poetry in multiple languages including Hindi, English, and Odia
• Shayari and Urdu poetry with traditional and contemporary styles
• Creative writing including short stories and flash fiction
• Article writing on social issues, technology, and current affairs
• Quote creation and motivational writing
• Blog writing and digital content creation
• Scriptwriting for plays and short films
• Literary criticism and review writing

Regular Activities:
• Weekly poetry slams and open mic sessions
• Creative writing workshops with published authors
• Article writing competitions on relevant topics
• Collaborative anthology projects featuring student work
• Literary magazine publication showcasing best writings
• Book reading sessions and literature discussions
• Guest lectures by renowned poets and authors

Special Events:
• Annual literary festival with inter-college participation
• Poetry marathons and writing challenges
• Literary walks exploring inspiration from campus and city
• Charity poetry sessions for social causes
• Publication of annual college literary magazine
• Online literary blog featuring student contributions

Skills Development:
• Advanced vocabulary building and language enhancement
• Editorial skills and proofreading techniques
• Public reading and performance poetry
• Digital publishing and social media writing
• Research and fact-checking for article writing
• Creative thinking and ideation workshops

Whether you're crafting your first poem, penning thoughtful articles, or weaving intricate stories, Writerea provides the nurturing environment to develop your literary voice and connect with fellow word artists. Join us to transform thoughts into powerful written expressions!`,
    icon: PenTool,
    color: "from-indigo-500 to-purple-500"
  }
];

export const ClubsSection = () => {
  const [selectedClub, setSelectedClub] = useState<typeof clubs[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openClubModal = (club: typeof clubs[0]) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedClub(null);
  };

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
                
                <button 
                  onClick={() => openClubModal(club)}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 flex items-center group"
                >
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

      <ClubDetailsModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        club={selectedClub}
      />
    </section>
  );
};

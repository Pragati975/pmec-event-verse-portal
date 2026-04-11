
import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Users, Timer } from "lucide-react";
import { motion } from "framer-motion";
import { EventRegistrationModal } from "./EventRegistrationModal";

const upcomingEvents = [
  {
    title: "Tech Symposium 2025",
    date: "2025-08-15",
    time: "10:00 AM",
    location: "Main Auditorium",
    attendees: "500+",
    seats: 120,
    description: "Annual technical symposium featuring industry experts and innovative projects.",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop"
  },
  {
    title: "Cultural Fest",
    date: "2025-09-22",
    time: "6:00 PM",
    location: "Open Ground",
    attendees: "1000+",
    seats: 300,
    description: "Celebrate diversity through dance, music, and cultural performances.",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop"
  },
  {
    title: "Hackathon 2025",
    date: "2025-10-05",
    time: "9:00 AM",
    location: "Computer Lab",
    attendees: "200+",
    seats: 50,
    description: "48-hour coding marathon to solve real-world problems.",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop"
  },
  {
    title: "Sports Meet",
    date: "2025-11-10",
    time: "8:00 AM",
    location: "Sports Ground",
    attendees: "800+",
    seats: 200,
    description: "Annual inter-departmental sports competition with multiple disciplines.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-bd45ba6343c5?w=600&h=400&fit=crop"
  },
  {
    title: "AI Workshop",
    date: "2025-08-28",
    time: "2:00 PM",
    location: "Seminar Hall",
    attendees: "150+",
    seats: 40,
    description: "Hands-on workshop covering machine learning and deep learning fundamentals.",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
  },
  {
    title: "Dance Competition",
    date: "2025-09-30",
    time: "5:00 PM",
    location: "Auditorium",
    attendees: "600+",
    seats: 100,
    description: "Inter-college dance competition with solo and group categories.",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1547153760-18fc86c6e983?w=600&h=400&fit=crop"
  }
];

const categories = ["All", "Technical", "Cultural", "Sports", "Workshop"];

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const update = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, mins: 0 }); return; }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
      });
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-1 text-xs text-secondary">
      <Timer size={12} />
      <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.mins}m</span>
    </div>
  );
};

export const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents = activeCategory === "All"
    ? upcomingEvents
    : upcomingEvents.filter(e => e.category === activeCategory);

  return (
    <section id="events" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text inline-block">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for exciting events that inspire learning, creativity, and community building.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground glow-violet"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_hsl(263,70%,55%,0.15)]"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/80 backdrop-blur-sm text-primary-foreground">
                    {event.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <Countdown targetDate={event.date} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{event.description}</p>

                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Calendar size={14} className="text-primary" /><span>{event.date}</span></div>
                  <div className="flex items-center gap-2"><Clock size={14} className="text-primary" /><span>{event.time}</span></div>
                  <div className="flex items-center gap-2"><MapPin size={14} className="text-primary" /><span>{event.location}</span></div>
                  <div className="flex items-center gap-2"><Users size={14} className="text-secondary" /><span>{event.seats} seats left</span></div>
                </div>

                <button
                  onClick={() => { setSelectedEvent(event.title); setIsModalOpen(true); }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:scale-[1.02] transition-all duration-300 hover:shadow-lg"
                >
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <EventRegistrationModal
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setSelectedEvent(""); }}
        eventTitle={selectedEvent}
      />
    </section>
  );
};

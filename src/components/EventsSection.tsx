
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const upcomingEvents = [
  {
    title: "Tech Symposium 2025",
    date: "March 15, 2025",
    time: "10:00 AM",
    location: "Main Auditorium",
    attendees: "500+",
    description: "Annual technical symposium featuring industry experts and innovative projects.",
    category: "Technical"
  },
  {
    title: "Cultural Fest",
    date: "March 22, 2025", 
    time: "6:00 PM",
    location: "Open Ground",
    attendees: "1000+",
    description: "Celebrate diversity through dance, music, and cultural performances.",
    category: "Cultural"
  },
  {
    title: "Hackathon 2025",
    date: "April 5, 2025",
    time: "9:00 AM",
    location: "Computer Lab",
    attendees: "200+",
    description: "48-hour coding marathon to solve real-world problems.",
    category: "Competition"
  }
];

export const EventsSection = () => {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Upcoming Events</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for exciting events that inspire learning, creativity, and community building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  {event.category}
                </span>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              
              <h4 className="text-2xl font-bold mb-4 text-gray-900">{event.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar size={18} className="mr-3 text-blue-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock size={18} className="mr-3 text-blue-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-3 text-blue-500" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users size={18} className="mr-3 text-blue-500" />
                  <span>{event.attendees} Expected</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                Register Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-200 transition-colors duration-300 font-semibold">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

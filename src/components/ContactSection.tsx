
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "pmecbam@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 1234567890" },
    { icon: MapPin, label: "Address", value: "Berhampur, Odisha, India" },
  ];

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text inline-block">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Have questions or want to get involved? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h3>
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                  <info.icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{info.label}</p>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: "name", label: "Your Name", type: "text" },
                { id: "email", label: "Your Email", type: "email" },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-semibold text-foreground/80 mb-2">{field.label}</label>
                  <input
                    type={field.type} id={field.id} name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                    required
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground/80 mb-2">Your Message</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder:text-muted-foreground/50"
                  required />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

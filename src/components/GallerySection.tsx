
import { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop", alt: "Tech Event", title: "Annual Tech Symposium" },
  { src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop", alt: "Coding Workshop", title: "Coding Workshop" },
  { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop", alt: "Presentation", title: "Project Presentations" },
  { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop", alt: "Innovation Lab", title: "Innovation Lab" },
  { src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop", alt: "Hackathon", title: "48-Hour Hackathon" },
  { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop", alt: "Collaboration", title: "Team Collaboration" }
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text inline-block">Event Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of innovation, celebration, and community spirit at PMEC.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer glass"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4"><h4 className="text-foreground font-semibold text-lg">{image.title}</h4></div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl">
              <button className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors" onClick={() => setSelectedImage(null)}><X size={32} /></button>
              <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-[80vh] object-contain rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4 rounded-b-lg">
                <h4 className="text-foreground font-semibold text-xl">{selectedImage.title}</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

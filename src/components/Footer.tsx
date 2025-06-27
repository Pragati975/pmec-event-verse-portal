
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <span className="text-xl font-bold">PMEC Eventverse</span>
          </div>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Parala Maharaja Engineering College - Fostering innovation, creativity, and excellence in engineering education.
          </p>
          
          <div className="flex items-center justify-center space-x-1 text-gray-400">
            <span>&copy; 2025 Parala Maharaja Engineering College. Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>for students.</span>
          </div>
          
          <div className="pt-4 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

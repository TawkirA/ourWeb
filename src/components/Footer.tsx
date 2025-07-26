import React from 'react';
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-lg">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">FutureInnova</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Transforming businesses through innovative technology solutions and digital excellence.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 cursor-pointer transform hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-slate-300">
              {['Website Development', 'CRM Solutions', 'Mobile App Development', 'Digital Marketing', 'Digital Transformation', 'Business Marketing'].map((service) => (
                <li key={service} className="hover:text-white transition-colors duration-300 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              {['About Us', 'Our Team', 'Portfolio', 'Blog', 'Careers', 'Privacy Policy'].map((link) => (
                <li key={link} className="hover:text-white transition-colors duration-300 cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@futureinnovva.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>123 Innovation St, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 FutureInnova. All rights reserved. Powered by innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
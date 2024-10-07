import React from 'react';
import { Mail, Share2, Instagram, Phone } from 'lucide-react';

const ContactUs: React.FC = () => (
  <section className="bg-black bg-opacity-50 rounded-lg p-6">
    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <p className="flex items-center">
          <Mail className="mr-2" /> Email: marianmusicclub@gmail.com
        </p>
        <p className="flex items-center">
          <Instagram className="mr-2" /> 
          <a href="https://www.instagram.com/marianmusicians/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition-colors">
            Follow us on Instagram
          </a>
        </p>
        <p className="flex items-center">
          <Share2 className="mr-2" /> Find us on other social media!
        </p>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="https://chat.whatsapp.com/your-group-invite-link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
        >
          <Phone className="w-5 h-5" />
          <span>Join our WhatsApp Group</span>
        </a>
      </div>
    </div>
  </section>
);

export default ContactUs;
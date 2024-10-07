import React, { useState } from 'react';
import { Calendar, Globe, Clock, Info } from 'lucide-react';
import RhythmRevelationModal from './RhythmRevelationModal';

const OngoingEvents: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-black bg-opacity-50 rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-4">Ongoing Events</h2>
      <div 
        className="bg-gray-800 rounded-lg overflow-hidden group relative cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Rhythm Revelation"
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-2 bg-white rounded-full animate-pulse`}
                style={{
                  height: `${i * 8}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
          <p className="text-white font-semibold flex items-center">
            <Info className="mr-2" /> Click here for more info
          </p>
        </div>
        <div className="p-4 relative z-10">
          <h3 className="text-2xl font-bold mb-2">Rhythm Revelation</h3>
          <p className="flex items-center mb-1">
            <Calendar className="mr-2" /> Date: September 15, 2024
          </p>
          <p className="flex items-center mb-1">
            <Clock className="mr-2" /> Time: 7:00 PM
          </p>
          <p className="flex items-center">
            <Globe className="mr-2" /> Location: Online
          </p>
        </div>
      </div>
      <RhythmRevelationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default OngoingEvents;
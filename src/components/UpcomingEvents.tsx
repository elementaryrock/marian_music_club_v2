import React from 'react';
import { Calendar, Award, Users } from 'lucide-react';

const UpcomingEvents: React.FC = () => (
  <section className="bg-black bg-opacity-50 rounded-lg p-6">
    <h2 className="text-3xl font-bold mb-4 flex items-center">
      <Calendar className="mr-2" /> Upcoming Events
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-bold mb-2 flex items-center text-white">
          <Award className="mr-2" /> Logo Competition
        </h3>
        <p className="text-white">Details to be announced soon.</p>
      </div>
      <div className="bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-bold mb-2 flex items-center text-white">
          <Users className="mr-2" /> Execom Member Selection
        </h3>
        <p className="text-white">Details to be announced soon.</p>
      </div>
    </div>
  </section>
);

export default UpcomingEvents;
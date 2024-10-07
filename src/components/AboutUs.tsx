import React from 'react';
import { Mic2, PartyPopper, Heart, Music } from 'lucide-react';

const AboutUs: React.FC = () => (
  <section className="bg-black bg-opacity-50 rounded-lg p-6">
    <h2 className="text-3xl font-bold mb-4 flex items-center">
      <Music className="mr-2" /> About Us
    </h2>
    <p className="text-lg mb-4">
      We are Marian College's premier music club, dedicated to fostering a love of music and providing opportunities for students to explore their musical talents. We offer a variety of activities, including:
    </p>
    <ul className="space-y-2">
      <li className="flex items-center">
        <Mic2 className="mr-2" /> Rehearsals
      </li>
      <li className="flex items-center">
        <PartyPopper className="mr-2" /> Performances
      </li>
      <li className="flex items-center">
        <Heart className="mr-2" /> Social events
      </li>
    </ul>
    <p className="mt-4 text-lg">
      Join us to connect with fellow music lovers and enhance your musical skills!
    </p>
  </section>
);

export default AboutUs;
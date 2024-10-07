import React from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <img src="/music-club-logo.png" alt="Music Club Logo" className="w-24 h-24" />
    <span className="text-3xl font-bold font-fancy">Marian Music Club</span>
  </div>
);

export default Logo;
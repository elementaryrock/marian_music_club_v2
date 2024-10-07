import React from 'react';
import { X, Calendar, Clock, Globe, Upload, ExternalLink, AlertTriangle } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RhythmRevelationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-8 max-w-2xl w-full mx-4 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        <h2 className="text-3xl font-bold mb-4 text-purple-400">Rhythm Revelation</h2>
        <div className="space-y-4 text-gray-300">
          <p className="flex items-center">
            <Calendar className="mr-2 text-pink-500" /> Date: September 15, 2024
          </p>
          <p className="flex items-center">
            <Clock className="mr-2 text-pink-500" /> Time: 7:00 PM
          </p>
          <p className="flex items-center">
            <Globe className="mr-2 text-pink-500" /> Location: Online
          </p>
          <div className="border-t border-gray-700 my-4"></div>
          <h3 className="text-xl font-semibold mb-2 text-purple-400">Event Details</h3>
          <p>
            Rhythm Revelation is an exciting online event where participants can showcase their musical talents by uploading recorded songs. Here's how to participate:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Record your best performance of a song (cover or original)</li>
            <li>Ensure good audio quality for your recording</li>
            <li>Prepare your recording in MP3 or WAV format</li>
            <li>Fill out the Google Form with your details and upload your recording</li>
          </ul>
          <div className="mt-6 flex items-center space-x-4">
            <a
              href="https://forms.gle/KpozT2hLAs6LW9Zq5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              <Upload className="mr-2" /> Submit Your Recording
              <ExternalLink className="ml-2" size={16} />
            </a>
            <p className="text-yellow-400 flex items-center">
              <AlertTriangle className="mr-2" /> Upload deadline has passed
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Note: Submissions will be reviewed by our panel, and selected performances will be featured in our upcoming online showcase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RhythmRevelationModal;
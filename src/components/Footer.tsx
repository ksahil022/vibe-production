import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400">© 2025 Vibe Production</div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            {/* <a
              href=""
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a> */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

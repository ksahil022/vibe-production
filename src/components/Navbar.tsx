import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div
              className="cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="text-white text-2xl font-bold tracking-wider transition-all duration-300">
                {isHovered ? "vibe production" : "vp"}
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-gray-300 hover:text-white px-3 py-2 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white px-3 py-2 transition-colors"
              >
                About
              </a>
              <a
                href="#events"
                className="text-gray-300 hover:text-white px-3 py-2 transition-colors"
              >
                Events
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isExpanded ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isExpanded ? "block" : "hidden"
        } md:hidden bg-black/90 backdrop-blur-sm`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#home"
            className="text-gray-300 hover:text-white block px-3 py-2 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white block px-3 py-2 transition-colors"
          >
            About
          </a>
          <a
            href="#events"
            className="text-gray-300 hover:text-white block px-3 py-2 transition-colors"
          >
            Events
          </a>
        </div>
      </div>
    </nav>
  );
}

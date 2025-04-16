import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@vibeproduction.club";
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400">
            Have a question or want to work together?
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl hover:bg-zinc-800/80 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="bg-black p-4 rounded-xl">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      Email
                    </h3>
                    <p
                      className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                      onClick={handleEmailClick}
                    >
                      info@vibeproduction.club
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="bg-black p-4 rounded-xl">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-400">+91 8797043307</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="bg-black p-4 rounded-xl">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      Location
                    </h3>
                    <p className="text-gray-400">Bhubaneswar</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-end">
                <button
                  onClick={handleEmailClick}
                  className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-black hover:text-white border-2 border-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Send Us a Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

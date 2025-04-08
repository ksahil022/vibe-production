import React from 'react';

const events = [
  { date: '15 MAR', name: 'Electronic Odyssey', location: 'Quantum Arena' },
  { date: '22 MAR', name: 'Bass Revolution', location: 'Echo Chamber' },
  { date: '05 APR', name: 'Synthwave Night', location: 'Neon Hall' },
  { date: '19 APR', name: 'Digital Dreams', location: 'Pulse Stadium' },
];

export default function Events() {
  return (
    <section id="events" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-black/50 p-6 rounded-lg hover:bg-black/70 transition-colors cursor-pointer"
            >
              <div className="w-20 h-20 flex-shrink-0 bg-white text-black font-bold flex flex-col items-center justify-center rounded">
                <span className="text-sm">
                  {event.date.split(' ')[1]}
                </span>
                <span className="text-xl">
                  {event.date.split(' ')[0]}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{event.name}</h3>
                <p className="text-gray-400">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
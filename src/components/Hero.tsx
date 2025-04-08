import { useState, useEffect } from "react";

export default function Hero() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Set up animation interval
    const interval = setInterval(() => {
      setIsAnimating(true);
      // Reset animation after it completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
    }, 4000);

    // Start animation immediately
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative text-center text-white space-y-6 px-4">
        <h1 className="text-6xl md:text-8xl font-bold tracking-wider">
          <span className="block">Vibe</span>
          <span className="block mt-2">Production</span>
        </h1>
        <div className="space-y-2">
          <p className="text-xl md:text-2xl text-gray-200">
            Creating Unforgettable Moments
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            Where Music Meets Innovation
          </p>
        </div>
        <button
          className={`px-8 py-3 bg-white text-black font-medium rounded-full transition-all duration-500 hover:bg-gray-200 ${
            isAnimating ? "animate-flicker" : ""
          }`}
        >
          Coming Soon
        </button>
      </div>
    </section>
  );
}

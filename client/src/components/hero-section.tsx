import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className={`text-center space-y-12 ${loaded ? 'page-load' : 'opacity-0'}`}>
        <div className="relative">
          <h1 className={`text-7xl md:text-9xl lg:text-[12rem] font-black gradient-text transition-all duration-1000 hover:scale-110 hover:rotate-1 ${loaded ? 'title-glow' : ''} relative z-10`}>
            about me
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl opacity-30 animate-pulse pointer-events-none"></div>
        </div>
        <div className="flex justify-center items-baseline space-x-3 mt-8">
          <p className="text-2xl md:text-3xl text-gray-200 font-light lowercase">
            powertools comeback?
          </p>
          <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(255,215,0,0.6)]"></div>
          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(147,51,234,0.6)]" style={{animationDelay: '0.5s'}}></div>
          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(120,219,226,0.6)]" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
}

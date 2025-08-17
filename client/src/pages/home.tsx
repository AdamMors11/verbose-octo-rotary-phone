import HeroSection from "@/components/hero-section";
import SocialGrid from "@/components/social-grid";
import LifeTimer from "@/components/life-timer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Multiple galaxy backdrops */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-radial from-purple-900/20 via-blue-900/10 to-transparent rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-cyan-900/15 via-purple-900/8 to-transparent rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-gradient-radial from-pink-900/12 via-orange-900/6 to-transparent rounded-full blur-3xl opacity-25 animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Nebula clouds */}
        <div className="absolute top-10 right-10 w-72 h-48 bg-gradient-to-br from-purple-600/5 via-pink-600/3 to-transparent blur-2xl opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-56 h-72 bg-gradient-to-tr from-blue-600/4 via-cyan-600/2 to-transparent blur-2xl opacity-50 animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* More stars with variety */}
        {[...Array(400)].map((_, i) => {
          const size = Math.random() * 4 + 0.5;
          const colorRand = Math.random();
          let bgColor = 'bg-white';
          let boxShadow = '';
          
          if (colorRand > 0.85) {
            bgColor = 'bg-yellow-200';
            boxShadow = '0 0 8px rgba(255, 255, 0, 0.4)';
          } else if (colorRand > 0.7) {
            bgColor = 'bg-blue-200';
            boxShadow = '0 0 6px rgba(0, 150, 255, 0.3)';
          } else if (colorRand > 0.55) {
            bgColor = 'bg-purple-200';
            boxShadow = '0 0 6px rgba(147, 51, 234, 0.3)';
          }
          
          return (
            <div
              key={i}
              className={`absolute rounded-full ${bgColor} animate-pulse`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: Math.random() * 0.9 + 0.1,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 5 + 1}s`,
                boxShadow: boxShadow
              }}
            />
          );
        })}
        
        {/* Solar System - top right corner */}
        <div className="absolute top-8 right-8 w-48 h-48">
          {/* Orbital paths */}
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-20 h-20 border border-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-28 h-28 border border-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-36 h-36 border border-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Sun */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(255,165,0,0.8)] animate-pulse"></div>
          
          {/* Mercury */}
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-gray-400 rounded-full mercury-orbit shadow-[0_0_6px_rgba(156,163,175,0.6)]"></div>
          
          {/* Venus */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-300 rounded-full venus-orbit shadow-[0_0_8px_rgba(255,255,0,0.7)]"></div>
          
          {/* Earth */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-br from-blue-500 to-green-500 rounded-full earth-orbit shadow-[0_0_8px_rgba(0,150,255,0.7)]"></div>
          
          {/* Mars */}
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-red-500 rounded-full mars-orbit shadow-[0_0_6px_rgba(239,68,68,0.7)]"></div>
          
          {/* Jupiter */}
          <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 bg-gradient-to-br from-orange-400 to-yellow-600 rounded-full jupiter-orbit shadow-[0_0_10px_rgba(255,165,0,0.6)]"></div>
          
          {/* Saturn */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full saturn-orbit shadow-[0_0_8px_rgba(255,200,100,0.6)]">
            <div className="absolute top-1/2 left-1/2 w-3 h-3 border border-yellow-300/50 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-3.5 h-3.5 border border-yellow-200/30 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
        
        {/* Other distant planets */}
        <div className="absolute bottom-24 right-12 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-60 blur-sm orbit-medium shadow-[0_0_60px_rgba(255,165,0,0.4)]"></div>
        <div className="absolute top-1/3 right-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-50 blur-sm orbit-fast shadow-[0_0_50px_rgba(0,255,255,0.4)]"></div>
        <div className="absolute bottom-16 left-24 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-55 blur-sm orbit-medium shadow-[0_0_40px_rgba(255,20,147,0.4)]"></div>
        
        {/* Moving asteroids and comets */}
        <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-gray-400 rounded-full opacity-60 drift-left shadow-[0_0_15px_rgba(156,163,175,0.3)]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-gray-500 rounded-full opacity-50 drift-right shadow-[0_0_12px_rgba(107,114,128,0.3)]"></div>
        <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-gray-300 rounded-full opacity-70 drift-up shadow-[0_0_10px_rgba(209,213,219,0.3)]"></div>
        
        {/* Realistic shooting stars */}
        <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-white rounded-full shooting-star-realistic shadow-[0_0_8px_rgba(255,255,255,0.9)]" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-1/6 left-1/6 w-1 h-1 bg-cyan-300 rounded-full shooting-star-realistic-fast shadow-[0_0_6px_rgba(0,255,255,0.8)]" style={{animationDelay: '8s'}}></div>
        <div className="absolute top-1/2 left-1/12 w-2 h-2 bg-yellow-300 rounded-full shooting-star-realistic-slow shadow-[0_0_10px_rgba(255,255,0,0.9)]" style={{animationDelay: '15s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-300 rounded-full shooting-star-realistic-diagonal shadow-[0_0_6px_rgba(147,51,234,0.8)]" style={{animationDelay: '22s'}}></div>
        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-pink-300 rounded-full shooting-star-realistic shadow-[0_0_8px_rgba(255,105,180,0.8)]" style={{animationDelay: '30s'}}></div>
        
        {/* Cosmic dust */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/5 to-transparent opacity-30 animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-blue-900/3 to-transparent opacity-20 animate-pulse" style={{animationDuration: '12s', animationDelay: '4s'}}></div>
      </div>
      
      {/* Email contact in top left */}
      <div className="fixed top-8 left-8 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-50">
        <p className="text-gray-300 text-sm mb-2">email me, i read all of them</p>
        <a 
          href="mailto:classical@classical.click" 
          className="text-cyan-400 hover:text-cyan-300 text-sm font-mono transition-colors duration-300"
        >
          classical@classical.click
        </a>
      </div>
      
      <HeroSection />
      <SocialGrid />
      <LifeTimer />
    </div>
  );
}

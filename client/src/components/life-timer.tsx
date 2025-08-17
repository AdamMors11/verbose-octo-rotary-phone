import { useState, useEffect } from 'react';

export default function LifeTimer() {
  const [timeAlive, setTimeAlive] = useState('');

  useEffect(() => {
    const birthDate = new Date('2006-12-11T00:00:00');
    
    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - birthDate.getTime();
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeAlive(`${days.toLocaleString()} days, ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-w-sm">
      <div className="text-center space-y-2">
        <p className="text-gray-300 text-sm font-medium">
          days i've been on this earth
        </p>
        <div className="text-white font-mono text-lg font-bold bg-gradient-to-r from-yellow-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          {timeAlive}
        </div>
      </div>
    </div>
  );
}
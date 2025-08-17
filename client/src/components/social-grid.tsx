export default function SocialGrid() {
  const socialPlatforms = [
    {
      name: "TikTok",
      description: "Quick videos & viral content",
      icon: "fab fa-tiktok",
      url: "https://tiktok.com/@classical",
      buttonText: "Follow",
      gradient: "from-pink-500 to-rose-500"
    },

    {
      name: "Discord",
      description: "Chat & hang out",
      icon: "fab fa-discord",
      url: "https://discord.gg/classical",
      buttonText: "Join",
      gradient: "bg-indigo-600"
    },
    {
      name: "X",
      description: "Random thoughts & updates",
      icon: "fab fa-x-twitter",
      url: "https://x.com/classical",
      buttonText: "Follow",
      gradient: "bg-black border-gray-600"
    },
    {
      name: "YouTube",
      description: "Longer form content",
      icon: "fab fa-youtube",
      url: "https://youtube.com/@classical",
      buttonText: "Subscribe",
      gradient: "bg-red-600"
    },


  ];

  return (
    <section id="socials" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text text-center mb-24 transition-all duration-500 hover:scale-110 leading-tight">
          my socials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {socialPlatforms.map((platform, index) => (
            <div 
              key={platform.name} 
              className="social-card rounded-[2rem] p-16 text-center transform transition-all duration-500 relative"
              style={{
                animationDelay: `${index * 0.2}s`,
                perspective: '1000px'
              }}
            >
              <div className={`w-28 h-28 mx-auto mb-10 flex items-center justify-center rounded-full bg-gradient-to-r ${platform.gradient} transition-all duration-500 shadow-[0_0_50px_rgba(147,51,234,0.3)] backdrop-blur-sm border border-white/20 hover:rotate-[360deg] hover:shadow-[0_0_80px_rgba(147,51,234,0.5)] pulse-glow`}>
                <i className={`${platform.icon} text-5xl text-white drop-shadow-2xl`}></i>
              </div>
              <h3 className="text-4xl font-bold text-white mb-10 lowercase tracking-wide">{platform.name}</h3>
              <a 
                href={platform.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-block bg-gradient-to-r ${platform.gradient} text-white px-10 py-5 rounded-full font-semibold text-xl transition-all duration-400 lowercase border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_16px_64px_rgba(147,51,234,0.4)] hover:-translate-y-2`}
              >
                {platform.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

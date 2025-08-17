export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text-cool transition-all duration-500 hover:scale-110">
          About Me
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed">
          <p className="hidden-element">
            So yeah, I'm Adam, but everyone online knows me as <span className="text-white font-semibold">Classical</span>. 
            I'm just a normal dude who got into creating content and somehow people started following along.
          </p>
          
          <p className="hidden-element">
            I make videos, post random thoughts, and basically just share whatever I find interesting. 
            Sometimes it's funny, sometimes it's deep, mostly it's just me being myself.
          </p>
          
          <p className="hidden-element">
            When I'm not online, you'll probably find me playing games, trying new food spots, 
            or hanging out with friends. Pretty standard stuff, but I like to think I put my own spin on it.
          </p>
          
          <p className="hidden-element text-yellow-400 font-medium">
            Hit me up on any of the platforms below - I'm always down to chat with cool people!
          </p>
        </div>
      </div>
    </section>
  );
}

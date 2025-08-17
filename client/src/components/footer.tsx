export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 text-sm">
              <span className="font-bold gradient-text">Classical</span> • just keeping it real since forever
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://discord.gg/classical" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <i className="fab fa-discord text-xl"></i>
            </a>
            <a 
              href="https://instagram.com/classical" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a 
              href="https://tiktok.com/@classical" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <i className="fab fa-tiktok text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

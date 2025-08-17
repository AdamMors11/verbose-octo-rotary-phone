export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center space-x-8">
          <a 
            href="#home" 
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 font-medium"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 font-medium"
          >
            About
          </a>
          <a 
            href="#socials" 
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 font-medium"
          >
            Socials
          </a>
        </div>
      </div>
    </nav>
  );
}

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed w-full z-50 top-3 px-4">
      <nav className="flex gap-0.5 md:gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur max-w-full overflow-x-auto sm:overflow-visible no-scrollbar">
        <a href="#" className="nav-item text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2">
          Home
        </a>
        <a href="#experience" className="nav-item text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2">
          <span className="inline md:hidden">Exp</span>
          <span className="hidden md:inline">Experience</span>
        </a>
        <a href="#projects" className="nav-item text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2">
          Projects
        </a>
        <a href="#about" className="nav-item text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2">
          About
        </a>
        <a
          href="#contact"
          className="nav-item text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 bg-white text-gray-900 hover:bg-white/90 font-medium rounded-full"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
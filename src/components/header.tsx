import data from "@/data.json";

const Header: React.FC = () => {
  return (
    <header className="sticky top-5 m-4 mx-auto px-4 py-1.5 rounded-full bg-neutral-800 border border-neutral-700/50 text-sm z-100">
      <nav className="w-fit">
        <ul className="text-neutral-400 flex gap-x-4">
          <li>
            <a href="#start" className="hoverText">
              Inicio
            </a>
          </li>
          <li>
            <a href="#projects" className="hoverText">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#about" className="hoverText">
              Sobre mi
            </a>
          </li>
          <li>
            <a href={`mailto:${data.correo}`} className="hoverText">
              Contactame
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

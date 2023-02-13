import { Link } from "react-router-dom";
const MainMenu = () => {
  return (
    <div>
      <nav>
        <ul className="flex items-center gap-x-8">
          <li>
            <Link to="/" className="text-dark-600 font-medium">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/productos" className="text-dark-600 font-medium">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button className="primary-btn">
                Inicia sesión
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;

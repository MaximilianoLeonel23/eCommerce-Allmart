import { Link } from "react-router-dom";
import { deleteToken, token } from "./../../../helpers/auth";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const nav = useNavigate();
  const handleSession = () => {
    deleteToken();
    nav("/");
  };

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
          {!token() ? (
            <li>
              <Link to="/login">
                <button className="primary-btn">Inicia sesión</button>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/perfil" className="text-dark-600 font-medium">
                  Perfil
                </Link>
              </li>
              <li>
                <p
                  onClick={handleSession}
                  className="text-dark-600 font-medium cursor-pointer"
                >
                  Cerrar sesión
                </p>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;

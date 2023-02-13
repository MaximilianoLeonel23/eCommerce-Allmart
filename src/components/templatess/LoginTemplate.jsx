import Logo from "../molecules/header/Logo";
import { Link } from "react-router-dom";

const LoginTemplate = ({ children }) => {
  return (
    <div className="mt-16">
      <div className="w-1/4 flex flex-col mx-auto border py-28 px-8 gap-y-6 relative shadow">
        <div className="absolute top-4 left-6">
          <Logo />
        </div>
        <div>
          <h2 className="font-bold text-lg text-dark-600 text-center">
            Inicia sesión
          </h2>
        </div>
        {children}
        
      </div>
    </div>
  );
};

export default LoginTemplate;

import axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";
import Logo from "../molecules/header/Logo";
import { Link } from "react-router-dom";
import Input from "../molecules/header/Input";
import { useState } from "react";
import LoginTemplate from "../templatess/LoginTemplate";

const Login = () => {
  const nav = useNavigate();

  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError();

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    axios
      .post(`${API_URL}/auth/login`, data)
      .then((data) => {
        setToken(data.data.token);
        nav("/");
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <LoginTemplate>
      <form onSubmit={handleSubmit}>
        <div className=" pb-6">
          <Input
            type={"text"}
            name={"username"}
            placeholder={"Usuario"}
            required
          />
        </div>
        <div className=" pb-6">
          <Input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
          />
        </div>
        <button type="submit" className="primary-btn mb-4">
          Ingresar
        </button>
        <div>
          <Link
            to="/"
            className="text-sm text-dark-500 hover:underline hover:text-primary-500 transition"
          >
            ¿No tienes una cuenta? Registrate
          </Link>
        </div>
        {error && (
          <p className="text-sm text-primary-500 bg-primary-200 py-1 px-4">
            Usuario o contraseña incorrecto.
          </p>
        )}
      </form>
    </LoginTemplate>
  );
};

export default Login;

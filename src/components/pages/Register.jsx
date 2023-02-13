import LoginTemplate from "../templatess/LoginTemplate";
import { API_URL } from "../../constants/env";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Input from "../molecules/header/Input";
import axios from "axios";
const Register = () => {
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    axios
      .post(`${API_URL}/users/add`, data)
      .then((data) => {
        console.log(data)
        nav("/login");
      })
      .catch((err) => {
        
      });
  };

  return (
    <LoginTemplate>
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className="font-bold text-lg text-dark-600 text-center pb-6">
            Crea tu cuenta
          </h2>
        </div>

        <Input type={"text"} name={"firstname"} placeholder={"Nombre"} />
        <Input type={"text"} name={"lastname"} placeholder={"Apellido"} />
        <Input type={"email"} name={"email"} placeholder={"Email"} />
        <Input
          type={"text"}
          name={"username"}
          placeholder={"Usuario"}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />

        <button type="submit" className="primary-btn mb-4">
          Registrate
        </button>
        <div>
          <Link
            to="/login"
            className="text-sm text-dark-500 hover:underline hover:text-primary-500 transition"
          >
            ¿Ya tienes una cuenta? Ingresa aquí
          </Link>
        </div>
      </form>
    </LoginTemplate>
  );
};

export default Register;

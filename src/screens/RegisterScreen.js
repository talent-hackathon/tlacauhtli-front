import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/botones.css";
import "../assets/styles/loginAndRegister.css";
import {isFormValid} from '../helpers/isFormValid'

const RegisterScreen = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  const { email, password, confirmPass } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // validar
    if (isFormValid(email, password, confirmPass)) {
      console.log("se registra el usuario");
    }
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Regístrate</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Correo</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              onChange={onChange}
              value={email}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              onChange={onChange}
              value={password}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="confirmPass"
              name="confirmPass"
              placeholder="Confirmar contraseña"
              onChange={onChange}
              value={confirmPass}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="button btn-primario btn-block"
              value="Registrarse"
            />
          </div>
        </form>

        <Link to={"/login"} className="enlace-cuenta">
          Ya tengo cuenta.
        </Link>
      </div>
    </div>
  );
};

export default RegisterScreen;

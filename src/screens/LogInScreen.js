import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authLogin } from "../actions/AuthActions";
import "../assets/styles/botones.css";
import "../assets/styles/loginAndRegister.css";
import {isFormValidLogIn} from '../helpers/isFormValid'


const LogInScreen = () => {

  const dispatch = useDispatch();
  const [usuario, guardarUsuario] = useState({
    email: "admin@admin.com",
    password: "123456",
  });
  const { email, password } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // validar
    if (isFormValidLogIn(email, password)) {
        console.log("inicia sesion el usuario y se manda el dispatch") 
      //pasarlo al action dispatch
      dispatch(authLogin(usuario))
    };
  }
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Inciar Sesion</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Correo: </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Tu Correo Electrónico"
              onChange={onChange}
              value={email}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Contraseña :</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Contraseña"
              onChange={onChange}
              value={password}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="button btn-primario btn-block"
              value="Iniciar Sesion"
            />
          </div>
        </form>

        <Link to={"/register"} className="enlace-cuenta">
          No tengo cuenta.
        </Link>
      </div>
    </div>
  );
};

export default LogInScreen;

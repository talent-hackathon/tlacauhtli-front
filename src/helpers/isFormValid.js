import validator from "validator";

export const isFormValid = (email, password, confirmPass) => {
    if (!validator.isEmail(email)) {
      console.log("error email");
      return false;
    } else if (password !== confirmPass || password.length < 5) {
      console.log("El Pasword debe de coincidir y tener mas de 6 caracteres");
      return false;
    }
    return true;
  };

  export const isFormValidLogIn= (email, password) => {
    if (!validator.isEmail(email)) {
      console.log("error email");
      return false;
    } else if ( password.length < 5) {
      console.log("el password es incorrecto");
      return false;
    }
    return true;
  };

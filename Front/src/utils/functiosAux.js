export const getCartItemsCount = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    const cart = JSON.parse(storedCart);
    return cart.items.length;
  }
  return 0;
};

/* Se agrega validacion de inputs de registro */

export const validateInputRegister = (input) => {
  const errors = {};
  if (input.userName.length === 0) {
    errors.n1 = "El nombre de usuario es requerido";
  }
  if (input.userName.length > 15) {
    errors.n2 = "El nombre de usuario no debe tener mas de 15 caracteres";
  }
  if (input.email.trim() === "") {
    errors.e1 = "El correo electronico es requerido";
  }
  if (!input.email.includes("@") || !input.email.includes(".com")) {
    errors.e2 = "Debe agregar un correo valido ej: example@example.com";
  }
  return errors
};

/* Se agrega validaciones de inputs de Login */

export const validateInputLogin = (input) => {
  const errors = {};
  if (input.email.trim() === "") {
    errors.e1 = "El correo electronico es requerido";
  }
  if (!input.email.includes("@") || !input.email.includes(".com")) {
    errors.e2 = "Debe agregar un correo valido ej: example@example.com";
  }
  return errors
};

export const validateInputNewPass = (input) => {
  const errors = {};
  if (input.length > 10) {
    errors.e1 = 'Máxima cantidad de caracteres excedida!';
  }
  if (input.length === 0) {
    errors.e2 = 'Este campo no puede estar vacío!';
  }
  if (input.includes(' ')) {
    errors.e3 = 'El caracter " " no está permitido!';
  }
  if (!input.includes('1' || '2' ||'3' || '4' || '5' || '6' || '7' || '8' || '9' || '0')) {
    errors.e4 = 'La contraseña debe contener un número!';
  }
  return errors;
}

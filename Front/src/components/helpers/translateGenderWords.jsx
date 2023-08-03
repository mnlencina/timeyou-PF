

export const translateGender = (gender) => {
  switch (gender) {
    case "female":
      return "mujer";
    case "male":
      return "hombre";
    default:
      return gender;
  }
};

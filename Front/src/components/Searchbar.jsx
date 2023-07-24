import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchProductSuccess, searchProductFailure } from "../redux/Actions";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

export const Searchbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    //agregado, para que la searchbar solo busque siempre que se le ponga un caracter en su  input
    if (searchTerm.trim() === "") {
      alert("Debes ingresar al menos un dato para realizar una busqueda");
      return;
    }
    try {
      const searchTerms = searchTerm.split(" ");
      dispatch(searchProductSuccess(searchTerms));
      setSearchTerm("");
      navigate("/");
    } catch (error) {
      dispatch(searchProductFailure(error.message));
    }
  };

  return (
    <FormContainer>
      <input
        type="text"
        placeholder="Buscar reloj..."
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="btn">
        <button className="icon" onClick={handleSearch}>
          <BsSearch />
        </button>
      </div>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  padding: 5px;
  display: flex;
  align-items: center;
  &:hover input {
    width: 240px;
    visibility: visible;
  }
  & input:focus {
    width: 240px;
    visibility: visible;
  }
  input {
    width: 0px;
    height: 40px;
    padding: 0 20px;
    font-size: 18px;
    color: #000;
    outline: none;
    border: 1px solid silver;
    border-radius: 30px;
    transition: all 0.5s ease-in-out;
    visibility: hidden;
  }
  .btn {
    position: absolute;
    top: 10%;
    right: 5%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: none;
    background: #111;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    button {
      border: none;
      background: none;
      font-size: 20px;
      display: flex;
    
      color: #ffff;
    }
  }
`;

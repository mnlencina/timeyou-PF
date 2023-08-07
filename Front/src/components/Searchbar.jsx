import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../redux/Actions.js";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

import { InstantSearch } from "react-instantsearch-dom";
import { searchClient } from "../settings_algolia/settingsAlgolia.js";

const SearchContainer = styled.div`
 width: 100%;
 height: 100%;
 display:flex;
 align-items: center;
 justify-content: center;
`;

const SearchInput = styled.input`
  width: 240px;
  height: 40px;
  padding: 0 20px;
  font-size: 18px;
  color: #000;
  outline: none;
  border: 1px solid silver;
  border-radius: 30px;
  transition: all 0.5s ease-in-out;
  visibility: visible;

  &:focus {
    width: 240px;
    visibility: visible;
  }
`;

const FormContainer = styled.form`
 width: 100%;
 height: 100%;
display: flex;
align-items: center;
justify-content:center;
`;

const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #111;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  &:focus {
    outline: none;
  }

  svg {
    color: #fff;
  }
`;

const ResultsContainer = styled.div`
  margin-top: 10px;
`;

export const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchClocks = useSelector((state) => state.searchClocks);

  const handleSearch = (event) => {
    setSearchTerm(event.currentTarget.value);
  };

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const searchTerms = searchTerm.split(" ");
      dispatch(searchProduct(searchTerms));
    }
  }, [searchTerm, dispatch]);

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      alert("Debes ingresar al menos un dato para realizar una búsqueda");
      return;
    }
    navigate("/home");
    setSearchTerm("");
  };

  const resetSearchTerm = () => {
    setSearchTerm("");
  };

  return (
    <SearchContainer>
      <InstantSearch searchClient={searchClient} indexName="timeyou_PF">
        <FormContainer onSubmit={onSearchSubmit}>
          <SearchInput
            type="text"
            placeholder="Buscar reloj..."
            value={searchTerm}
            onChange={handleSearch}
            onClick={resetSearchTerm}
          />
          <SearchButton type="submit">
            <BsSearch />
          </SearchButton>
        </FormContainer>
        <ResultsContainer>
          {searchTerm !== "" && searchClocks.length === 0 && (
            <div>Prueba con otra búsqueda...</div>
          )}
        </ResultsContainer>
      </InstantSearch>
    </SearchContainer>
  );
};

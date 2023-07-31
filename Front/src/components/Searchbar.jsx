import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../redux/Actions.js';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

import { InstantSearch } from 'react-instantsearch-dom';
import { searchClient } from '../settings_algolia/settingsAlgolia.js';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 130px;
`;

const SearchInput = styled.input`
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

  &:focus {
    width: 240px;
    visibility: visible;
  }
`;

const FormContainer = styled.form`
  padding: 5px;
  display: flex;
  align-items: center;

  &:hover ${SearchInput} {
    width: 240px;
    visibility: visible;
  }
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


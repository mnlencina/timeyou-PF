import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, searchProduct } from "../redux/Actions.js";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import Swal from 'sweetalert2';

import { InstantSearch } from "react-instantsearch-dom";
import { searchClient } from "../settings_algolia/settingsAlgolia.js";

const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
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
  justify-content: center;
  
  
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


export const Searchbar = ({ setShowSearch, setInputHover }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch()
  const watches = useSelector((state)=> state.Clocks)

  const selectedCategories = useSelector((state)=> state.selectedCategories)  


  const onSearchSubmit = (e) => {
    e.preventDefault();
    resetSearchTerm();

    const searchTerms = selectedCategories ? searchTerm.concat(" ", selectedCategories).split(" ") : searchTerm.split(" ")
    console.log("searchTerms", searchTerms)
    const deleteDuplicates= (new Set(searchTerms))
    console.log("deleteDuplicates", deleteDuplicates)

  
    dispatch(searchProduct(searchTerms)); // Actualiza el estado global
    
    /* if (filtered.length === 0) {
      Swal.fire({
        icon: 'error',
        color: 'black',
        text: 'No se encontraron relojes en la búsqueda.',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'custom-alert-button' // Aplica la clase personalizada al botón
        }
      });
      dispatch(getProducts());
    }
    */
  };
  const sAlert = ()=> {
    Swal.fire({
      icon: 'error',
      color: 'black',
      text: 'No se encontraron relojes en la búsqueda.',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'custom-alert-button' // Aplica la clase personalizada al botón
      }
    });
    dispatch(getProducts());
  }


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const resetSearchTerm = () => {
    setSearchTerm("");
  };

  return (
    <SearchContainer>
      {/* {!watches.length && sAlert()} */}
       <InstantSearch searchClient={searchClient} indexName="timeyou_PF">
        <FormContainer
          onSubmit={onSearchSubmit}
          onMouseEnter={() => setInputHover(true)}
          onMouseLeave={() => setInputHover(false)}
          onBlur={() => {
            setShowSearch(false);
            setInputHover(false);
          }}
        >
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
        </InstantSearch>
    </SearchContainer>
  );
};

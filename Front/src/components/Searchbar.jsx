import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct , updateSelectedCategories} from "../redux/Actions.js";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

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
  const selectedCategories = useSelector((state)=> state.selectedCategories)

  const allTerms = searchTerm.concat(" ", selectedCategories)
const uniqueCategories = new Set(allTerms.split(" "));
const allSearch = [...uniqueCategories].join(" ");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clocks = useSelector((state) => state.Clocks);

  console.log("Selected All categories", allSearch)

  const handleSearch = (event) => {
    setSearchTerm(event.currentTarget.value);
   // dispatch(updateSelectedCategories(selectedCategories))
  };
  

  useEffect(() => {

    if (allSearch.trim() !== "") {
      console.log("ALLSEARCH TRIM", allSearch.trim())
      const searchTerms = allSearch.split(" ");
      console.log("ALLSEARCH SPLIT", searchTerms)
      dispatch(searchProduct(searchTerms));
    }
  }, [allSearch, dispatch]); 

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (allSearch.trim() === "") {
      const searchTerms = allSearch.split(" ");
      dispatch(searchProduct(searchTerms));
    //  dispatch(updateSelectedCategories(allSearch))
    }
    if(searchTerm.length  === 0) {
      dispatch(updateSelectedCategories(""))
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

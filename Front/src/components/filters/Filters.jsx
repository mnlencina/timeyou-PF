import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { applyFilters, getBrands, getColor, getFunctions, getStraps, getStyles, getProducts} from "../../redux/Actions.js";
import { translateGender } from "../helpers/translateGenderWords.jsx";
import styled from 'styled-components';
import Swal from 'sweetalert2';


export const FiltersAll = ({ setPage,show }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedStraps, setSelectedStraps ] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedFunctions, setSelectedFunctions] = useState([]);


  const dispatch = useDispatch()

  const watches = useSelector((state)=> state.Clocks)

  const BRANDS = useSelector((state)=> state.BRANDS)
  const STYLES = useSelector((state)=> state.STYLES)
  const COLORS = useSelector((state)=> state.COLORS) 
  const STRAPS = useSelector((state)=> state.STRAPS) 
  const FUNCTIONS = useSelector((state)=> state.FUNCTIONS)


  const brands= BRANDS.map(item => item.name);
  const sortedBrands = brands.slice().sort((a, b) => a.localeCompare(b));
  
  const styles= STYLES.map(item => item.name);
  const sortedStyles = styles.slice().sort((a, b) => a.localeCompare(b));
  
  const straps= STRAPS.map(item => item.name);
  const sortedStraps = straps.slice().sort((a, b) => a.localeCompare(b));
  
  const colors= COLORS.map(item => item.name);
  const sortedColors = colors.slice().sort((a, b) => a.localeCompare(b));
  
  const functions= FUNCTIONS.map(item => item.name);
  const sortedFunctions = functions.slice().sort((a, b) => a.localeCompare(b));
  
  const genders= ["female", "male", "unisex"]
  const sortedGenders = genders.slice().sort((a, b) => a.localeCompare(b));


  const handleBrandChange = (brand) => {
      setSelectedBrands(selectedBrands.includes(brand) ? [] : [brand]);
    };
  
  const handleStyleChange = (style) => {
      setSelectedStyles( selectedStyles.includes(style) ? [] : [style]);
  };

  const handleStrapChange = (strap) => {
     setSelectedStraps(selectedStraps.includes(strap) ? [] : [strap]);
  };

  const handleColorChange = (color) => {
  setSelectedColors(selectedColors.includes(color) ? [] : [color]);
  };

  const handleGenderChange = (gender) => {
    setSelectedGenders(selectedGenders.includes(gender) ? [] : [gender]);
    };

  const handleFunctionChange = (func) => {
    setSelectedFunctions(selectedFunctions.includes(func) ? [] : [func]);
  };


  const handleApplyFilters = () => {
    // Filtra los relojes según las selecciones de filtros
    const filteredWatches = watches.filter((watch) => {
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(watch.brandName); 
      const styleMatch = selectedStyles.length === 0 || selectedStyles.includes(watch.styleName);
      const strapMatch = selectedStraps.length === 0 || selectedStraps.includes(watch.strapName);
      const colorMatch = selectedColors.length === 0 || selectedColors.includes(watch.colorName);
      const genderMatch = selectedGenders.length === 0 || selectedGenders.includes(watch.gender);
      const functionMatch = selectedFunctions.length === 0 || watch.Functions.some(func => selectedFunctions.includes(func.name));

      return brandMatch && styleMatch && strapMatch && colorMatch && genderMatch && functionMatch;
    });

   
    //console.log("Resultado del filtrado (filteredWatches):", filteredWatches);

    if (filteredWatches.length === 0) {
      Swal.fire({
        text: 'No se encontraron coincidencias con los filtros seleccionados.',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
      });
      dispatch(getProducts());
    }

    // Pasa las selecciones de filtros a la acción applyFilters
    setPage(1);
    dispatch(applyFilters(filteredWatches));
  };


    const handleClearFilters = () => {
      dispatch(getProducts());
      setPage(1);
      setSelectedBrands([]);
      setSelectedStyles([]);
      setSelectedStraps([]);
      setSelectedColors([]);
      setSelectedGenders([]);
      setSelectedFunctions([]); 
    };


  return (
    <FilterContainer show={show}>
       <FilterGroup>
        <h3>Marcas</h3>
        {sortedBrands.map((brand) => (
           <CheckboxLabel key={brand}>
            <CheckboxInput
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            {brand}
          </CheckboxLabel>
        ))}
      </FilterGroup>
      <FilterGroup>
        <h3>Estilos</h3>
        {sortedStyles.map((style) => (
          <CheckboxLabel key={style}>
            <CheckboxInput
              type="checkbox"
              checked={selectedStyles.includes(style)}
              onChange={() => handleStyleChange(style)}
            />
            {style}
          </CheckboxLabel>
        ))}
       </FilterGroup>
       <FilterGroup>
        <h3>Color</h3>
        {sortedColors.map((color) => (
          <CheckboxLabel key={color}>
            <CheckboxInput
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => handleColorChange(color)}
            />
            {color}
          </CheckboxLabel>
        ))}
      </FilterGroup>
      <FilterGroup>
        <h3>Malla</h3>
        {sortedStraps.map((strap) => (
          <CheckboxLabel key={strap}>
            <CheckboxInput
              type="checkbox"
              checked={selectedStraps.includes(strap)}
              onChange={() => handleStrapChange(strap)}
            />
            {strap}
          </CheckboxLabel>
        ))}
      </FilterGroup>
      <FilterGroup>
        <h3>Género</h3>
        {sortedGenders.map((gender) => (
          <CheckboxLabel key={gender}>
            <CheckboxInput
              type="checkbox"
              checked={selectedGenders.includes(gender)}
              onChange={() => handleGenderChange(gender)}
            />
            {translateGender(gender)}
          </CheckboxLabel>
        ))}
      </FilterGroup>
      <FilterGroup>
        <h3>Funciones</h3>
        {sortedFunctions.map((func) => (
          <CheckboxLabel key={func}>
            <CheckboxInput
              type="checkbox"
              checked={selectedFunctions.includes(func)}
              onChange={() => handleFunctionChange(func)}
            />
            {func}
          </CheckboxLabel>
        ))}
      </FilterGroup>
      <ButtonContainer>
      <Button onClick={handleClearFilters}>Borrar filtros</Button>
      <Button onClick={handleApplyFilters}>Aplicar filtros</Button>
      </ButtonContainer>
      </FilterContainer>
  );
};



const FilterContainer = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    flex-wrap: nowrap;
    align-items: flex-start;
    transition: 1s;
    ${(props)=>(props.show !== "true" && "position: absolute")};
    ${(props)=>(props.show !== "true" && "left: -1000px")};
    
    //width: 2px;
      //height: 1px;
      //position: absolute;
      //left: -1000px;
`;

const FilterGroup = styled.div`
    width: 20%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    transition: 1s;
    margin: 10px;
   
     
    }

`;
const ButtonContainer = styled.div`
  display: flex;
    justify-content: space-between;
    margin: 10px;
    gap: 8px;
`;

const Button = styled.button`
  padding: 0 auto;
  margin: 0 auto;
  background-color: #fff
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1em;
  


  &:hover {
    background-color: gray;
    color: #fff;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
  text-transform: capitalize;
`;

const CheckboxInput = styled.input`
margin-right: 2px;
/* Oculta el checkbox nativo */


/* Anula el estilo de fondo por defecto del navegador */
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;

/* Estilos para el casillero personalizado */
&:before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1px solid #ccc;
  background-color: white;
  margin-right: 5px;
  border-radius: 2px;
}

/* Cambia el color de fondo al tildar */
&:checked:before {
  background-color: gray; /* Cambia el color a gris */
  border-color: gray; /* Cambia el color del borde a gris */
}
`;
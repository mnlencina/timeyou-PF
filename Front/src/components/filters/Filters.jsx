import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { applyFilters, getProducts, updateSelectedCategories} from "../../redux/Actions.js";
import { translateGender } from "../helpers/translateGenderWords.jsx";
import styled from "styled-components";
import Swal from "sweetalert2";

export const FiltersAll = ({ setPage, show }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedStraps, setSelectedStraps] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedFunctions, setSelectedFunctions] = useState([]);


const filterSelections = [...selectedBrands,...selectedStyles, ...selectedStraps, ...selectedColors , ...selectedGenders, ...selectedFunctions]
const dispatch = useDispatch()

  const watches = useSelector((state) => state.Clocks);

  const BRANDS = useSelector((state) => state.BRANDS);
  const STYLES = useSelector((state) => state.STYLES);
  const COLORS = useSelector((state) => state.COLORS);
  const STRAPS = useSelector((state) => state.STRAPS);
  const FUNCTIONS = useSelector((state) => state.FUNCTIONS);

  const brands = BRANDS.map((item) => item.name);
  const sortedBrands = brands.slice().sort((a, b) => a.localeCompare(b));

  const styles = STYLES.map((item) => item.name);
  const sortedStyles = styles.slice().sort((a, b) => a.localeCompare(b));

  const straps = STRAPS.map((item) => item.name);
  const sortedStraps = straps.slice().sort((a, b) => a.localeCompare(b));

  const colors = COLORS.map((item) => item.name);
  const sortedColors = colors.slice().sort((a, b) => a.localeCompare(b));

  const functions = FUNCTIONS.map((item) => item.name);
  const sortedFunctions = functions.slice().sort((a, b) => a.localeCompare(b));

  const genders = ["female", "male", "unisex"];
  const sortedGenders = genders.slice().sort((a, b) => a.localeCompare(b));

  const handleBrandChange = (brand) => {
    setSelectedBrands(selectedBrands.includes(brand) ? [] : [brand]);
  };

  const handleStyleChange = (style) => {
    setSelectedStyles(selectedStyles.includes(style) ? [] : [style]);
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
      const brandMatch =
        selectedBrands.length === 0 || selectedBrands.includes(watch.brandName);
      const styleMatch =
        selectedStyles.length === 0 || selectedStyles.includes(watch.styleName);
      const strapMatch =
        selectedStraps.length === 0 || selectedStraps.includes(watch.strapName);
      const colorMatch =
        selectedColors.length === 0 || selectedColors.includes(watch.colorName);
      const genderMatch =
        selectedGenders.length === 0 || selectedGenders.includes(watch.gender);
      const functionMatch =
        selectedFunctions.length === 0 ||
        watch.Functions.some((func) => selectedFunctions.includes(func.name));

      return (
        brandMatch &&
        styleMatch &&
        strapMatch &&
        colorMatch &&
        genderMatch &&
        functionMatch
      );
    });

    //console.log("Resultado del filtrado (filteredWatches):", filteredWatches);

    if (filteredWatches.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "No se encontraron coincidencias con los filtros seleccionados.",
        showConfirmButton: false,
        timer: 1500
      });
      dispatch(getProducts());
    }

    // Pasa las selecciones de filtros a la acción applyFilters
    setPage(1);
    dispatch(applyFilters(filteredWatches));
    dispatch(updateSelectedCategories(filterSelections[0].split(',')))
  };
    const handleClearFilters = () => {
      dispatch(updateSelectedCategories([]))
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
        <div className="Marcas">
          <div className="title">
            <h3>Marcas</h3>
          </div>
          <ul className="content">
          
            {sortedBrands.map((brand) => (
              <li key={brand}>
                <CheckboxLabel>
                  <CheckboxInput
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  {brand}
                </CheckboxLabel>
              </li>
            ))}
            
          </ul>
        </div>
        <div className="Estilos">
          <div className="title">
            <h3>Estilos</h3>
          </div>
          <ul className="content">
            {sortedStyles.map((style) => (
              <li key={style}>
                <CheckboxLabel>
                  <CheckboxInput
                    type="checkbox"
                    checked={selectedStyles.includes(style)}
                    onChange={() => handleStyleChange(style)}
                  />
                  {style}
                </CheckboxLabel>
              </li>
            ))}
          </ul>
        </div>
        <div className="Color">
          <div className="title">
            <h3>Color</h3>
          </div>
          <div className="content">
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
          </div>
        </div>
        <div className="Malla">
          <div className="title">
            <h3>Malla</h3>
          </div>
          <ul className="content">
            {sortedStraps.map((strap) => (
              <li key={strap}>
                <CheckboxLabel>
                  <CheckboxInput
                    type="checkbox"
                    checked={selectedStraps.includes(strap)}
                    onChange={() => handleStrapChange(strap)}
                  />
                  {strap}
                </CheckboxLabel>
              </li>
            ))}
          </ul>
        </div>
        <div className="generos">
          <div className="title">
            <h3>Género</h3>
          </div>
          <div className="content">
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
          </div>
        </div>
        <div className="Funciones">
          <div className="title">
            <h3>Funciones</h3>
          </div>
          <ul className="content">
            {sortedFunctions.slice(0, 10).map((func) => (
              <li key={func}>
                <CheckboxLabel>
                  <CheckboxInput
                    type="checkbox"
                    checked={selectedFunctions.includes(func)}
                    onChange={() => handleFunctionChange(func)}
                  />
                  {func}
                </CheckboxLabel>
              </li>
            ))}
          </ul>
        </div>
        <ButtonContainer>
          <Button onClick={handleClearFilters}>Borrar filtros</Button>
          <Button onClick={handleApplyFilters}>Aplicar filtros</Button>
        </ButtonContainer>
      </FilterContainer>
    );
  };
  
  const FilterContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(7, 1fr);
    overflow: hidden;
    position: relative;
    transition: 0.5s ease-in-out;
    .generos {
      border-bottom: #fff;
      width: 100%;
      height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #fff;
      .title {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        h3 {
          color: #fff;
          text-align: uppercase;
          text-decoration: underline;
        }
      }
      .content {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
    }
    .Marcas {
      width: 100%;
      height: 230px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #fff;
      .title {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        h3 {
          color: #fff;
          text-align: uppercase;
          text-decoration: underline;
        }
      }
      .content {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: repeat(4, 1fr);
        align-content: start;
        justify-items: center;
        list-style: none;
        color: #fff;
      }
    }
    .Estilos {
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #fff;
      .title {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        h3 {
          color: #fff;
          text-align: uppercase;
          text-decoration: underline;
        }
      }
      .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);
        align-items: center;
        justify-items: center;
        list-style: none;
        color: #fff;
      }
    }
    .Color {
      width: 100%;
      height: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #fff;
      .title {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        h3 {
          color: #fff;
          text-align: uppercase;
          text-decoration: underline;
        }
      }
      .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(8, 1fr);
        align-items: center;
        justify-items: center;
        list-style: none;
        color: #fff;
      }
    }
    .Funciones {
      width: 100%;
      height: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #fff;
      .title {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        h3 {
          color: #fff;
          text-align: uppercase;
          text-decoration: underline;
        }
      }
      .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);
        align-items: center;
        justify-items: center;
        list-style: none;
        color: #fff;
      }
    }
    .Malla {
      width: 100%;
      height: 320px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #fff;
      .title {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        h3 {
          color: #fff;
          text-align: uppercase;
          text-decoration: underline;
        }
      }
      .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);
        align-items: center;
        justify-items: center;
        list-style: none;
        color: #fff;
      }
    }
  `;
  
  const ButtonContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  `;
  
  const Button = styled.button` 
    width: 90px;
    height: 50px;
    background-color: #d5cece;
    color: #161515;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 1em;
    z-index: 9000 ;
    &:hover {
      background-color: gray;
      color: #fff;
    }
  `;
  
  const CheckboxLabel = styled.label`
    width: 14px;
    height: 14px;
    display: flex;
    align-items: flex-start;
    line-height: 16px;
    width: 90px;
  `;
  
  const CheckboxInput = styled.input`
    /* Oculta el checkbox nativo */
  
    /* Anula el estilo de fondo por defecto del navegador */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  
    /* Estilos para el casillero personalizado */
    &:before {
      content: "";
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
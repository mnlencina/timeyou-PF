import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { applyFilters, getProducts, updateSelectedCategories} from "../../redux/Actions.js";
import { translateGender } from "../helpers/translateGenderWords.jsx";
import { Container } from "./styled"

const Sidebar =({ setPage, show })=>{
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

    return(
        <Container>            
            <nav className="main-menu">
            <div>
            
            <ul>
                    <span className="" >Marca</span>
                    {sortedBrands.map((brand) =>(
                    <li key={brand}>
                        <a href={brand}>
                            <i className="fa fa-home fa-2x"></i>
                            <label 
                                className="nav-text"
                                htmlFor={brand}
                                >
                               <input 
                                id={brand}
                                name="Marca"
                                type="checkbox" 
                                checked={selectedBrands.includes(brand)}
                                onChange={() => handleBrandChange(brand)} 
                                />
                                 {`- ${brand.charAt(0).toUpperCase() + brand.slice(1)}`}
                            </label>
                        </a>                  
                    </li>
                    ))}            
                </ul>
                <ul>
                    <span className="" >Color</span>
                    {sortedColors.map((color) =>(
                    <li key={color}>
                        <a href={color}>
                            <i className="fa fa-home fa-2x"></i>
                            <label 
                                className="nav-text"
                                htmlFor={color}
                                >
                               <input 
                                id={color}
                                name="Color"
                                type="checkbox" 
                                checked={selectedColors.includes(color)}
                                onChange={() => handleColorChange(color)} 
                                />
                                {`- ${color.charAt(0).toUpperCase() + color.slice(1)}`}
                            </label>
                        </a>                  
                    </li>
                    ))}            
                </ul>
                <ul>
                    <span className="" >Género</span>
                    {sortedGenders.map((gender) =>(
                    <li key={gender}>
                        <a href={gender}>
                            <i className="fa fa-home fa-2x"></i>
                            <label 
                                className="nav-text"
                                htmlFor={gender}
                                >
                               <input 
                                type="checkbox" 
                                checked={selectedGenders.includes(gender)}
                                onChange={() => handleGenderChange(gender)} 
                                />
                                {`- ${(translateGender(gender)).charAt(0).toUpperCase() + (translateGender(gender)).slice(1)}`}
                            </label>
                        </a>                  
                    </li>
                    ))}            
                </ul>
                <ul>
                    <span className="" >Estilo</span>
                    {sortedStyles.map((style) =>(
                    <li key={style}>
                        <a href={style}>
                            <i className="fa fa-home fa-2x"></i>
                            <label 
                                className="nav-text"
                                htmlFor={style}
                                >
                               <input 
                                type="checkbox"
                                checked={selectedStyles.includes(style)}
                                onChange={() => handleStyleChange(style)}            
                                />
                                {`- ${style.charAt(0).toUpperCase() + style.slice(1)}`}
                            </label>
                        </a>                  
                    </li>
                    ))}            
                </ul>
                <ul>
                    <span className="" >Malla</span>
                    {sortedStraps.map((strap) =>(
                    <li key={strap}>
                        <a href={strap}>
                            <i className="fa fa-home fa-2x"></i>
                            <label 
                                className="nav-text"
                                htmlFor={strap}
                                >
                               <input 
                                id={strap}
                                type="checkbox" 
                                checked={selectedStraps.includes(strap)}
                                onChange={() => handleStrapChange(strap)} 
                                />
                                {`- ${strap.charAt(0).toUpperCase() + strap.slice(1)}`}
                            </label>
                        </a>                  
                    </li>
                    ))}            
                </ul>
                <ul>
                    <span className="" >Funciones</span>
                    {sortedFunctions.slice(0, 10).map((func) =>(
                    <li key={func}>
                        <a>
                            <i className="fa fa-home fa-2x"></i>
                            <label htmlFor={func} className="nav-text">
                               <input 
                                name="funciones"
                                type="checkbox"
                                id={func}
                                checked={selectedFunctions.includes(func)}
                                onChange={() => handleFunctionChange(func)} 
                                />
                                {`- ${func.charAt(0).toUpperCase() + func.slice(1)}`}
                            </label>
                        </a>                  
                    </li>
                    ))}            
                </ul>
                </div>
                
                
                

                <span className="logout">         
                    <button id="limpiar" onClick={handleClearFilters}>Limpiar filtros</button>
                    <button id="filtrar" onClick={handleApplyFilters}>Aplicar filtros</button>
                </span>
            </nav>
        </Container>
    )
}

export default Sidebar
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filtersAll, clearFilters , getProducts, updateSelectedCategories} from "../../redux/Actions.js";
import { translateGender } from "../helpers/translateGenderWords.jsx";

const categoryValues = (clocks, categoryName) => {
  const values = clocks.map((clock) => clock[categoryName]);

  return values.filter(
    (value, index, allValues) => allValues.indexOf(value) === index
  );
};

export const FiltersAll = ({ setPage }) => {
  const allClocks = useSelector((state) => state.allClocks);
  const dispatch = useDispatch();
  const clocks = useSelector((state) => state.Clocks);


  const uniqueBrands = categoryValues(allClocks, "brandName");
  const uniqueColors = categoryValues(allClocks, "colorName");
  const uniqueStyles = categoryValues(allClocks, "styleName");
  const uniqueStraps = categoryValues(allClocks, "strapName");
  const uniqueGenders = categoryValues(allClocks, "gender");

  const [selectedCategories, setSelectedCategories] = useState({
    ...clocks
  });
  const [selectedValues, setSelectedValues] = useState("");
  const [showNoResults, setShowNoResults] = useState(false);

  const handleOnCheckbox = (selectedValue, fieldName) => {
    const isSelected = selectedCategories[fieldName] === selectedValue;
    console.log("SELECTED VALUE DEL FILTERS" , selectedValue )

    if (isSelected) {
      setSelectedCategories((prevState) => {
        const updatedCategories = { ...prevState };
        delete updatedCategories[fieldName];
        return updatedCategories;
      });
      setSelectedValues((prevState) => prevState.filter((value) => value !== selectedValue));
    } else {
      setSelectedCategories((prevState) => ({
        ...prevState,
        [fieldName]: selectedValue,
      }));
      setSelectedValues((prevState) => [...prevState, selectedValue]);
    }
  };

  const selectedValuesString = selectedValues.length && selectedValues.join(" ");

  const handleApplyFilters = () => {
    dispatch(filtersAll(selectedCategories));
    dispatch(updateSelectedCategories(selectedValuesString))

    const filteredClocks = clocks.filter((product) => {
      let matchesAllCategories = true;
      for (const fieldName in selectedCategories) {
        const selectedValue = selectedCategories[fieldName];
        if (selectedValue && product[fieldName] !== selectedValue) {
          matchesAllCategories = false;
          break;
        }
      }
      setPage(1);
      return matchesAllCategories;
    });

    setShowNoResults(filteredClocks.length === 0);
  };

  const handleClearFilters = () => {
    setSelectedCategories({});
    dispatch(clearFilters());
    dispatch(getProducts());
    setShowNoResults(false);
  };

  return (
    <div>
      <h2>Marca:</h2>
      {uniqueBrands.map((brand, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={brand}
            name="brandName"
            value={brand}
            checked={selectedCategories.brandName === brand}
            onChange={() => handleOnCheckbox(brand, "brandName")}
          />
          <label htmlFor={brand}>{brand}</label>
        </div>
      ))}
      <h2>Estilo:</h2>
      {uniqueStyles.map((estilo, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={estilo}
            name="styleName"
            value={estilo}
            checked={selectedCategories.styleName === estilo}
            onChange={() => handleOnCheckbox(estilo, "styleName")}
          />
          <label htmlFor={estilo}>{estilo}</label>
        </div>
      ))}
      <h2>Color:</h2>
      {uniqueColors.map((color, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={color}
            name="colorName"
            value={color}
            checked={selectedCategories.colorName === color}
            onChange={() => handleOnCheckbox(color, "colorName")}
          />
          <label htmlFor={color}>{color}</label>
        </div>
      ))}
      <h2>Malla:</h2>
      {uniqueStraps.map((malla, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={malla}
            name="strapName"
            value={malla}
            checked={selectedCategories.strapName === malla}
            onChange={() => handleOnCheckbox(malla, "strapName")}
          />
          <label htmlFor={malla}>{malla}</label>
        </div>
      ))}
      <h2>Género:</h2>
      {uniqueGenders.map((genero, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={genero}
            name="gender"
            value={genero}
            checked={selectedCategories.gender === genero}
            onChange={() => handleOnCheckbox(genero, "gender")}
          />
          <label htmlFor={genero}>{translateGender(genero)}</label>
        </div>
      ))}
      <button onClick={handleClearFilters}>Borrar filtros</button>
      <button onClick={handleApplyFilters}>Aplicar filtros</button>
      {showNoResults && (
        <q> No hay coincidencias con la búsqueda seleccionada. </q>
      )}
    </div>
  );
};

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filtersAll, clearFilters } from '../../redux/Actions.js'; // Asegúrate de importar correctamente la acción

const categoryValues = (clocks, categoryName) => {
  const values = clocks.map(clock => clock[categoryName]);

  return values.filter((value, index, allValues) => allValues.indexOf(value) === index);
};

export const FiltersAll = () => {
  const clocks = useSelector((state) => state.Clocks);
  const dispatch = useDispatch();
  const searchClocks = useSelector((state) => state.searchClocks);

  const uniqueBrands = categoryValues(clocks, 'brandName');
  const uniqueColors = categoryValues(clocks, 'colorName');
  const uniqueStyles = categoryValues(clocks, 'styleName');
  const uniqueStraps = categoryValues(clocks, 'strapName');
  const uniqueGenders = categoryValues(clocks, 'gender');
  const uniquePrices = categoryValues(clocks, "price")

  const [selectedCategories, setSelectedCategories] = useState({ ...searchClocks });
  const [showNoResults, setShowNoResults] = useState(false);

  const handleOnCheckbox = (selectedValue, fieldName) => {

    // Verificar si el valor ya está seleccionado
    const isSelected = selectedCategories[fieldName] === selectedValue;

    // Si ya está seleccionado, eliminarlo de las selecciones
    if (isSelected) {
      setSelectedCategories((prevState) => {
        const updatedCategories = { ...prevState };
        delete updatedCategories[fieldName];
        return updatedCategories;
      });
    } else {
      // Si no está seleccionado, agregarlo a las selecciones
      setSelectedCategories((prevState) => ({
        ...prevState,
        [fieldName]: selectedValue,
      }));
    }
  };

  const handleApplyFilters = () => {

    setSelectedCategories({});
    // Realiza el dispatch de las categorías seleccionadas
    dispatch(filtersAll(selectedCategories));

    // Verificar si hay resultados o no
    const filteredClocks = clocks.filter((product) => {
      let matchesAllCategories = true;
      for (const fieldName in selectedCategories) {
        const selectedValue = selectedCategories[fieldName];
        if (selectedValue && product[fieldName] !== selectedValue) {
          matchesAllCategories = false;
          break;
        }
      }
      return matchesAllCategories;
    });

    setShowNoResults(filteredClocks.length === 0);
  };

  const handleClearFilters = () => {
    // Limpiar los filtros restableciendo el estado a su valor inicial (vacío)
    setSelectedCategories({});
    // Realiza el dispatch para limpiar los filtros en el estado del Redux
    dispatch(clearFilters());
    // Ocultar el mensaje de "No hay coincidencias con la búsqueda seleccionada"
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
            onChange={() => handleOnCheckbox(estilo, "styleName")} />
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
          <label htmlFor={genero}>{genero}</label>
        </div>
      ))}
      <button onClick={handleClearFilters}>Borrar filtros</button>
      <button onClick={handleApplyFilters}>Aplicar filtros</button>
      {showNoResults && <q> No hay coincidencias con la búsqueda seleccionada. </q>}
    </div>
  );
};
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchProductSuccess, searchProductFailure } from "../redux/Actions";


export const Searchbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    // 
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    try {
      const searchTerms = searchTerm.split(' ');
      dispatch(searchProductSuccess(searchTerms));
      setSearchTerm("")
      navigate("/");
    } catch (error) {
      dispatch(searchProductFailure(error.message));
    }
  };




  return (
    <div >
      <input
        type="text"
        placeholder="Buscar reloj..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};


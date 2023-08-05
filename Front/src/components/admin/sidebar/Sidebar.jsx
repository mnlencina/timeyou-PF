/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { SideDiv, BtnSideBar} from "./styled";

const Sidebar = ({ handleView, setNewWat, view, newWat }) => {
    const navigate = useNavigate()
  return (
    <SideDiv>
      
      
      <BtnSideBar alter={(view === "home").toString()}
        onClick={() => {
          handleView("home");
        }}
      >
        Inicio
      </BtnSideBar>
      <BtnSideBar alter={(view === "users").toString()}
        onClick={() => {
          handleView("users");
        }}
      >
        Usuarios
      </BtnSideBar>
      <BtnSideBar alter={(view === "watches").toString()}
        onClick={() => {
          handleView("watches");
        }}
      >
        Relojes
      </BtnSideBar>
      <BtnSideBar alter={(view === "buys").toString()}
        onClick={() => {
          handleView("buys");
        }}
      >
        Ventas
      </BtnSideBar>
      <BtnSideBar alter={newWat.toString()}
        onClick={() => {
            setNewWat(true);
        }}
      >
        Cargar Watch
      </BtnSideBar>
      <BtnSideBar alter={newWat.toString()}
        onClick={() => {
            setNewWat(true);
        }}
      >
        Cargar User
      </BtnSideBar>
        <BtnSideBar 
            onClick={() => {
                navigate("/home");
            }}
        >
        Time You
        </BtnSideBar>
    </SideDiv>
  );
};

export default Sidebar;
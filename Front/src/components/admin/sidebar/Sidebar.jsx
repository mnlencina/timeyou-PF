/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { SideDiv, BtnSideBar} from "./styled";

const Sidebar = ({ handleView, setNewWat, view, newWat,setNewUser,newUser }) => {
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
        Cargar Reloj
      </BtnSideBar>
      {<BtnSideBar alter={newUser.toString()}
        onClick={() => {
            setNewUser(true);
        }}
      >
        Cargar User
      </BtnSideBar>}
        <BtnSideBar 
            onClick={() => {
                navigate("/home");
            }}
        >
        TimeYou
        </BtnSideBar>
    </SideDiv>
  );
};

export default Sidebar;
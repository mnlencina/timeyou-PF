// import { Link } from "react-router-dom";
import { SideDiv, BtnSideBar, StyledLink } from "./styled";

const Sidebar = ({ handleView }) => {
  return (
    <SideDiv>
      <StyledLink to="/home">
        <BtnSideBar>Time You</BtnSideBar>
      </StyledLink>
      <BtnSideBar
        onClick={() => {
          handleView("home");
        }}
      >
        Inicio
      </BtnSideBar>
      <BtnSideBar
        onClick={() => {
          handleView("users");
        }}
      >
        Usuarios
      </BtnSideBar>
      <BtnSideBar
        onClick={() => {
          handleView("watches");
        }}
      >
        Relojes
      </BtnSideBar>
      <BtnSideBar
        onClick={() => {
          handleView("buys");
        }}
      >
        Compras
      </BtnSideBar>
    </SideDiv>
  );
};

export default Sidebar;

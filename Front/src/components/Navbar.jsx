import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { BiUser, BiUserX } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Searchbar } from "./index.js";
import iconAdminBlack from "../../public/iconAdminBlack.svg";
import {
  logOut,
  getProducts,
  getWatchesByBrand,
  clearCart,
} from "../redux/Actions.js";

export const Navbar = () => {
  const cart = useSelector((state) => state.Cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const itemCount = cart?.length;

  console.log(itemCount);
  const handleLogOut = () => {
    dispatch(clearCart());
    dispatch(logOut());
  };

  const handleLinkClick = (brand) => {
    const brandLowerCase = brand.toLowerCase();
    if (brandLowerCase === "ver todo") {
      dispatch(getProducts());
    } else {
      dispatch(getWatchesByBrand(brandLowerCase));
    }
  };

  /* controlador de la barra de busqueda */

  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Container itemCount={itemCount.toString()}>
      <header className="header">
        <h1>
          <StyledLink2 to="/">
            Time<span>You</span>
          </StyledLink2>
        </h1>
      </header>
      <nav className="navigation">
        <ul className="nav">
          <li>
            <StyledLink to="/home" onClick={() => handleLinkClick("ver todo")}>
              ver todo
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/home" onClick={() => handleLinkClick("festina")}>
              festina
            </StyledLink>
          </li>
          <li>
            {" "}
            <StyledLink to="/home" onClick={() => handleLinkClick("citizen")}>
              citizen
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/home" onClick={() => handleLinkClick("mistral")}>
              mistral
            </StyledLink> 
          </li>
          <li>
            <StyledLink to="/home" onClick={() => handleLinkClick("prune")}>
              prÜne
            </StyledLink>
          </li>
        </ul>
        <div className="icons">
          <ul className="icon">
            <li>
              <BsSearch onClick={handleShowSearch} />
              <ul className={`search-conteiner ${showSearch ? " active" : ""}`}>
                <li onMouseLeave={handleShowSearch}>
                  <Searchbar />
                </li>
              </ul>
            </li>
            <li>
              <Link to="/auth">
                {user.token.trim() === "" ? (
                  <BiUser title="LogIn" onClick={() => Navigate("/")} />
                ) : (
                  <BiUserX title="Out" onClick={handleLogOut} />
                )}
              </Link>
            </li>
            <li>
              <Link to="/shopping">
                <span>{itemCount}</span>
                <FiShoppingCart />
              </Link>
            </li>
            {user.role === "admin" && (
              <li title="Dashboard">
                <Link to="/admin/dashboard">
                  <img
                    className="iconImg"
                    src={iconAdminBlack}
                    alt="SVG Image"
                  />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  .header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      text-transform: uppercase;
      font-size: 2.4rem;
      span {
        font-weight: 300;
      }
    }
  }
  .navigation {
    margin: 0 auto;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      list-style: none;
      position: relative;
    }
    li {
      text-transform: uppercase;
      font-weight: 300;
    }
    .nav {
      margin: 0 auto;
      width: 60%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    .icons {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        li {
          font-size: 1.4rem;
          font-weight: 500;
          position: relative;
          cursor: pointer;
          .search-conteiner {
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            position: absolute;
            width: 300px;
            height: 100px;
            top: 40px;
            left: -10px;
            padding: 5px 10px;
            border-radius: 10px;
            background: #fff;
            visibility: hidden;
            opacity: 0;
            transition: 0.3s all ease-in-out;
            display: grid;
            place-items: center;
            z-index: 100;
            &::before {
              content: "";
              position: absolute;
              width: 25px;
              height: 25px;
              top: -25px;
              left: 15px;
              border-left: 15px solid transparent;
              border-right: 15px solid transparent;
              border-bottom: 12px solid #fff;
            }
          }
          .active {
            visibility: visible;
            opacity: 1;
          }
          a {
            text-decoration: none;
            color: #111;
          }
          span {
            visibility: ${(props) =>
              props.itemCount === "0" ? "hidden" : "visible"};
            position: absolute;
            right: -10px;
            bottom: 0;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #111;
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
          }
          .iconImg {
            width: 30px;
            transition: 1s;
            animation: girar 10s linear infinite;
            &:hover {
              animation: girar 3s linear infinite;
              transition: 1s;
            }
          }
          @keyframes girar {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        }
      }
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bolder;
  font-size: 20px;
  color: #111;
`;

const StyledLink2 = styled(Link)`
  text-decoration: none;
  font-size: 50px;
  color: #111;
`;

//import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { BiUser, BiUserX } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Searchbar } from "./index.js";
import { logOut, getProducts, getWatchesByBrand } from "../redux/Actions.js";

export const Navbar = () => {
  const cart = useSelector((state) => state.Cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const itemCount = cart.items?.length;

  const handleLinkClick = async (brand) => {
    const brandLowerCase = brand.toLowerCase();
    if (brandLowerCase === "ver todo") {
      await dispatch(getProducts());
    } else {
      await dispatch(getWatchesByBrand(brandLowerCase));
    }
  };

  return (
    <Container itemcount={itemCount}>
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
        <div className="serch-container">
          <Searchbar />
        </div>
        <div className="icons">
          <ul className="icon">
            <li>
              <Link to="/auth">
                {!user.token.length ? (
                  <BiUser />
                ) : (
                  <BiUserX onClick={() => dispatch(logOut())} />
                )}
              </Link>
            </li>
            <li>
              <Link to="/shopping">
                <span>{itemCount}</span>
                <FiShoppingCart />
              </Link>
            </li>
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
      width: 70%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    .serch-container {
      width: 25%;
      height: auto;
      position: relative;
    }
    .icons {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
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
          a {
            text-decoration: none;
            color: #111;
          }
          span {
            visibility: ${(props) =>
              props.itemcount === 0 ? "hidden" : "visible"};
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

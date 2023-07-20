import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const cart = useSelector((state) => state.Cart);

  const itemCount = cart.items?.length;

  return (
    <Container itemcount={itemCount}>
      <header className="header">
        <h1>
          Times<span>You</span>
        </h1>
      </header>
      <nav className="navigation">
        <ul className="nav">
          <li>Ver todo</li>
          <li>Casio</li>
          <li>g-shock</li>
          <li>mistral</li>
          <li>prÜne</li>
        </ul>
        <div className="icons">
          <ul className="icon">
            <li>
              <BsSearch />
            </li>
            <li>
              <BiUser />
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

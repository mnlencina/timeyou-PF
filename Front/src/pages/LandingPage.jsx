import React from "react";
import styled from "styled-components";
import { BannerSlider, CardSlider, LogoSlider } from "../components/index.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getWatchesByBrand } from "../redux/Actions.js";

export default function LandingPage() {
  const dispatch = useDispatch();
  const handleLinkClick = async (brand) => {
    const brandLowerCase = brand.toLowerCase();
    await dispatch(getWatchesByBrand(brandLowerCase));
  };

  const slideContainer = () => (
    <ContainerSlide>
      <div className="slide-container">
        <BannerSlider />
      </div>
    </ContainerSlide>
  );



  const bannerFoto = () => (
    <BannersFotos>
      <Link id="1" to={"/home"} onClick={() => handleLinkClick("mistral")}>
        <img 
          src="https://res.cloudinary.com/pagetimeyou/image/upload/v1691117013/Banners/74b39cc8-7942-4a5d-86cf-4d03f19ee51c___7d3dd5a98962f95ef4e34c14f54a1ee8_efbhwv.webp"
          className="banner"
        />
      </Link>
      <Link id="2" to={"/home"} onClick={() => handleLinkClick("g-shock")}>
        <img 
          src="https://res.cloudinary.com/pagetimeyou/image/upload/v1690916565/Banners/Banner_G-Shock_2_ilozht.webp"
          className="banner"
        />
      </Link>
    </BannersFotos>
  );

  return (
    <Container>
      <div className="contentBox">
       {slideContainer()}
       <LogoSlider />
        {bannerFoto()}
        <CardSlider />
      </div>
    </Container>
  );
}

const BannersFotos = styled.section`
  width: 90%;
  margin: 0 auto;
  .banner {
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const ContainerSlide = styled.section`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .slide-container {
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    overflow: hidden;
  }
`;

const Container = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  .contentBox {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

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
      <Link to={"/home"} onClick={() => handleLinkClick("mistral")}>
        <img
          src="https://res.cloudinary.com/pagetimeyou/image/upload/v1691117013/Banners/74b39cc8-7942-4a5d-86cf-4d03f19ee51c___7d3dd5a98962f95ef4e34c14f54a1ee8_efbhwv.webp"
          className="banner"
        />
      </Link>
      <Link to={"/home"} onClick={() => handleLinkClick("g-shock")}>
        <img
          src="https://res.cloudinary.com/pagetimeyou/image/upload/v1691117010/Banners/d5ddcaed-1cec-4736-8a94-0e03b3ba26f8___89f5b3ced11506895642fca1c4f6d59a_iqnflt.webp"
          className="banner"
        />
      </Link>
    </BannersFotos>
  );

  return (
    <>
      {slideContainer()}
      <LogoSlider />
      <CardSlider />
      {bannerFoto()}
      <CardSlider />
    </>
  );
}

const BannersFotos = styled.section`
  width: 80%;
  height: 100%;
  margin-left: 9.5vw;
  .banner {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const ContainerSlide = styled.section`
  width: 100vw;
  height: 70vh;
  display: flex;
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

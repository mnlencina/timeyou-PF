import React from "react";
import styled from "styled-components";

export const FooterCheckOut = () => {
  return (
    <FooterContainer>
      <div className="text-info">
        <p>TimeYou © 2023</p>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  .text-info {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

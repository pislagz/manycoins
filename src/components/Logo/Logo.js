import React from "react";
import styled from "styled-components";
import logoImage from "../../assets/icons/coinM.png";

const Logo = () => (
  <Wrapper>
    <Image src={logoImage}></Image>
    <Text>Manycoins</Text>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(181, 127, 208, 1) 0%,
    rgba(235, 128, 84, 1) 100%
  );

  padding: 1rem;
`;

const Image = styled.img`
  width: 3rem;
  height: 3rem;
`;

const Text = styled.p`
  margin: 0;
  margin-left: 1rem;
  font-size: 2rem;
  font-style: italic;
  font-weight: bold;
  color: #fff;
`;

export default Logo;

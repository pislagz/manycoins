import React from "react";
import styled from "styled-components";
import logoImage from "../../assets/icons/coinM.png";

const Logo = () => (
  <Wrapper>
    <Link href="/">
      <Image src={logoImage} alt={"manycoins logo"}></Image>
      <Text>Manycoins</Text>
    </Link>
  </Wrapper>
);

const Link = styled.a`
  display: flex;
  align-items: center;
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
  }

  &:hover {
    p {
      color: #fad964;
      transform: scale(105%);
      transition: transform 0.1s;
    }
    img {
      transform: scale(105%);
      transition: transform 0.1s;
    }

    &:active {
      p {
        color: #fad964;
        transform: scale(95%);
        transition: transform 0.1s;
      }
      img {
        transform: scale(95%);
        transition: transform 0.1s;
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  width: 100%;
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

import React from "react";
import styled, { keyframes } from "styled-components";
import { Favorite } from "../Star/Star";

const NoFavorites = (props) => (
  <Wrapper>
    <h4>No favorites!</h4>
    <p>Use the star icon to add some cryptos to your favorites!</p>
    <Demo onClick={() => props.handleSwitchFavorites()}>
      <Favorite />
      <figure></figure>
    </Demo>
  </Wrapper>
);

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  color: #774d96;

  h4 {
    margin-top: 3rem;
    margin-bottom: 0;
    font-size: 3rem;
    font-weight: 700;
  }

  p {
    text-align: center;
  }
`;

const rotate = keyframes`
    100% { 
            transform: rotate(360deg); 
        }
`;

const Demo = styled.div`
  display: flex;
  align-items: center;
  background: #f7e3ff;
  width: 75%;
  height: 3rem;

  svg {
    margin-left: 2rem;
    animation: ${rotate} 5s linear infinite;
    &:hover {
      cursor: pointer;
      fill: #c151ed;
    }
    &:active {
      fill: #701d91;
    }
  }

  figure {
    display: flex;
    overflow-x: hidden;
    width: 100%;
    margin-left: 2rem;
    width: 80%;
    height: 1.4rem;
    background: #e5c0fa;
  }
`;

export default NoFavorites;

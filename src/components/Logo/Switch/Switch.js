import React from "react";
import styled from "styled-components";

const Switch = () => (
  <Toggle>
    {/* <span>🌙</span> */}
    <input type={"checkbox"} id={"toggle-switch"}></input>
    <label for={"toggle-switch"}>
      <ScreenReaderText>Toggle Color Scheme</ScreenReaderText>
    </label>
    {/* <span>☀️</span> */}
  </Toggle>
);

export default Switch;

const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 70px;
  span {
    margin: 0 0.5rem;
  }
  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
    &:checked + label {
      background: #5938b5;
    }
    &:checked + label:after {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
  label {
    cursor: pointer;
    width: 75px;
    height: 34px;
    background: rgba(0, 0, 0, 0.27);
    display: block;
    border-radius: 40px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      width: 30px;
      height: 30px;
      background: #fff;
      border-radius: 40px;
      transition: 0.3s;
    }
  }
`;

const ScreenReaderText = styled.span`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  width: 1px;
  word-wrap: normal !important;
`;

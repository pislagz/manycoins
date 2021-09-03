import React from "react";
import styled from "styled-components";

export const Filler = (props) => {
  return <Div {...props} />;
};

const Div = styled.div`
  max-width: 1127px;
  margin: 0 auto;
  background: white;
  height: ${(props) => props.mockRows * 64}px;
`;

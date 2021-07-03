import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { Collapsing } from "../../../../styles/GlobalStyleSnippets";

export function LoadingRow() {
  return (
    <>
      <TR>
        <Fav>
          {" "}
          <LoadingWrapper>
            <LoadingDot></LoadingDot>
          </LoadingWrapper>
        </Fav>
        <Rank>
          <LoadingWrapper>
            <LoadingDot></LoadingDot>
          </LoadingWrapper>
        </Rank>
        <Name>
          <LoadingWrapper>
            <LoadingDot></LoadingDot>
          </LoadingWrapper>
        </Name>
        <Price>
          <LoadingWrapper>
            <LoadingDot></LoadingDot>
          </LoadingWrapper>
        </Price>
        <Change24>
          <LoadingWrapper>
            <LoadingDot></LoadingDot>
          </LoadingWrapper>
        </Change24>
        <MarketCap>
          <LoadingWrapper>
            <LoadingDot></LoadingDot>
          </LoadingWrapper>
        </MarketCap>
      </TR>
    </>
  );
}

const Fav = styled.td``;

const Rank = styled.td`
  ${Collapsing};
  text-align: center;
`;

const Name = styled.td``;
const Price = styled.td``;
const Change24 = styled.td``;
const MarketCap = styled.td`
  ${Collapsing};
`;

const loading = keyframes`
  0% {transform: translateX(0);}
  100% {transform: translateX(1600%);}
`;

const TR = styled.tr``;

const LoadingWrapper = styled.div`
  height: 1.8rem;
  background: #f7f7f7;
  overflow: hidden;
`;

const LoadingDot = styled.div`
  animation: ${loading} 0.5s linear infinite backwards;
  background: linear-gradient(
    90deg,
    rgba(247, 247, 247, 1) 0%,
    rgba(210, 210, 210, 1) 40%,
    rgba(210, 210, 210, 1) 60%,
    rgba(247, 247, 247, 1) 100%
  );
  width: 2rem;
  height: 100%;
`;

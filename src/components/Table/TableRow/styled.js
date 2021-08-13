import styled from "styled-components";
import {
  Collapsing,
  CollapsingIcon,
  CustomBelow770px,
  Expanding,
  FontSizeBelow770px,
} from "../../../styles/GlobalStyleSnippets.js";

export const Row = styled.tr`
  cursor: pointer;
`;

export const Favs = styled.td`
  padding-left: 1rem !important;
  div {
    svg {
      &:hover {
        transform: scale(115%);
        transition: transform 0.1s;
      }
      &:active {
        transform: scale(80%);
        transition: transform 0.1s;
      }
    }
  }
`;

export const CoinRank = styled.td`
  ${Collapsing}
  text-align: center;
  padding-left: 0 !important;
`;

export const CoinName = styled.td`
  text-align: center;
  display: flex;
`;

export const CoinValue = styled.td`
  ${FontSizeBelow770px(0.9)}
  font-size: 1rem;
  text-align: right;
`;
export const Coin24Rate = styled.td`
  ${FontSizeBelow770px(0.9)}
  font-size: 1rem;
  text-align: right;
  ${CustomBelow770px("text-align: center;")}
`;
export const MarketCap = styled.td`
  ${Collapsing}
  text-align: center;
`;

export const ItemIcon = styled.img`
  ${CollapsingIcon}
  align-self: center;
  height: 1.8rem;
  width: 1.8rem;
  margin-right: 1rem;
`;

export const ItemName = styled.span`
  ${FontSizeBelow770px(0.8)}
  font-size: 1.1rem;
`;

export const SymbolWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    ${Expanding};
    margin: 0 0 0 0.5rem;
    font-size: 1rem;
    font-weight: 300;
    font-style: italic;
    background: #fee8ff;
    border-radius: 9999px;
    padding: 0.2rem 0.5rem;
  }
`;

export const ItemSymbol = styled.span`
  ${FontSizeBelow770px(0.9)}
  font-size: 1rem;
  font-weight: 300;
  font-style: italic;
`;

export const ItemNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span {
    text-align: left;
  }
  &:hover {
    span {
      text-decoration: underline;
    }
  }
`;

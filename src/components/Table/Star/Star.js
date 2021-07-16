import styled from "styled-components";

const Star = styled.img`
  width: 1.5rem;
  height: auto;
  filter: invert(35%) sepia(22%) saturate(1414%) hue-rotate(232deg)
    brightness(90%) contrast(87%);
  &:hover {
    transform: scale(115%);
    transition: transform 0.1s;
  }
  &:active {
    transform: scale(80%);
    transition: transform 0.1s;
  }
`;

const StarOutline = styled.img`
  width: 1.5rem;
  height: auto;
  filter: invert(35%) sepia(22%) saturate(1414%) hue-rotate(232deg)
    brightness(90%) contrast(87%);
  &:hover {
    transform: scale(115%);
    transition: transform 0.1s;
  }
  &:active {
    transform: scale(80%);
    transition: transform 0.1s;
  }
`;

export const Favorite = () => {
  return <Star src={"/assets/star.svg"} />;
};

export const NoFavorite = () => {
  return <StarOutline src={"/assets/star-outline.svg"} />;
};

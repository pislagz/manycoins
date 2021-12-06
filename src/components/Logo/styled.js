import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background: #2b5876; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4e4376,
    #2b5876
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #413862,
    #244962
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding: 1rem;
`;

export const Link = styled.a`
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

export const Image = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const Text = styled.p`
  margin: 0;
  margin-left: 1rem;
  font-size: 2rem;
  font-style: italic;
  font-weight: bold;
  color: #fff;
`;

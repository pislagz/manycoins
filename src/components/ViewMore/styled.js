import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  font-size: 1.5rem;
  background: #715192;
  color: white;
  border: none;
  padding: 0.6rem 1.6rem;
  border-radius: 99999px;
  cursor: pointer;
  box-shadow: 0 -10px 50px rgba(87, 36, 138, 0.2);

  &:hover {
    background: #663d8f;
    box-shadow: 0 -10px 50px rgba(102, 61, 143, 0.2);
    transform: scale(105%);
    transition: transform 0.1s;
  }

  &:active {
    background: #57248a;
    box-shadow: 0 -10px 50px rgba(87, 36, 138, 0.2);
    transform: scale(95%);
    transition: transform 0.1s;
  }
`;

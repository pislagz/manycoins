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
  background: #24273a;
  color: white;
  border: none;
  padding: 0.6rem 1.6rem;
  border-radius: 99999px;
  cursor: pointer;
  box-shadow: 0 -10px 50px rgba(87, 36, 138, 0.2);

  &:hover {
    background: #333752;
    box-shadow: 0 -10px 50px rgba(102, 61, 143, 0.2);
    transform: scale(105%);
    transition: transform 0.1s;
  }

  &:active {
    background: #13141e;
    box-shadow: 0 -10px 50px rgba(87, 36, 138, 0.2);
    transform: scale(95%);
    transition: transform 0.1s;
  }
`;

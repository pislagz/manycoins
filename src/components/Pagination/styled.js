import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Buttons = styled.ul`
  display: flex;
  list-style: none;
`;

export const Button = styled.li`
  padding: 0.5rem 0.25rem;
  margin: 0.1rem;
  background: #dd845d;
  border-radius: 9999px;
  min-width: 2rem;
  border: 3px solid #6b6b6b;
  text-align: center;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #af83c5;
  }

  &:active {
    background: #9e60bd;
  }
`;

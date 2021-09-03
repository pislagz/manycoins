import styled from "styled-components";
import { CustomBelow770px } from "styles/GlobalStyleSnippets";

export const Wrapper = styled.footer`
  margin: 0 auto;
  width: 100%;
  height: 15rem;
  background: rgba(0, 0, 0, 0.1);
  color: white;
  padding: 2rem;

  ul {
    max-width: 1127px;
    margin: 0 auto;
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: row;
    ${CustomBelow770px(`flex-direction: column;`)}
    list-style: none;
    justify-content: space-around;
    li {
      display: flex;
      flex-direction: column;
      width: 100%;
      h5 {
        margin: 0;
        font-size: 1.4rem;
      }
      p {
        margin: 0;
      }
      a {
        text-decoration: none;
        color: white;
        &:hover {
          font-weight: bold;
        }
      }
    }
  }
`;

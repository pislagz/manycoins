import styled from "styled-components";

export const Wrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;

  th,
  td {
    padding: 0.8rem 0.4rem;
    &:nth-of-type(1) {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
    &:nth-of-type(2) {
      /* padding: 0; */
    }
    &:nth-of-type(3) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  th {
    padding-top: 0;
    padding-bottom: 0;
  }

  tbody {
    tr {
      border-bottom: 1px solid #dddddd;
      /* color: white;
      background: #351c7a; */

      &:nth-of-type(even) {
        background-color: #fafafa;
        /* background: #311482; */
      }

      &:hover {
        background: #fbf0ff;
        span:first-of-type {
          font-weight: 500;
        }
        div {
          div {
            p {
              background: #e6fffe; //Change color of little rank mark on row hover
            }
          }
        }
        &:active {
          background: #f7e0ff;
          span:first-of-type {
            font-weight: 500;
          }
        }
      }
    }
  }
`;


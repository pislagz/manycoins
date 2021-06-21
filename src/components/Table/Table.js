import React, { Component } from "react";
import styled from "styled-components";
import { TableHead } from "./TableHead/TableHead";
import { TableLoading } from "./TableLoading/TableLoading";
import { TableRow } from "./TableRow/TableRow";

export default class Table extends Component {
  render() {
    return (
      <TheTable>
        <TableHead />
        {this.props.isLoading ? (
          <TableLoading />
        ) : (
          <TableRow items={this.props.items} />
        )}
      </TheTable>
    );
  }
}

const TheTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;

  th,
  td {
    padding: 0.8rem 1.1rem;
  }

  tbody {
    tr {
      border-bottom: 1px solid #dddddd;
      &:hover {
        background: #fbf0ff;
        span:first-of-type {
          font-weight: 500;
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

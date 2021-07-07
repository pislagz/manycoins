import React, { Component } from "react";
import styled from "styled-components";
import { CustomBelow770px } from "../../styles/GlobalStyleSnippets";
import TableHead from "./TableHead/TableHead";
import { TableLoading } from "./TableLoading/TableLoading";
import { TableRow } from "./TableRow/TableRow";

export default class Table extends Component {
  render() {
    return (
      <TheTable>
        <Column1 />
        <Column2 />
        <Column3 />
        <Column4 />
        <Column5 />
        <Column6 />
        <TableHead
          refreshRate={this.props.refreshRate}
          getItems={this.props.getItems}
          handler={this.props.handler}
        />
        <tbody>
          {this.props.isLoading ? (
            <TableLoading />
          ) : (
            <TableRow items={this.props.items} />
          )}
        </tbody>
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

  tbody {
    tr {
      border-bottom: 1px solid #dddddd;
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

const Column1 = styled.col`
  width: 30px;
`;
const Column2 = styled.col`
  width: 10px;
`;
const Column3 = styled.col``;
const Column4 = styled.col`
  width: 45%;
  ${CustomBelow770px(`  width: unset;`)}
`;
const Column5 = styled.col`
  width: 8%;
  ${CustomBelow770px(`  width: unset;`)}
`;
const Column6 = styled.col`
  width: 12%;
  ${CustomBelow770px(`  width: unset;`)}
`;

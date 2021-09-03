import React from "react";
import { Wrapper } from "./styled";

export const Footer = () => (
  <Wrapper>
    <ul>
      <li>
        <h5>Author</h5>
        <p>Pawel Pisulski</p>
        <a href={"mailto: pislax@yahoo.com"}>pislax@yahoo.com</a>
      </li>
      <li>
        <h5>Data used</h5>
        <a href={"https://coincap.io"}>Coincap.io</a>
        <a href={"https://graphql.coincap.io/"}>Coincap API</a>
      </li>
    </ul>
  </Wrapper>
);

import React from "react";
import { Wrapper } from "./styled";

export const Footer = () => (
  <Wrapper>
    <ul>
      <li>
        <h5>Author</h5>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://github.com/pislagz"}
          >
            Pawel Pisulski
          </a>
        </div>
        <div>
          <a href={"mailto: pislax@yahoo.com"}>pislax@yahoo.com</a>
        </div>
      </li>
      <li>
        <h5>Data used</h5>
        <div>
          <a target="_blank" rel="noreferrer" href={"https://coincap.io"}>
            Coincap.io
          </a>
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href={"https://docs.coincap.io"}>
            Coincap API 2.0
          </a>
        </div>
      </li>
    </ul>
  </Wrapper>
);

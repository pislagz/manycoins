export const Collapsing = `
    @media only screen and (max-width: 770px) { 
        display: none;
    }
`;

export const Expanding = `
    @media only screen and (min-width: 770px) { 
        display: none;
    }
`;

export const ArrowUp = `
&::after {
    font-family: "Material icons";
    position: absolute;
    bottom: 0;
    content: "arrow_drop_up";
  }
`;

export const ArrowDown = `
&::after {
    font-family: "Material icons";
    position: absolute;
    bottom: 0;
    content: "arrow_drop_down";
  }
`;

// export const ClickableHeader = `
//     &:hover {
//         cursor: pointer;
//         background: rgba(0, 0, 0, 0.1);
//         transition: background 0.4s;
//     }
//     &:active {
//         background: rgba(0, 0, 0, 0.2);
//     }
// `;

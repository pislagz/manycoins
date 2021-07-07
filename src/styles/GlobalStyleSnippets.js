export const Collapsing = `
    @media only screen and (max-width: 770px) { 
        display: none;
    }
`;

export const Expanding = `
    @media only screen and (min-width: 771px) { 
        display: none;
    }
`;

export const CollapsingIcon = `
@media only screen and (max-width: 770px) { 
    margin-right: 0.3rem;
}`;

export const FontSizeBelow770px = (rem) => `
@media only screen and (max-width: 770px) { 
    font-size: ${rem}rem;
}
`;

export const CustomBelow770px = (css) => `
@media only screen and (max-width: 770px) { 
    ${css};
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

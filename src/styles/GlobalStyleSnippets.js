export const Collapsing = `
    @media only screen and (max-width: 770px) { 
        display: none;
    }
`;

export const ClickableHeader = `
    &:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.1);
        transition: background 0.4s;
    }
    &:active {
        background: rgba(0, 0, 0, 0.2);
    }
`;

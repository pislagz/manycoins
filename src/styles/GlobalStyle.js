import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
        box-sizing: border-box;
    }
    
html,
body{
    width: 100%;
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
}

.table-wrapper {
    width: 100%;
    overflow-x: scroll;
}

.current-page {
    background: #af83c5;
}

td {
    /* border-right: 1px solid red; */
}
`;

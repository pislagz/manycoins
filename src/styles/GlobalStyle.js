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

tr:nth-of-type(even) {
    background-color: #fafafa;
}

.table-wrapper {
    width: 100%;
    overflow-x: scroll;
}

`;

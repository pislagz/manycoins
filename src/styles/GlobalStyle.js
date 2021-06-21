import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html,
body{
    width: 100%;
    height: 100%;
    font-family: 'Ubuntu', sans-serif;
    margin: 0;

    *{
        box-sizing: border-box;
    }

}

.data-right {
    text-align: right;
}

@media only screen and (max-width: 500px) { 
    .collapsing {
        display: none;
    }
}

`;

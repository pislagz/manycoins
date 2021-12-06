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
    margin: 0 auto;
    max-width: 1127px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);

    @media screen and (min-width: 1235px) {
        margin-top: 45px;
    }
}

.current-page {
    background: #af83c5;
}

#root {
    background: #2b5876;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4e4376, #2b5876); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



}
`;

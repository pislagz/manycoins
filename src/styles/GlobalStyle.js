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
    /* width: 100%; */
    margin: 0 auto;
    max-width: 1127px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: scroll;
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);
}

.current-page {
    background: #af83c5;
}

#root {
    background: linear-gradient(
    90deg,
    rgba(181, 127, 208, 0.7) 0%,
    rgba(235, 128, 84, 0.7) 100%
    );
}

td {
    /* border-right: 1px solid red; */
}
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        background-color: rgb(22, 23, 34);
    }
    
    a {
       text-decoration: none;
    }

`

export default GlobalStyle;

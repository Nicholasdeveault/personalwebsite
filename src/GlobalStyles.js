import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body{
    max-width: 100vw;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: black;
}

html, body, div,
    input, button, select, option,
    h1, h2, h3, h4, h5, h6, p,
    text {
        font-family: 'Staatliches', cursive;
        scroll-behavior: smooth;

    }
`;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body{
    max-width: 100vw;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: black;
    overflow-y: scroll;
}


//This is to hide the scrollbar while still being use it
body::-webkit-scrollbar {
    display: none;
}


//The Scroll-Behavior element is use to snap smoothly on the selected sections
html, body, div,
    input, button, select, option,
    h1, h2, h3, h4, h5, h6, p,
    text {
        font-family: 'Staatliches', cursive;
        scroll-behavior: smooth;
    }
`;

import {
  createGlobalStyle
} from "styled-components";

export const GlobalStyle = createGlobalStyle `
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding-top: 200px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 20px;
  background-color: #f0f0f0;
  color: black;
}
img {
  max-width: 100%;
  height: auto;
}
a {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
h1, h2, h3 {
  padding: 0;
  margin: 0;
}
h2 {
  font-size: 45px;
  color: #281208;
}
p {
   padding: 0;
  margin: 0;
}
button {
  border: none;
  outline: none;
  cursor: pointer;
}
input, button {
  font-family: inherit;
}
input[type='number'] {
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
`;
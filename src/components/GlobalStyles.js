import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color:darkgrey;
    }
    &::-webkit-scrollbar-track {
    background-color: white;
  }
}

body{
    width:100%;
    font-family: 'Montserrat', sans-serif;
    background-color: rgb(248, 241, 227);
}
h2{
    font-size:5rem;
    font-weight:lighter;
    color:#333;
    font-family: 'Girassol', cursive;
}
h3{
    font-size:1.3rem;
    color: #333;
    padding:1.5rem 0rem;
}
p{
    font-size:1.2rem;
    line-height:200%;
    color:#696969;
}
a{
    text-decoration:none;
    color: #333;
}
img{
    display:block;
}
input{
    font-weight: bold;
}
`;

export default GlobalStyles;

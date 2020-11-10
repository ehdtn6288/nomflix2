import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
${reset}
*{
    box-sizing:border-box;
}
a{
    text-decoration:none;
    color:inherit;
}
body{
    padding-top: 70px;
    color:white;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:14px;
    background-color:rgb(10,10,10,0.9)
}
`;

export default globalStyles;

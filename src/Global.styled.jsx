import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, 
*::before,
*::after{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
    
}
a{
    text-decoration: none;
}
`;

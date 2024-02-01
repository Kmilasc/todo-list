import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    
    html, body, div#root {
        margin: 0;
        display: flex;
        flex-direction: column;
        flex: 1;
    }
`;
 
export default GlobalStyle;


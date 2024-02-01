import styled from "styled-components";

export const CheckList = styled.ul`
    margin: 20px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
    
    > li {
        list-style-type: none;
        display: flex;
        align-items: center;
        gap: 10px;
        
        > input[type|="checkbox"] {
            width: 20px;
            height: 20px;
            accent-color: #213435;
        }

        > input[type|="text"] {
            flex: 1;

            border: none;
            border-bottom: solid 1px #000;
            padding: 10px;
        }
    }
`
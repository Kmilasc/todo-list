import styled, { css } from "styled-components";

export const Content = styled.header`
    background-color: #213435;
    display: flex;
    align-items: center;
    padding: 20px 30px;
    gap: 40px;

    > svg {
        min-width: 30px;
    }

    > a {
        text-decoration: none;
    }
`;

export const InputList = styled.input`
    border-radius: 5px;
    width: 100%;
    padding: 6px;
`;

interface LabelCheckProps {
    isOnTrashPathname: boolean;
}

export const LabelCheck = styled.label<LabelCheckProps>`
    display: flex;
    width: 100%;
    align-items: center;

    > svg {
        margin-left: -25px;
    }

    ${({ isOnTrashPathname }) => !isOnTrashPathname && css`
        flex: 1;

        * {
            display: none;
        }
    `}
`;

export const Title = styled.h1`
   font-size: 18px;
   color: white;
   margin: 0;
   display: none;

   @media (min-width: 450px) {
        display: block;
    }
   
`;

export const IconTitle = styled.div`
   font-size: 24px;
   display: flex;
   flex-direction: row;
   gap: 15px;
   align-items: center;
`;
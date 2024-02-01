import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    place-content: center;
    padding-top: 50px;

    div {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        place-content: center;
    }
`;

export const Text = styled.div`
    align-items: center;
    font-size: 24px;
`;

export const Button = styled.button`
    background-color: #213435;
    color: white;
    font-size: 16px;

    border: none;
    padding: 16px;
    border-radius: 10px;
`;
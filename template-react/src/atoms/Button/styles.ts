import styled from "styled-components";

export const Button = styled.button`
    background: none;
    border-radius: 4px;
    border: 2px solid #17A4D0;
    color: #17A4D0;
    width: 130px;
    height: 42px;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    margin-left: 45px;
    box-shadow: 0px 0px 17px -8px transparent;
    cursor: pointer;
    transition: all 0.25s ease-out;

    :hover{
        background-color: #17A4D0;
        color: #fff;
        box-shadow: 0px 0px 17px -8px #17A4D0;
    }
`;  
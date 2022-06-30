import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    >div {
        width: 50%;
        padding-top: 9rem;

        >h1{
            font-size:56px;
            line-height: 84px; 
        }

        >p{
            padding-top: 2rem;
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            color: #1E255EB2;
        }
        > button{
            margin-top: 3rem;
            border: 2px solid #17A4D0;
            position: absolute;
            width: 200px;
            height: 60px;
            background: #17A4D0;
            border-radius: 100px;
            color: #fff;
            font-family:  'Poppins', sans-serif;
            transition: all 0.25s ease-out;

            &:hover{
                background-color: #fff;
                color: #17A4D0;
            }
        }
    }
`;

export const ColumnImage = styled.div`
    text-align: right;
    position: relative;

    >img{
        margin-left: 108px;
    }
`;
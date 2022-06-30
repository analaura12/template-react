import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    left: 70px;
    top: 110px;
    background: linear-gradient(135deg, #EE9AE5 0%, #5961F9 100%);;
    color: #fff;
    width: 154px;
    height: 77px;
    border-radius: 12px;
    padding: 11px;
    text-align: left;
    overflow: hidden;

    strong{
        display: block;
        // margin-top: 5px;
        font-weight: 400;
        font-size: 25px;
    }

    i{
        width: 154px;
        height: 77px;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50px;

        &.circle1{
            background: #DAAAFF;
            transform: rotate(45deg);
            z-index: 1;
            left: 65px;
            top: 50px;
        }
        &.circle2{
            background: rgba(255, 255, 255, 0.3);
            z-index: 3;
            left: 95px;
            top: -7px;
        }
        &.circle3{
            background: rgba(255, 255, 255, 0.3);
            transform: rotate(-72.7deg);
            border: 1px solid #fff;
            z-index: 2;
            top: -62px;
            left: 45px;
        }
    }
`;

export const DivArrowFlex = styled.div`
    display: flex;
    align-items:  center;

    img{
        height: 20px;
        top: 0;
        margin: 0;
        padding-left: 6px;
    }
`;
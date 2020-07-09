import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 0;
    height: 0;
    border-top: 120px solid orange;
    border-right: 120px solid transparent;
    border-left: 120px solid transparent;
    
    font-size: 40px;
    position: absolute;
    right: -120px;
    top: 50px;
`;

const Loader = styled.div`
width: 60px;
height: 60px;
    border-top: 10px solid red;
    border-right: 10px solid white;
    border-left: 10px solid orange;
    border-bottom: 10px solid skyblue; 
border-radius: 30px;

position: absolute;
top: -90px;
right: 30px;
animation: turnLoader 1s infinite;
@keyframes turnLoader{
        0%{
            transform: rotateZ(0deg)
        }
        100%{
            transform: rotateZ(360deg)
        }
    }
`

export default () => <Container>
    <Loader>

    </Loader></Container>;
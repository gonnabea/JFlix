import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    position: relative;
    top: -75px;
    background-color: white;
    animation: turnLoader 1s infinite;
    @keyframes turnLoader{
        0%{
            transform: rotateZ(0deg)
        }
        100%{
            transform: rotateZ(360deg)
        }
    }
`;

export default () => <Container>
    <span role="img" aria-label="Loading">
    🧭
    </span></Container>;
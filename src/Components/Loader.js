import React from "react";
import styled from "styled-components";
import Loader from "./3dCube";

const Container = styled.section`
width: 100vw;
height: 100vh;
top: 0;
position: fixed;
display: flex;
justify-content:center;
align-items: center;
filter:drop-shadow(16px 16px 20px #45E7B6) ;
`

const LoadingMsg = styled.p`
width: 100%;
height: 100%;
font-size: 25px;
font-weight: 700;
display: flex;
justify-content: center;
align-items: center;
`



export default () => 
<Container>
    <Loader 
    width={"300px"} 
    frontBg={"black"} 
    front={<LoadingMsg>Now Loading...</LoadingMsg>}
    left={<LoadingMsg>Now Loading...</LoadingMsg>}
    right={<LoadingMsg>Now Loading...</LoadingMsg>}
    back={<LoadingMsg>Now Loading...</LoadingMsg>}
    top={<LoadingMsg>Now Loading...</LoadingMsg>}
    bottom={<LoadingMsg>Now Loading...</LoadingMsg>}
    />
</Container>;
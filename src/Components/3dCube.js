import React from "react";
import styled from "styled-components";

const Container = styled.div`

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d; /* 이것을 설정해 주어야 rotate를 했을 때 3d의 형태로 보인다. */
    :hover{
    animation: rotateBox 1s forwards linear;
    }
    @keyframes rotateBox{
        from{
      
        }
        to{
            transform:  rotateY(30deg);
        }
    }
`;

const Front = styled.div`
    background-color: ${props => props.frontBg ? props.frontBg : "black"};
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    position: absolute;
    transform: translateZ(${props => props.width/2}px); /* 앞쪽으로 당김  */
    
    display: flex;  
    justify-content: center;
    align-items: center;
`;

const Back = styled.div`
    background-color: white;
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    position: absolute;
    transform: translateZ(-${props => props.width/2}px) scaleX(-1); /* scaleX: 글자 좌우 반전 */
`;

const Bottom = styled.div`
    background-color: black;
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    position:absolute;
    transform: rotateX(90deg) scaleY(-1); /* scaleY: 글자 상하 반전 */
    bottom: 0;
`;

const Top = styled.div`
    background-color: black;
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    position:absolute;
    transform: rotateX(90deg);
    top:0;
`;  

const Left = styled.div`
    background-color: ${props => props.leftBg ? props.leftBg : "black"};
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    position:absolute;
    transform: rotateY(90deg) translateZ(-${props => props.width/2}px) scaleX(-1); /* scaleY: 글자 상하 반전 */
`;

const Right = styled.div`
    background-color: black;
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    position:absolute;
    transform: rotateY(-90deg) translateZ(-${props => props.width/2}px) scaleX(-1);
`;

const Cube = ({width, front, back, bottom, top, left, right, frontBg, leftBg}) => {

    console.log(width);

    return(
    <Container width={width}>
        <Front width={width} frontBg={frontBg}>{front}</Front>
        <Back width={width}>{back}</Back>
        <Bottom width={width}>{bottom}</Bottom>
        <Top width={width}>{top}</Top>
        <Left width={width} leftBg={leftBg}>{left}</Left>
        <Right width={width}>{right}</Right>
    </Container>
    )

}


export default Cube;
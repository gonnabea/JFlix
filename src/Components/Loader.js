import React from "react"
import styled from "styled-components"
import Cube from "./3dCube"

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(16px 16px 20px #45e7b6);
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

const LoadingImg = styled.img`
  width: 100%;
  height: 100%;
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default () => (
  <Container>
    <Cube
      width={"300px"}
      frontBg={"black"}
      front={<LoadingMsg>Now Loading...</LoadingMsg>}
      left={<LoadingImg src="Interstella.jpg" />}
      right={<LoadingImg src="Harry.jpg" />}
      back={<LoadingImg src="Parasite.jpg" />}
      top={<LoadingImg src="Inception.jpg" />}
      bottom={<LoadingImg src="Joker.webp" />}
    />
  </Container>
)

import React, { useEffect, useRef } from "react"
import styled, { keyframes } from "styled-components"

const Container = styled.section`
  width: 100px;
  height: 30px;
  cursor: pointer;
`

const Outline = styled.div`
  border-radius: 40px;
  background-color: white;
  border: 5px solid ${(props) => props.outlineColor};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
const Switch = styled.div`
  border-radius: 10px;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.switchColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0px;
  @keyframes toRight {
    to {
      left: 60%;
    }
  }
  @keyframes toLeft {
    from {
      left: 60%;
    }
    to {
      left: 0;
    }
  }
`

const Text = styled.h3`
  color: ${(props) => props.textColor};
`

const ToggleBtn = ({
  text1 = "Kr",
  text2 = "Eng",
  switchColor = "#3979b1",
  outlineColor = "black",
  textColor = "white",
}) => {
  const switchRef = useRef()
  const switchStatus = useRef("left")
  const text = useRef()

  const handleToggle = () => {
    if (switchStatus.current === "left") {
      switchRef.current.style.animation = "toRight 0.6s forwards"
      switchStatus.current = "right"
      text.current.innerHTML = text2
    } else {
      switchRef.current.style.animation = "toLeft 0.6s forwards"
      switchStatus.current = "left"
      text.current.innerHTML = text1
    }
  }

  return (
    <Container onClick={handleToggle}>
      <Outline outlineColor={outlineColor}>
        <Switch switchColor={switchColor} ref={switchRef}>
          <Text textColor={textColor} ref={text}>
            {text.current ? text.current.innerHTML : text1}
          </Text>
        </Switch>
      </Outline>
    </Container>
  )
}
export default ToggleBtn

// 테두리,스위치, 텍스트 색상 커스텀 가능, 텍스트 1, 2 설정 가능

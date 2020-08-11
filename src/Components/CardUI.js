import React from "react"
import styled, { keyframes } from "styled-components"
import PropTypes from "prop-types"

const showArea = (height) => keyframes`
    from{
        height: 0;
    }
    to{
        height:inherit;
        opacity: 1;
    }
`
const Container = styled.section`
  position: relative;
  padding: 5px;
  background-color: ${(props) => props.backgroundColor};
  border: solid 3px ${(props) => (props.borderColor ? props.borderColor : "orange")};
  :hover {
    div:nth-child(n) {
      animation: ${(props) => showArea(props.height)} 0.3s forwards;
    }
    main:nth-child(n) {
      animation: opacity 0.3s forwards;
    }
  }
  @keyframes opacity {
    to {
      opacity: 1;
    }
  }
`

const MainContent = styled.main`
  opacity: 0.7;
  padding: 0;
  margin-bottom: -4px;
`

const TextArea = styled.div`
  height: 0;
  opacity: 0;
`

const CardUI = ({ main, textArea, backgroundColor, borderColor }) => {
  return (
    <Container backgroundColor={backgroundColor} borderColor={borderColor}>
      <MainContent>{main}</MainContent>
      <TextArea>{textArea}</TextArea>
    </Container>
  )
}

CardUI.propTypes = {
  main: PropTypes.element,
  textArea: PropTypes.element,
}

export default CardUI

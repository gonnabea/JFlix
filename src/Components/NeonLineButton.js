import React from "react"
import styled, { keyframes } from "styled-components"
import PropTypes from "prop-types"

const lining = () => keyframes`
    to{
            width:100%;
            height:100%;
        }
    `

const fill = (props) => keyframes`
        50%{    
            background-color: transparent;
            color: ${props.color || "#21E9FE"};
            box-shadow: none;
        }
        100%{
            background-color: ${props.color || "#21E9FE"};
            color: black;
            box-shadow: 0 0 30px ${props.color || "#21E9FE"};;
        }
`

const Container = styled.a`
  width: ${(props) => (props.width ? props.width : "100px")};
  height: calc(${(props) => (props.width ? props.width : "100px")} / 3);
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#21E9FE")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  font-family: fantasy;
  font-size: calc(${(props) => (props.width ? props.width : "100px")} / 7);
  color: ${(props) => (props.detector ? "black" : props.color || "none")};
  animation: ${(props) => (props.detector ? fill : null)} 0.5s forwards;
  div:nth-child(n) {
    animation: ${(props) => (props.detector ? lining : null)} 0.25s forwards;
  }
  :hover {
    div:nth-child(n) {
      animation: ${lining} 0.5s forwards;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`

const Pseudo = styled.div`
  width: calc(${(props) => (props.width ? props.width : "100px")} / 10);
  height: calc(${(props) => (props.width ? props.width : "100px")} / 10);
  border-left: solid 2px ${(props) => (props.color ? props.color : "#21E9FE")};
  border-top: solid 2px ${(props) => (props.color ? props.color : "#21E9FE")};
  position: absolute;
  left: -1px;
  top: -1px;
  background-color: transparent;
`

const Pseudo2 = styled.div`
  width: calc(${(props) => (props.width ? props.width : "100px")} / 10);
  height: calc(${(props) => (props.width ? props.width : "100px")} / 10);
  border-right: solid 2px ${(props) => (props.color ? props.color : "#21E9FE")};
  border-bottom: solid 2px ${(props) => (props.color ? props.color : "#21E9FE")};
  position: absolute;
  right: -1px;
  bottom: -1px;
  background-color: transparent;
`

const NeonLineButton = ({ text, width, color, detector }) => (
  <Container width={width} detector={detector} color={color}>
    <Pseudo width={width} color={color} />
    {text ? text : "BUTTON"}
    <Pseudo2 width={width} color={color} />
  </Container>
)

NeonLineButton.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  detector: PropTypes.bool,
}

export default NeonLineButton

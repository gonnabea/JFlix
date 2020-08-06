import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
    width: ${props => props.width ? props.width :"100px"};
    height: ${props => props.width ? props.width :"100px"};
    border-radius: 100%;
    border: solid 6px white;
    background-color: black;
    color: white;
    outline: none;
    font-size: 16px;
    filter: drop-shadow(16px 16px 20px black);
    cursor: pointer;
    position: relative;
    :active{
       
        animation: pressed 0.05s forwards;
    }
    @keyframes pressed {
        from{
            top: 0px;
            filter: drop-shadow(16px 16px 20px black);
            
        }
        to{
            top: 3px;
        filter: drop-shadow(0px 0px 20px black);
                
        }
    }
`;

const CircleButton = ({width, text}) => <Button width={width} text={text}>
    {text ? text : "Use Text attr"}
</Button>

CircleButton.propTypes = {
    width: PropTypes.string,
    text: PropTypes.string
}


export default CircleButton;
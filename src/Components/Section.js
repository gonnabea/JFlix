import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
width:100%;
padding: 0px 10px;
:not(:last-child){
margin-bottom: 50px;
  }
`;

const Title = styled.cite`
font-size: 20px;
font-weight: 700;
color: orange;
`;

const Flex = styled.div`
margin-top: 25px;
display: flex;
/* display: grid; */
/* grid-template-columns: repeat(auto-fill, 125px); */
overflow: hidden;
/* grid-gap: 25px; */
position: relative;

`;

const SlideBtn = styled.button`
position: sticky;
${ props => props.direction ==="right" ? {right:"0"} : {left:"0"}};
top:0;
height: 250px;
z-index: 100;
background-color: rgba(0,0,0,0.3);
font-size: 50px;
color: white;
font-weight: 700;
cursor: pointer;
:hover{
    background-color: black;
}
`

const Section = ({title, children}) => (
    <Container>
        <Title>{title}</Title>
        <Flex id="flex">
        <SlideBtn onClick={(e) => sliding({e, direction:"left"})} direction="left">{`<`}</SlideBtn>
            {children}
        <SlideBtn onClick={(e) => sliding({e, direction:"right"})} direction="right">{`>`}</SlideBtn>
        </Flex>
    </Container>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}


const sliding = ({e, direction}) => {
    const { parentNode : flexBox } = e.target;
    const getDirection = direction === "left" ? -800 : 800;
    flexBox.scroll({
        left:flexBox.scrollLeft + getDirection,
        behavior:"smooth"
    });
}

export default Section;

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

const Title = styled.span`
font-size: 15px;
font-weight: 700;
`;

const Grid = styled.div`
margin-top: 25px;
display: grid;
grid-template-columns: repeat(auto-fill, 125px);
grid-gap: 25px;
`;

const Section = ({title, children}) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Section;

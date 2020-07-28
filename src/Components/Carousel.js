import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
    width: 100%;
    height: 100%;
`;

const Contents = styled.main`
    width: ${props => props.width ? props.width : "100px"};
    height: ${props => props.height ? props.height : "100px"};
    overflow-x: hidden;
    display: flex;
    
`;

const Controller = styled.div`
    display: flex;
    justify-content: center;
`;

const Order = styled.button`
    font-size: 18px;
    border:none;
    color: rgb(27%, 91%, 71%);
    background-color: black;
    margin: 10px;
    cursor: pointer;
    :hover{
        color: white;
    }
    
`;

const InfoArea = styled.div`

`; // this is optional


class Carousel extends Component {
    
    state = {
        controlArea: [],
        contents: null
    }

    async componentDidMount(contents){
        const contentsLength = document.getElementById("slider").childNodes.length;
        let orders = [];
        for( let i=0; i < contentsLength ; i++){
            orders.push(<Order onClick={() => sliding(i)}>{i+1}</Order>)
        }
        this.setState({ controlArea: orders, contents});
        
    }

    render(){
        return  <Container>
            <Contents id="slider" width="100%" height="90%">
                {this.props.contents}
            </Contents>
            <Controller id="controlArea">
                {this.state.controlArea}
            </Controller>
            <InfoArea>

            </InfoArea>
        </Container>
    }
}





const sliding = (index) => {
    const slider = document.getElementById("slider");
    const sliderLength = slider.childNodes.length;

    slider.scrollTo({
        left: (slider.scrollWidth / sliderLength) * index,
        behavior: "smooth"
    });
}

export default Carousel;

import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
    width: 100%;
    position: absolute;
    display:${props => props.display};
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.9);
    top: 0;
    left: 0;
    z-index: 999;
    @media only screen and (max-width: 600px){
        flex-direction: column;
    }
`
const Content = styled.div`
display: flex;
flex-direction: column;
`

const Name = styled.cite`
    font-weight: 700;
    font-size: 20px;
    color: orange;
    margin-right: 30px;
    margin-bottom: 10px;
`
const AirDate = styled.span`
    color: rgba(255,255,255,0.7);
    margin-bottom: 10px;
`

const Overview = styled.p`
    line-height: 30px;
    width: 90%;
`
const Poster = styled.img`
    width: 200px;
    height: 300px;
    margin-right: 20px;
`;

const Count = styled.span`
    margin-bottom: 10px;
`


class Season extends Component{

    render(){
       const { season, display } = this.props
        console.log(season)
        if(season){
       return <Container display={display}>
           <Poster src={season.poster_path ? `https://image.tmdb.org/t/p/w300${season.poster_path}` : "https://www.freeiconspng.com/uploads/no-image-icon-21.png"}></Poster>
           <Content>
            <Name>{season.name}</Name>
            <AirDate>{season.air_date}</AirDate>
            <Count>{season.episode_count} episodes </Count>
            <Overview>{season.overview}</Overview>
           </Content>
       </Container>
        }
        return "";
    }   
}

export default Season;
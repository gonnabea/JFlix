import React, { Component } from "react";
import styled from "styled-components";
import Season from "./Season";

const Container = styled.section`
   

`;

const MenuLine = styled.header`
display: flex;
`;

const Menu  = styled.button`
    padding: 5px;
    font-weight: 700;
    font-size: 16px;
    border-radius: 5px;
`

const Screen = styled.div`
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 30px;
    font-size: 20px;
    color: orange;
    font-weight: 500;
    overflow: auto;
    border-radius: 5px;
    padding: 50px 20px 20px 0;
    
`;

const LogoImg = styled.img`
    width: 50px;
    height: 40px;
    margin-left: 20px;
    background-color: white;
`

const InfoLine = styled.div`
    display: flex;
    align-items: center;
    width: 320px;
    margin: 0 20px;
    justify-content: space-between;
    border: solid 1px;
    padding: 5px;
    :hover{
        background-color: white;
        color: black;
    }
    cursor: pointer;
    @media only screen and (max-width: 320px){
        width: 300px;
    }
`

const SeasonContainer = styled.section`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 10px;
overflow-x: auto;

`

const SeasonInfo = styled.section`
    display: flex;
    flex-direction: column;
    background-color: white;   
    color: black; 
    cursor: pointer;
`
const SeasonPoster = styled.img`
    width: 100px;
    height: 150px;
`
const SeasonName = styled.span`
display: flex;
align-self: center;
`

const ExitBtn = styled.div`
position: fixed;
top: 70px;
right: 50px;
font-size: 25px;
color: white;
z-index: 1000;
display: none;
cursor: pointer;
color: pink;
`



class InfoTap extends Component{
    state = {
        data: this.props.overview,
        season: null,
        display: "none"
    }

    select = (selected) => {
        
        if(selected === "overview"){
            this.setState({data: this.props.overview})
        }
        else if(selected === "companies"){
            const companies = this.props.companies.map( company => {
            return <InfoLine>{company.name} {company.logo_path !== null ? <LogoImg src={`https://image.tmdb.org/t/p/w300${company.logo_path}`} alt="logo_image"/> : null} </InfoLine>
            })
            this.setState({data: companies})
        }
        else if(selected === "countries"){
            const countries = this.props.countries.map( country => <InfoLine>{`${country.name} (${country.iso_3166_1})`}</InfoLine>);
            this.setState({data: countries})
        }
        else{
            const seasons = this.props.seasons.map( season => 
            <SeasonInfo onClick={() => this.callSeason(season)}>
                <SeasonPoster src={season.poster_path ? `https://image.tmdb.org/t/p/w300${season.poster_path}` : "https://www.freeiconspng.com/uploads/no-image-icon-21.png"} alt="poster_path" />
                <SeasonName>{season.name}</SeasonName>
                
            </SeasonInfo>);
            this.setState({data: <SeasonContainer>{seasons}</SeasonContainer>})
        }
    }

    callSeason = (season) => {
        const exitBtn = document.getElementById("exitBtn");
        exitBtn.style.display = "block";
        this.setState({season, display:"flex"})
    }
    
    exitSeason = (e) => {
        this.setState({display: "none"})
        e.target.style.display= "none";
    }

    render(){

        return(
            <Container>
                <MenuLine>
                    <Menu onClick={() => this.select("overview")}>Overview</Menu>
                    <Menu onClick={() => this.select("companies")}>Companies</Menu>
                    <Menu onClick={() => this.select("countries")}>Countries</Menu>
                    <Menu onClick={() => this.select("seasons")}>Seasons</Menu>
                </MenuLine>
                <Screen>
                   {this.state.data}
                </Screen>
                <ExitBtn onClick={this.exitSeason} id="exitBtn">X</ExitBtn>
                <Season season={this.state.season} display={this.state.display} />
            </Container>
        )
    }
} 


export default InfoTap;
import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`

`;

const MenuLine = styled.header`

`;

const Menu  = styled.button`

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
    color: white;
    font-weight: 500;
    overflow: auto;
    border-radius: 5px;
    padding: 0 50px;
`;

const LogoImg = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 20px;
    background-color: white;
`

const InfoLine = styled.div`
    display: flex;
    align-items: center;
    width: 320px;
    height: 40px;
    justify-content: space-between;
    border: solid 1px;
    :hover{
        background-color: white;
        color: black;
    }
    cursor: pointer;
`

class InfoTap extends Component{
    state = {
        data: this.props.overview
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
        else{
            const countries = this.props.countries.map( country => <InfoLine>{`${country.name} (${country.iso_3166_1})`}</InfoLine>);
            this.setState({data: countries})
        }
    }

    render(){
        return(
            <Container>
                <MenuLine>
                    <Menu onClick={() => this.select("overview")}>Description</Menu>
                    <Menu onClick={() => this.select("companies")}>Production Companies</Menu>
                    <Menu onClick={() => this.select("countries")}>Production Countries</Menu>
                </MenuLine>
                <Screen>
                   {this.state.data}
                </Screen>
            </Container>
        )
    }
} 


export default InfoTap;
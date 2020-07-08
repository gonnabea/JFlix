import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`

`;

const MenuLine = styled.header`

`;

const Menu  = styled.button`

`

const Screen = styled.div`
    background-color: rgba(0,0,0,0.3);
    width: 100%;
    height: 500px;
`;

class InfoTap extends Component{

    state = {
        data: ""
    }

    componentDidMount(){
        console.log(this.props)
    }

    select = (selected) => {
        console.log(selected)
        if(selected === "overview"){
            this.setState({data: this.props.overview})
        }
        else if(selected === "companies"){
            const companies = this.props.companies.map( company => {
                return <h2>{company.name}</h2>
            })
            this.setState({data: companies})
        }
        else{
            const countries = this.props.countries.map( country => <h2>{country.name}</h2>);
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
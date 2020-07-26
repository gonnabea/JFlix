import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
background-color: rgba(255,255,255,0.9);
height: 50px;
display: flex;
align-items: center;
box-shadow: 0 0 20px #45E7B6;
animation: mouseOut 0.3s forwards;
position: fixed;
top: 0;
width: 100vw;
font-size: 18px;
z-index: 100;
height: 10vh;
font-weight: 500;
:hover{
    background-color: rgba(255,255,255,1);
    transition: background-color 0.3s;
}

`

const List = styled.ul`
display: flex;

`

const Item = styled.li`
width: 100px;
height: 50px;
text-align: center;
display: flex;
justify-content: center;
`

const SLink = styled(Link)`
height: 100%;
color: black;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
border-radius: 15px;
background-color: ${props => props.current ? "#45E7B6" : "tansparent"};
border-bottom: ${props => props.current ? "solid 2px white" : "none"};
transition: border-bottom 0.1s ease-in-out;
:hover{
    
}
`



export default withRouter(({location: {pathname}}) => (
    
    <Header>
        {console.log(pathname)}
        <List>
            <Item >
                <SLink current={pathname === "/"} to="/">Movie</SLink>
            </Item>
            <Item >
                <SLink current={pathname === "/tv"} to="/tv">TV</SLink>
            </Item>
            <Item>
                <SLink current={pathname === "/search"} to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
))
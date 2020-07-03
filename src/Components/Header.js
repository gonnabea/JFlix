import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
color: white;
height: 50px;
display: flex;
align-items: center;
box-shadow: 0 0 10px skyblue;
animation: mouseOut 0.3s forwards;
position: fixed;
top: 0;
width: 100vw;
font-size: 15px;
font-weight: 700;
z-index: 999;
:hover{
    color: white;
    animation: mouseOn 0.3s forwards;
}

@keyframes mouseOn{
    from{
        background-color: rgba(20,20,20,1);
    }
    to{
        background-color: #801DFD;
    }
}
@keyframes mouseOut{
    from{
        background-color: #801DFD;
    }
    to{
        background-color: rgba(20,20,20,1);
    }
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
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.current ? "#801DFD" : "tansparent"};
border-bottom: ${props => props.current ? "solid 2px skyblue" : "none"};
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
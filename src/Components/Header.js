import React from "react"
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components"
import ToggleBtn from "./toggleBtn"
import toggleBtn from "./toggleBtn"
// import Cube from "./3dCube";

const Header = styled.header`
  background-color: rgba(255, 255, 255, 0.9);
  height: 50px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 20px #45e7b6;
  animation: mouseOut 0.3s forwards;
  position: fixed;
  top: 0;
  width: 100vw;
  font-size: 18px;
  z-index: 999;
  height: 10vh;
  font-weight: 500;
  :hover {
    background-color: rgba(255, 255, 255, 1);
    transition: background-color 0.3s;
  }

  @keyframes showHeader {
    from {
      top: -100px;
    }
    to {
      top: 0px;
    }
  }

  @keyframes hideHeader {
    from {
      top: 0px;
    }
    to {
      top: -100px;
    }
  }
`

const List = styled.ul`
  display: flex;
  margin-left: 20px;
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
  background-color: ${(props) => (props.current ? "#45E7B6" : "tansparent")};
  transition: background-color 0.5s ease-in-out;
  :hover {
  }
`

export default withRouter(({ location: { pathname } }) => (
  <Header id="header">
    <List>
      <Item>
        <SLink current={pathname === "/"} to="/">
          Movie
        </SLink>
      </Item>
      <Item>
        <SLink current={pathname === "/tv"} to="/tv">
          TV
        </SLink>
      </Item>
      <Item>
        <SLink current={pathname === "/search"} to="/search">
          Search
        </SLink>
      </Item>
      <ToggleBtn></ToggleBtn>
    </List>
  </Header>
))

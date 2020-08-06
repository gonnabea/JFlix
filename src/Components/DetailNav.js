import React from "react"
import styled from "styled-components"
import { Link, withRouter } from "react-router-dom"
import NeonLineButton from "./NeonLineButton"
import Companies from "../Routes/Detail/DetailInfos/Companies"
import Countries from "../Routes/Detail/DetailInfos/Countries"

const Container = styled.section``

const InfoLine = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin-bottom: 20px;
`

const Screen = styled.main`
  width: 100%;
  padding-bottom: 200px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  margin-bottom: 150px;
`

const Overview = styled.p`
  font-size: 22px;
  width: 100%;
  line-height: 130%;
  font-family: "Times New Roman", Times, serif;
`

const DetailNav = withRouter(
  ({ currentUrl, location, overview, companies, countries, seasons, creators }) => (
    <Container>
      <InfoLine>
        <Link to={currentUrl}>
          <NeonLineButton
            width="120px"
            text="Overview"
            color="white"
            detector={location.pathname === currentUrl ? true : false}
          />
        </Link>
        <Link to={`${currentUrl}/companies`}>
          <NeonLineButton
            width="120px"
            text="Companies"
            color="#45E7B6"
            detector={location.pathname === `${currentUrl}/companies` ? true : false}
          />
        </Link>
        <Link to={`${currentUrl}/countries`}>
          <NeonLineButton
            width="120px"
            text="Countries"
            color="#45E7B6"
            detector={location.pathname === `${currentUrl}/countries` ? true : false}
          />
        </Link>
      </InfoLine>
      <Screen>
        {location.pathname === currentUrl ? <Overview>{overview}</Overview> : null}
        {location.pathname === `${currentUrl}/companies` ? (
          <Companies companies={companies} />
        ) : null}
        {location.pathname === `${currentUrl}/countries` ? (
          <Countries countries={countries} />
        ) : null}
      </Screen>
    </Container>
  )
)

export default DetailNav

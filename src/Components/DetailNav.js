import React from "react"
import styled from "styled-components"
import { Link, withRouter } from "react-router-dom"
import NeonLineButton from "./NeonLineButton"
import Companies from "../Routes/Detail/DetailInfos/Companies"
// import Countries from "../Routes/Detail/DetailInfos/Countries"
import Seasons from "../Routes/Detail/DetailInfos/Seasons"

const Container = styled.section``

const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-bottom: 20px;
  @media screen and (max-width: 420px) {
    width: 320px;
  }
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

const Countries = styled.section`
  opacity: 0.7;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  color: #45e7b6;
`

const DetailNav = withRouter(
  ({
    currentUrl,
    location,
    overview,
    companies,
    countries,
    seasons,
    creators,
    recommendations,
    credits,
  }) => (
    <Container>
      {console.log(recommendations, credits)}
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
            // color="#45E7B6"
            detector={location.pathname === `${currentUrl}/companies` ? true : false}
          />
        </Link>
        {/* <Link to={`${currentUrl}/countries`}>
          <NeonLineButton
            width="120px"
            text="Countries"
            color="#45E7B6"
            detector={location.pathname === `${currentUrl}/countries` ? true : false}
          />
        </Link> */}
        <Link to={`${currentUrl}/recommendations`}>
          <NeonLineButton
            width="120px"
            text="recommend"
            detector={location.pathname === `${currentUrl}/recommendations` ? true : false}
          />
        </Link>
        {location.pathname.includes("/show") ? (
          <Link to={`${currentUrl}/seasons`}>
            <NeonLineButton
              width="120px"
              text="Season"
              detector={location.pathname === `${currentUrl}/seasons` ? true : false}
            />
          </Link>
        ) : null}
      </InfoLine>
      <Screen>
        {location.pathname === currentUrl ? (
          <Overview>
            {overview}
            <Countries>
              {countries && countries.length > 0
                ? countries.map((country) => (
                    <InfoLine>{`${country.name} (${country.iso_3166_1})`}</InfoLine>
                  ))
                : ""}
            </Countries>
          </Overview>
        ) : null}
        {location.pathname === `${currentUrl}/companies` ? (
          <Companies companies={companies} />
        ) : null}
        {/* {location.pathname === `${currentUrl}/countries` ? (
          <Countries countries={countries} />
        ) : null} */}
        {location.pathname === `${currentUrl}/seasons` && location.pathname.includes("/show") ? (
          <Seasons seasons={seasons} />
        ) : null}
      </Screen>
    </Container>
  )
)

export default DetailNav

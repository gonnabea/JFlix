import React from "react"
import styled from "styled-components"
import { Link, withRouter, Route } from "react-router-dom"
import NeonLineButton from "./NeonLineButton"
import Companies from "../Routes/Detail/DetailInfos/Companies"
// import Countries from "../Routes/Detail/DetailInfos/Countries"
import Seasons from "../Routes/Detail/DetailInfos/Seasons"
import CardUI from "./CardUI"
import Section from "./Section"
import Collections from "../Hooks/Collections"

const Container = styled.section``

const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-bottom: 20px;
  @media screen and (max-width: 950px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 500px) {
    width: 320px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
`

const Screen = styled.main`
  width: 100%;
  padding-bottom: 200px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  padding-bottom: 50px;
  margin-bottom: 50px;
`

const Overview = styled.p`
  font-size: 22px;
  width: 100%;
  line-height: 130%;
  font-family: "Times New Roman", Times, serif;
  margin-bottom: 50px;
`

const Countries = styled.section`
  opacity: 0.7;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  color: #45e7b6;
`

const Casts = styled.div``

const CardContainer = styled.section`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 86px;
`

const PersonImg = styled.img`
  width: 160px;
  @media screen and (max-width: 420px) {
    width: 100px;
  }
`

const DetailNav = withRouter(
  ({ currentUrl, location, overview, companies, countries, seasons, recommendations, credits }) => (
    <Container>
      {console.log(recommendations, credits)}
      <InfoLine>
        <Link style={{ marginRight: "20px" }} to={currentUrl}>
          <NeonLineButton
            width="140px"
            text="Overview"
            color="white"
            detector={location.pathname === currentUrl ? true : false}
          />
        </Link>
        <Link style={{ marginRight: "20px" }} to={`${currentUrl}/companies`}>
          <NeonLineButton
            width="140px"
            text="Companies"
            // color="#45E7B6"
            detector={location.pathname === `${currentUrl}/companies` ? true : false}
          />
        </Link>
        <Link
          style={{ marginRight: "20px" }}
          to={{ pathname: `${currentUrl}/collections`, state: recommendations }}
        >
          <NeonLineButton
            width="140px"
            text="recommend"
            detector={location.pathname === `${currentUrl}/collections` ? true : false}
          />
        </Link>
        {location.pathname.includes("/show") ? (
          <Link style={{ marginRight: "20px" }} to={`${currentUrl}/seasons`}>
            <NeonLineButton
              width="140px"
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
            <Casts>
              <Section
                children={credits.map((cast, index) => (
                  <Link to={`/person/${cast.id}`}>
                    <CardUI
                      key={index}
                      main={
                        <PersonImg
                          alt="profile"
                          src={
                            cast.profile_path
                              ? `https://image.tmdb.org/t/p/w300${cast.profile_path}`
                              : "/No_Image.jpg"
                          }
                        />
                      }
                      textArea={
                        <CardContainer>
                          <div>{cast.character}</div>
                          <div style={{ color: "grey", width: "100%", textAlign: "center" }}>
                            {cast.name}
                          </div>
                        </CardContainer>
                      }
                      backgroundColor="black"
                      borderColor="grey"
                    />
                  </Link>
                ))}
              />
            </Casts>
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
        {location.pathname === `${currentUrl}/collections` && currentUrl.includes("movie") ? (
          <Route path="/movie/:id/collections" component={Collections} />
        ) : (
          <Route path="/show/:id/collections" component={Collections} />
        )}
      </Screen>
    </Container>
  )
)

export default DetailNav

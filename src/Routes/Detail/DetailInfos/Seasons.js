import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Selector from "../../../Components/Selector"

const Container = styled.div`
  flex-shrink: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
    height: auto;
  }
`

const Poster = styled.img`
  width: 30%;
  height: 90%;
  @media screen and (max-width: 1050px) {
    width: 90%;
    height: auto;
  }
`

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

const Name = styled.cite`
  font-size: 22px;
  font-family: fantasy;
  margin-bottom: 15px;
  margin-top: 15px;
`

const Overview = styled.p`
  font-size: 18px;
  opacity: 0.8;
  margin-bottom: 15px;
`

const AirDate = styled.div`
  margin-bottom: 20px;
`

const Episodes = styled.div`
  margin-bottom: 20px;
`

class Seasons extends Component {
  componentDidMount() {}

  render() {
    const { seasons } = this.props
    console.log(seasons)
    return seasons.length !== 0 && seasons ? (
      <Selector
        width="100%"
        contents={seasons.map((season, index) => {
          return (
            <Container key={index}>
              <Poster
                src={
                  season.poster_path
                    ? `https://image.tmdb.org/t/p/w300${season.poster_path}`
                    : "/No_Image.jpg"
                }
              />
              <InfoArea>
                <Name>{season.name}</Name>
                <AirDate>{season.air_date}</AirDate>
                <Episodes>{season.episode_count} Episodes</Episodes>
                <Overview>
                  {season.overview !== "" ? season.overview.substring(0, 300) + "..." : ""}
                </Overview>
              </InfoArea>
            </Container>
          )
        })}
      />
    ) : (
      "No Seasons Info Found. Sorry!"
    )
  }
}

Seasons.propTypes = {
  seasons: PropTypes.string,
  display: PropTypes.string,
}

export default Seasons

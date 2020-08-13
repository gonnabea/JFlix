import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "../../Components/Section"
import Loader from "../../Components/Loader"
import Message from "Components/Message"
import Poster from "../../Components/Poster"
import { Helmet } from "react-helmet"
import MorePoster from "../../Components/MorePoster"

const Container = styled.div`
  padding: 10vh 20px;
`

const ListContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`

const Lists = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 1450px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const TVPresenter = ({ topRated, popular, airingTodays, loading, error, onTheAir, pageLoading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated TV Shows">
          <Helmet>
            <title>TV | Nomflix-Jiwon</title>
          </Helmet>
          {topRated.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.original_name}
              rating={show.vote_average}
              overview={show.overview}
              year={show.first_air_date ? show.first_air_date.substring(0, 4) : ""}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular TV Shows">
          {popular.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.original_name}
              rating={show.vote_average}
              overview={show.overview}
              year={show.first_air_date ? show.first_air_date.substring(0, 4) : ""}
            />
          ))}
        </Section>
      )}
      {airingTodays && airingTodays.length > 0 && (
        <Section title="Airing Today">
          {airingTodays.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.original_name}
              rating={show.vote_average}
              overview={show.overview}
              year={show.first_air_date ? show.first_air_date.substring(0, 4) : ""}
            />
          ))}
        </Section>
      )}
      <ListContainer>
        <Lists>
          {pageLoading === false || pageLoading === null ? (
            onTheAir.map((onTheAir) =>
              onTheAir.map((show) => (
                <MorePoster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  name={show.original_name}
                  rating={show.vote_average}
                  year={show.first_air_date ? show.first_air_date.substring(0, 4) : ""}
                />
              ))
            )
          ) : (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          )}
        </Lists>
      </ListContainer>
      {error && <Message text={error}></Message>}
    </Container>
  )

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingTodays: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
}

export default TVPresenter

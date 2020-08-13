import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "Components/Section"

import Message from "Components/Message"
import Poster from "Components/Poster"
import Helmet from "react-helmet"
import Loader from "../../Components/Loader"
import MorePoster from "Components/MorePoster"

const Container = styled.div`
  padding: 10vh 20px;
`

const ListTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #21e9fe;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin-bottom: 30px;
  width: 100%;
  text-align: center;
`

const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`

const ListContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
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

const HomePresenter = ({
  nowPlaying,
  upcoming,
  popular,
  error,
  loading,
  topRated,
  onScroll,
  pageLoading,
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container onScroll={onScroll}>
      {console.log(topRated)}
      <Helmet>
        <title>Movies | Nomflix-Jiwon</title>
      </Helmet>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date.substring(0, 4) : ""}
              overview={movie.overview}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date.substring(0, 4) : ""}
              overview={movie.overview}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date.substring(0, 4) : ""}
              overview={movie.overview}
              isMovie={true}
            />
          ))}
        </Section>
      )}

      <ListContainer>
        <Lists>
          {pageLoading === false || pageLoading === null ? (
            topRated.map((topRated) =>
              topRated.map((movie) => (
                <MorePoster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  name={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date ? movie.release_date.substring(0, 4) : ""}
                  isMovie={true}
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
      {error && <Message color="red" text={error}></Message>}
      {}
    </Container>
  )

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
}

export default HomePresenter

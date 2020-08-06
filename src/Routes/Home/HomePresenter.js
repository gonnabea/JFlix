import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "Components/Section"

import Message from "Components/Message"
import Poster from "Components/Poster"
import Helmet from "react-helmet"
import EmptySpace from "Components/EmptySpace"
import Loader from "../../Components/Loader"

const Container = styled.div`
  padding: 10vh 20px;
`

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {console.log()}
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
          <EmptySpace />
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
          <EmptySpace />
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
          <EmptySpace />
        </Section>
      )}
      {error && <Message color="red" text={error}></Message>}
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

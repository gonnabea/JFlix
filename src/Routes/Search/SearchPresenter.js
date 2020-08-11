import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Loader from "../../Components/Loader"
import Section from "../../Components/Section"
import Message from "Components/Message"
import Poster from "Components/Poster"
import EmptySpace from "../../Components/EmptySpace"
import { Helmet } from "react-helmet"

const Container = styled.div`
  padding: 10vh 1%;
`

const Form = styled.form`
  width: 98%;
`

const Input = styled.input`
  position: relative;
  top: 50px;
  all: unset;
  font-size: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  padding-left: 15px;
  width: 100%;
  height: 60px;
  border-bottom: solid 1px orange;
  animation: nonFocused 0.5s forwards;
  :focus {
    animation: focused 0.5s forwards;
    ::placeholder {
      color: white;
      opacity: 0.8;
      display: flex;
      align-items: center;
    }
  }
  @media only screen and (min-width: 900px) {
    @keyframes focused {
      from {
        box-shadow: none;
        width: 30%;
      }

      to {
        box-shadow: 5px 5px 10px orange;
        width: 100%;
      }
    }
    @keyframes nonFocused {
      from {
        box-shadow: 5px 5px 10px orange;
        width: 100%;
      }
      to {
        box-shadow: none;
        width: 30%;
      }
    }
  }
`

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
  updateTerm,
}) => (
  <Container>
    <Helmet>
      <title>Search | Nomflix-Jiwon</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                overview={movie.overview}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date && show.first_air_date.substring(0, 4)}
                overview={show.overview}
              />
            ))}
          </Section>
        )}
      </>
    )}
    {error && <Message color="red" error={error} />}
    {movieResults && tvResults && movieResults.length === 0 && tvResults.length === 0 && (
      <Message color="grey" text="Nothing Found. Please try again!" />
    )}
  </Container>
)

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
  updateTerm: PropTypes.func.isRequired,
}

export default SearchPresenter

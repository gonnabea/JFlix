import React, { Component } from "react"
import SearchPresenter from "./SearchPresenter"
import { moviesApi, tvApi } from "../../api"

class SearchContainer extends Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null,
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { searchTerm } = this.state
    if (searchTerm !== "") {
      this.searchByTerm(searchTerm)
    }
  }

  updateTerm = (e) => {
    const {
      target: { value },
    } = e
    this.setState({
      searchTerm: value,
    })
  }

  searchByTerm = async () => {
    const { searchTerm } = this.state
    this.setState({ loading: true })
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm)
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm)
      console.log(movieResults, tvResults)
      this.setState({
        movieResults,
        tvResults,
      })
    } catch {
      this.setState({ error: "Can't find result. Please try again 😅" })
    } finally {
      this.setState({ loading: false })
    }
  }

  render() {
    console.log(this.state)
    const { movieResults, tvResults, searchTerm, loading, error } = this.state

    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    )
  }
}

export default SearchContainer

import React, { Component } from "react"
import HomePresenter from "./HomePresenter"
import { moviesApi } from "api"
import TopRated from "./TopRated"

export default class extends Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true,
  }

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying()
      const {
        data: { results: upComing },
      } = await moviesApi.upComing()
      const {
        data: { results: popular },
      } = await moviesApi.popular()
      this.setState({
        nowPlaying,
        upComing,
        popular,
      })
    } catch {
      this.setState({
        error: "Can't find movies information.",
      })
    } finally {
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const { nowPlaying, upComing, popular, error, loading } = this.state
    console.log(this.state)
    return (
      <>
        <HomePresenter
          nowPlaying={nowPlaying}
          upcoming={upComing}
          popular={popular}
          error={error}
          loading={loading}
        />
        <TopRated />
      </>
    )
  }
}

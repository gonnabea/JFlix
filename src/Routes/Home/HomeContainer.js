import React, { Component } from "react"
import HomePresenter from "./HomePresenter"
import { moviesApi } from "api"

export default class extends Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true,
    topRated: null,
    scroll: null,
    page: 1,
    pageLoading: null,
  }
  savedTopRated = []

  constructor(props) {
    super(props)
    this.handleScroll.bind(this)
  }

  handleScroll = async () => {
    if (
      window.innerHeight + window.scrollY + 2 > document.body.offsetHeight &&
      this.state.page <= 8
    ) {
      try {
        this.setState({ pageLoading: true })
        this.setState({ page: this.state.page + 1 })
        window.scrollTo(0, window.scrollY)

        console.log(this.state.page)

        const {
          data: { results: topRated },
        } = await moviesApi.topRated(this.state.page)

        this.setState({ topRated: this.state.topRated })
        this.savedTopRated.push(topRated)
      } catch (error) {
        console.log(error)
      } finally {
        this.setState({ pageLoading: false })
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }
  async componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
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
      const {
        data: { results: topRated },
      } = await moviesApi.topRated(this.state.page)
      this.setState({
        nowPlaying,
        upComing,
        popular,
        topRated,
      })
      this.savedTopRated.push(topRated)
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
    const { nowPlaying, upComing, popular, error, loading, pageLoading } = this.state
    console.log(this)
    return (
      <>
        <HomePresenter
          onScroll={this.handleScroll}
          nowPlaying={nowPlaying}
          upcoming={upComing}
          popular={popular}
          error={error}
          loading={loading}
          topRated={this.savedTopRated}
          pageLoading={pageLoading}
        />
      </>
    )
  }
}

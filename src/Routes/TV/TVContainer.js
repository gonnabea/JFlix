import React, { Component } from "react"
import TVPresenter from "./TVPresenter"
import { tvApi } from "api"

class TVContainer extends Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null,
    onTheAir: null,
    scroll: null,
    page: 1,
    pageLoading: null,
  }

  constructor(props) {
    super(props)
    this.handleScroll.bind(this)
  }

  savedOnAir = []

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
          data: { results: onTheAir },
        } = await tvApi.onTheAir(this.state.page)

        this.setState({ onTheAir: this.state.onTheAir })
        this.savedOnAir.push(onTheAir)
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
        data: { results: topRated },
      } = await tvApi.topRated()
      const {
        data: { results: popular },
      } = await tvApi.popular()
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday()
      const {
        data: { results: onTheAir },
      } = await tvApi.onTheAir(this.state.page)
      this.setState({ topRated, popular, airingToday, onTheAir })
    } catch {
      this.setState({ error: "Can't find tv contents. Try later ☹" })
    } finally {
      this.setState({ loading: false })
    }
  }

  render() {
    console.log(this.state)
    console.log(this.savedOnAir)
    const { topRated, popular, airingToday, loading, error, pageLoading } = this.state

    return (
      <>
        <TVPresenter
          topRated={topRated}
          popular={popular}
          airingTodays={airingToday}
          loading={loading}
          error={error}
          onTheAir={this.savedOnAir}
          pageLoading={pageLoading}
        />
      </>
    )
  }
}

export default TVContainer

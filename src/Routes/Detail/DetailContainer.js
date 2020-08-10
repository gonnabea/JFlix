import React, { Component } from "react"
import DetailPresenter from "./DetailPresenter"
import { moviesApi, tvApi } from "../../api"

class DetailContainer extends Component {
  constructor(props) {
    console.log(props)
    super(props)
    const {
      location: { pathname },
    } = props
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
      isTV: pathname.includes("/tv/"),
      companies: null,
      currentUrl: this.props.match.url,
      recommendations: null,
      credits: null,
    }
  }

  async componentDidMount() {
    let companiesID = []
    let companies = []
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props
    const { isMovie } = this.state
    const parsedId = parseInt(id)
    if (isNaN(parsedId)) {
      return push("/")
    }
    let result = null
    if (isMovie) {
      try {
        ;({ data: result } = await moviesApi.movieDetail(parsedId))
        const recommendations = await moviesApi.recommendations(parsedId) // How can i make it simple??
        console.log(recommendations)
        const credits = await moviesApi.credits(parsedId)
        this.setState({ recommendations: recommendations.data.results, credits: credits.data.cast })
      } catch {
        this.setState({ error: "Can't find anyting" })
      } finally {
        this.setState({ loading: false, result })
      }
    } else {
      try {
        ;({ data: result } = await tvApi.showDetail(parsedId))
        const recommendations = await tvApi.recommendations(parsedId)
        const credits = await tvApi.credits(parsedId)
        this.setState({ recommendations: recommendations.data.results, credits: credits.data.cast })
      } catch {
        this.setState({ error: "Can't find anyting" })
      } finally {
        this.setState({ loading: false, result })
      }
    }
    for (let i = 0; i < result.production_companies.length; i++) {
      companiesID.push(result.production_companies[i].id)
      companies.push((await moviesApi.company(companiesID[i])).data)
    } // Get Movie Companies' Details
    console.log(result)
    console.log(companiesID)
    this.setState({ companies })
  }

  render() {
    const { result, error, loading, companies, currentUrl, recommendations, credits } = this.state
    console.log(recommendations)
    console.log(credits)
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        companies={companies}
        currentUrl={currentUrl}
        recommendations={recommendations}
        credits={credits}
      />
    )
  }
}

export default DetailContainer

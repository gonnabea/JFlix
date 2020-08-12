import React, { useState, useEffect } from "react"
import UseInfiniteScroll from "../../Hooks/UseInfiniteScroll"
import { moviesApi } from "../../api"

const TopRated = () => {
  const [topRated, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      const {
        data: { results: topRated },
      } = await moviesApi.topRated(1)
      setData(topRated)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  console.log(UseInfiniteScroll().scrollIndex)

  useEffect(() => {
    getData()
  }, [])

  return loading ? "Now loading..." : "done!" + console.log(topRated)
}

export default TopRated

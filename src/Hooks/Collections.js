import React, { useState, useEffect } from "react"
import AwesomeMenu from "../Components/AwesomeMenu"

const Collections = ({ location }) => {
  const [collections, setCollections] = useState(null)
  const [loading, setLoading] = useState(true)
  console.log(location)
  const loadData = async () => {
    try {
      setCollections(await location.state)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
    console.log(collections)
  })

  const names = collections
    ? collections.map((collection) => collection.title || collection.name)
    : null
  const links = collections
    ? collections.map((collection) =>
        location.pathname.includes("/movie")
          ? `/#/movie/${collection.id}`
          : `/#/show/${collection.id}`
      )
    : null
  const imageSrc = collections
    ? collections.map((collection) =>
        collection.poster_path
          ? `https://image.tmdb.org/t/p/w500${collection.poster_path}`
          : "/No_Image.jpg"
      )
    : null
  const descriptions = collections ? collections.map((collection) => collection.overview) : null

  return loading ? (
    "Now Loading..."
  ) : collections && collections.length > 0 ? (
    <AwesomeMenu
      names={names}
      links={links}
      imageSrc={imageSrc}
      descriptions={descriptions}
      imageWidth="250px"
      color="#21E9FE"
    />
  ) : (
    <span style={{ fontSize: "18px" }}>No Recommeded Found. Sorry!</span>
  )
}

export default Collections

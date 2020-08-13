// import React, { useState, useEffect } from "react"
// import UseInfiniteScroll from "../../Hooks/UseInfiniteScroll"
// import { moviesApi } from "../../api"
// import Loader from "../../Components/Loader"
// import styled from "styled-components"

// const TopRated = () => {
//   const [topRated, setData] = useState(null)
//   const [loading, setLoading] = useState(true)

//   const page = UseInfiniteScroll().scrollIndex
//   const getData = async () => {
//     try {
//       const {
//         data: { results: topRated },
//       } = await moviesApi.topRated(page)
//       setData(topRated)
//     } catch (error) {
//       console.log(error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   console.log(page)

//   useEffect(() => {
//     getData()
//   }, [page])

//   return loading ? <Loader /> : topRated
// }

// export default TopRated

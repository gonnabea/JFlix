import React, { useEffect, useState } from "react"

const UseInfiniteScroll = () => {
  const [scrollIndex, setIndex] = useState(1)

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY > document.body.offsetHeight) {
      setIndex((index) => index + 1)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollIndex])

  return { scrollIndex }
}

export default UseInfiniteScroll

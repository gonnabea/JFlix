import { useEffect, useState } from "react"

const UseInfiniteScroll = () => {
  const [scrollIndex, setIndex] = useState(1)

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY > document.body.offsetHeight) {
      setIndex((index) => index + 1)
      window.scrollTo(0, 0)
      document.body.style.overflow = "hidden"
      setTimeout(() => (document.body.style.overflow = "auto"), 1000)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { scrollIndex }
}

export default UseInfiniteScroll

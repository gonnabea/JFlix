import React, { useState, useEffect } from "react"
import Loader from "../Components/Loader"
import { personApi } from "../api"
import styled from "styled-components"
import AwesomeMenu from "../Components/AwesomeMenu"
import NeonLineButton from "../Components/NeonLineButton"

const Container = styled.section`
  width: 100vw;
  margin-top: calc(100vh - 80px);
  display: flex;
  margin: 80px 0 0 0;
  padding: 0;
  overflow-x: hidden;
  margin-bottom: 100px;
`
const ProfilePhoto = styled.img`
  width: 30%;
  height: 90%;
  margin-right: 50px;
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 150px;
    margin-right: 10px;
  }
`

const InfoArea = styled.main`
  display: flex;
  flex-direction: column;
`

const Name = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 700;
`

const Birthday = styled.span`
  opacity: 0.7;
  margin-bottom: 15px;
  font-weight: 600;
`

const Job = styled.span`
  margin-bottom: 10px;
  color: #45e7b6;
  font-weight: 600;
`

const Names = styled.div`
  /* display: flex;
  flex-direction: column;
  margin-bottom: 10px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const BirthPlace = styled.h2`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: #45e7b6;
  font-weight: 600;
`

const Popularity = styled.div`
  margin-bottom: 15px;
  font-weight: 600;
`

const Biography = styled.p`
  width: 70%;
  line-height: 130%;
  margin-bottom: 20px;
  font-size: 18px;
  opacity: 0.8;
  @media screen and (max-width: 500px) {
    width: 90%;
    font-size: 15px;
  }
`

const FilmoTitle = styled.div`
  font-size: 20px;
  color: #21e9fe;
  margin-bottom: 20px;
  cursor: pointer;
  width: 140px;
`

const FilmoArea = styled.section`
  overflow-y: auto;
  overflow-x: hidden;

  height: 500px;

  padding: 30px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  display: none;
  @media screen and (max-width: 500px) {
    width: 100%;
    position: fixed;
    left: 0;
    height: 400px;
  }
`

const ExitBtn = styled.span`
  position: fixed;
  font-size: 30px;
  right: 30px;
  cursor: pointer;
  top: 100px;
`

const PersonDetail = ({ match }) => {
  const [person, setPerson] = useState(null)
  const [filmography, setFilmography] = useState([])
  const [loading, setLoading] = useState(true)
  let titles = []
  let links = []
  let poster = []
  let releaseDate = []
  const id = match.params.id

  const getData = async () => {
    try {
      const { data: PersonData } = await personApi.person(id)
      const { data: filmoData } = await personApi.movieAndTV(id)

      setPerson(PersonData)
      setFilmography(filmoData)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const createMenu = () => {
    if (filmography.cast) {
      filmography.cast.map((cast) => {
        titles.push(cast.title ? cast.title : cast.name)

        return ""
      })

      filmography.cast.map((cast) => {
        let url
        if (cast.media_type === "movie") {
          url = `/#/movie/${cast.id}`
        } else {
          url = `/#/show/${cast.id}`
        }

        links.push(url)

        return ""
      })

      filmography.cast.map((cast) => {
        poster.push(
          cast.poster_path ? `https://image.tmdb.org/t/p/w300${cast.poster_path}` : "/No_Image.jpg"
        )

        return ""
      })
    }

    filmography.cast.map((cast) => {
      releaseDate.push(cast.release_date || cast.first_air_date)
    })
  }

  const showFilmo = ({ target }) => {
    const filmoArea = document.getElementById("filmoArea")
    filmoArea.style.display = "block"
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    })
  }

  const exit = () => {
    const filmoArea = document.getElementById("filmoArea")
    filmoArea.style.display = "none"
  }

  useEffect(() => {
    getData()
  }, [])

  return loading ? (
    <Loader />
  ) : (
    <Container backDrop={person.profile_path}>
      {console.log(person, filmography)}
      <ProfilePhoto
        src={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
            : "/No_Image.jpg"
        }
      />
      <InfoArea>
        <Name>{person.name}</Name>
        <Birthday>
          {person.birthday + " ~ "}
          {person.deathday ? person.deathday : ""}
        </Birthday>
        <Job>{person.known_for_department}</Job>
        <BirthPlace>{person.place_of_birth}</BirthPlace>
        <Popularity>Popularilty:🌟{person.popularity}</Popularity>

        <h2 style={{ fontSize: "20px", marginBottom: "10px", color: "white" }}>{`${
          person.also_known_as.length > 0 ? "Also known as..." : ""
        }`}</h2>
        <Names>
          {person.also_known_as.map((name) => (
            <cite style={{ marginBottom: "10px", opacity: "0.7" }}>{name}</cite>
          ))}
        </Names>
        {createMenu()}
        <Biography>{person.biography}</Biography>
        <FilmoTitle onClick={showFilmo}>
          <NeonLineButton text="Filmography" width="140px" color="#21E9FE" />
        </FilmoTitle>
        <FilmoArea id="filmoArea">
          <ExitBtn onClick={exit}>X</ExitBtn>
          <AwesomeMenu
            names={titles}
            links={links}
            color="#45e7b6"
            descriptions={releaseDate}
            imageSrc={poster}
            imageWidth="300px"
          />
        </FilmoArea>
      </InfoArea>
    </Container>
  )
}

export default PersonDetail

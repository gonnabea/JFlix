import React, { useState, useEffect } from "react"
import Loader from "../Components/Loader"
import { personApi } from "../api"
import styled from "styled-components"
import AwesomeMenu from "../Components/AwesomeMenu"

const Container = styled.section`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  margin: 80px 0 0 0;
  padding: 0;
  overflow: hidden;
`
const ProfilePhoto = styled.img`
  width: 30%;
  height: 90%;
  margin-right: 50px;
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 150px;
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
`

const Job = styled.span`
  margin-bottom: 10px;
`

const Names = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const BirthPlace = styled.h2`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const FilmoArea = styled.section`
  overflow-y: auto;
  overflow-x: hidden;
  width: 400px;

  height: 250px;

  padding: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

const PersonDetail = ({ match }) => {
  const [person, setPerson] = useState(null)
  const [filmography, setFilmography] = useState([])
  const [loading, setLoading] = useState(true)
  let titles = []
  let links = []
  let poster = []
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
  }

  useEffect(() => {
    getData()
  }, [])

  return loading ? (
    <Loader />
  ) : (
    <Container>
      {console.log(person, filmography)}
      <ProfilePhoto src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} />
      <InfoArea>
        <Name>{person.name}</Name>
        <Birthday>{person.birthday + " ~ " + person.deathday ? person.deathday : ""}</Birthday>
        <BirthPlace>{person.place_of_birth}</BirthPlace>
        <Job>{person.known_for_department}</Job>

        <Names>
          <h2 style={{ fontSize: "23px", marginBottom: "10px" }}>{`${
            person.also_known_as.length > 0 ? "Also known as" : ""
          }`}</h2>
          {person.also_known_as.map((name) => (
            <cite style={{ marginBottom: "10px" }}>{name}</cite>
          ))}
        </Names>
        {createMenu()}
        <FilmoArea>
          <AwesomeMenu names={titles} links={links} imageSrc={poster} />
        </FilmoArea>
      </InfoArea>
    </Container>
  )
}

export default PersonDetail

import React, { useState, useEffect } from "react"
import Loader from "../Components/Loader"
import { personApi } from "../api"
import styled from "styled-components"

const Container = styled.section`
  width: 100vw;
  height: calc(100vh - 100px);
  margin-top: 100px;
`
const ProfilePhoto = styled.img``

const InfoArea = styled.main``

const Name = styled.span``

const PersonDetail = ({ match }) => {
  const [person, setPerson] = useState(null)
  const [loading, setLoading] = useState(true)

  const id = match.params.id

  const getData = async () => {
    try {
      const { data } = await personApi.person(id)
      setPerson(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <ProfilePhoto src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} />
      <InfoArea>
        <Name>{person.name}</Name>
      </InfoArea>
    </Container>
  )
}

export default PersonDetail

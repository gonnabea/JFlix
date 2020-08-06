import React from "react"
import styled from "styled-components"

const Container = styled.section`
  font-size: 20px;
`

const InfoLine = styled.div``

const Countries = ({ countries }) => {
  return (
    <Container>
      {countries && countries.length > 0
        ? countries.map((country) => (
            <InfoLine>{`${country.name} (${country.iso_3166_1})`}</InfoLine>
          ))
        : "No Countries' Informations Found. Sorry!"}
    </Container>
  )
}

export default Countries

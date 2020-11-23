import React from "react"
import styled from "styled-components"
import AwesomeMenu from "../../../Components/AwesomeMenu"

const Container = styled.section``

const Companies = ({ companies }) => {
  if (companies && companies.length > 0) {
    let names = companies.map((company) => company.name)
    let links = companies.map((company) => (company.homepage ? company.homepage : null))
    let imageSrc = companies.map((company) =>
      company.logo_path ? `https://image.tmdb.org/t/p/w300${company.logo_path}` : "/No_Image.jpg"
    )
    let descriptions = companies.map((company) => company.headquarters)

    return (
      <Container>
        <AwesomeMenu
          names={names}
          links={links}
          imageSrc={imageSrc}
          descriptions={descriptions}
          color={"#45E7B6"}
          imageWidth="250px"
        />
      </Container>
    )
  } else {
    return <div style={{ fontSize: "20px" }}>Sorry, No Companies Information.</div>
  }
}

export default Companies

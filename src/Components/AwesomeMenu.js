import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.section``

const Menu = styled.div`
  margin-bottom: 30px;
  width: 100%;
`

const A = styled.a`
  text-decoration: none;
  display: flex;
  padding: 0;
  position: relative;
  justify-content: space-between;
  img {
    display: none;
    @media screen and (max-width: 500px) {
      display: block;
      width: 180px;
      height: 240px;
      position: relative;
      right: 0;
      margin-left: 15px;
      margin-bottom: 15px;
    }
  }
  :hover {
    img {
      display: block;
      animation: showImage 0.3s forwards;
      margin-left: 30px;
      position: fixed;
      z-index: 10;
    }
  }
  @keyframes showImage {
    from {
      height: 0;
    }
    to {
      height: ${(props) => (props.imageWidth ? props.imageWidth : "200px")};
      @media screen and (max-width: 500px) {
        height: ${(props) => (props.imageWidth ? props.imageWidth * 1.25 : "250px")};
      }
    }
  }
`

const Text = styled.p`
  padding: 0;
  text-shadow: -1px -1px 0 rgba(255, 255, 255, #45e7b6), 1px -1px 0 rgba(255, 255, 255, #45e7b6),
    -1px 1px 0 rgba(255, 255, 255, #45e7b6), 1px 1px 0 rgba(255, 255, 255, #45e7b6);
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "30px")};
  width: fit-content;
  font-family: "Times New Roman", Times, serif;
  margin-bottom: 10px;
  :hover {
    position: relative;
    animation: repeatMove 1s forwards;
    ::before {
      content: ${(props) => `"${props.name ? props.name : "Home"}"`};
      display: block;
      opacity: 0.3;
      position: absolute;
    }
    ::after {
      content: ${(props) => `"${props.name ? props.name : "Home"}"`};
      display: block;
      opacity: 0.3;
      position: absolute;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
  @keyframes repeatMove {
    from {
      transform: translate(0, 0) skew(0deg, 3deg);
    }
    to {
      transform: translate(0, 0) scale(1.3) skew(0deg, 3deg);
    }
  }
`

const Image = styled.img`
  width: ${(props) => (props.imageWidth ? props.imageWidth : "200px")};
  height: ${(props) => (props.imageWidth ? props.imageWidth : "200px")};
`

const AwesomeMenu = ({ names, links, imageSrc, descriptions, fontSize, imageWidth, color }) => {
  const showImage = (e) => {
    const image = document.getElementsByClassName("image")
    for (let i = 0; i < image.length; i++) {
      image[i].style.left = `${e.clientX}px`
      image[i].style.top = `${e.clientY - 100}px`
    }
  }

  const init = (names) => {
    const result = names
      ? names.map((name, index) => {
          return (
            <Menu>
              <A target="_blank" imageWidth={imageWidth} href={links[index]}>
                <Text onMouseMove={showImage} fontSize={fontSize} name={name} color={color}>
                  {name}
                </Text>
                <div>
                  <Image className="image" imageWidth={imageWidth} src={imageSrc[index]} />
                </div>
              </A>
              {descriptions ? descriptions[index] : null}
            </Menu>
          )
        })
      : null

    return result
  }

  return <Container>{init(names, links, imageSrc)}</Container>
}

AwesomeMenu.propTypes = {
  names: PropTypes.array,
  links: PropTypes.array,
  imageSrc: PropTypes.array,
  fontSize: PropTypes.string,
  imageWidth: PropTypes.string,
}

export default AwesomeMenu

// 사용법 : names, links, imageSrc,를 각각 배열의 형태로 데이터를 보내준다.
// You should toss props as shape of array.

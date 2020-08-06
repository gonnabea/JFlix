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
  img {
    display: none;
    position: relative;
  }
  :hover {
    img {
      display: block;
      animation: showImage 0.3s forwards;
      margin-left: 30px;
      position: absolute;
      z-index: 10;
      right: 100px;
    }
  }
  @keyframes showImage {
    from {
      width: 0;
    }
    to {
      width: ${(props) => (props.imageWidth ? props.imageWidth : "200px")};
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
  :hover {
    position: relative;
    animation: repeatMove 1s forwards;

    ::after {
      content: ${(props) => `"${props.name ? props.name : "Home"}"`};
      display: block;
      opacity: 0.3;
      position: absolute;
    }
  }
  @keyframes repeatMove {
    from {
      transform: translate(0, 0) skew(0deg, 3deg);
    }
    to {
      transform: translate(50px, 0) skew(0deg, 3deg);
    }
  }
`

const Image = styled.img`
  width: ${(props) => (props.imageWidth ? props.imageWidth : "200px")};
  height: ${(props) => (props.imageWidth ? props.imageWidth : "200px")};
`

const AwesomeMenu = ({ names, links, imageSrc, descriptions, fontSize, imageWidth, color }) => {
  const init = (names) => {
    const result = names
      ? names.map((name, index) => {
          return (
            <Menu>
              <A target="_blank" imageWidth={imageWidth} href={links[index]}>
                <Text fontSize={fontSize} name={name} color={color}>
                  {name}
                </Text>
                <div>
                  <Image imageWidth={imageWidth} src={imageSrc[index]} />
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

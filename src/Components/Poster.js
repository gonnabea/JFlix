import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    font-size: 12px;
`
const ImageContainer = styled.div`
    margin-bottom: 5px;
    height: 250px;
`

const Image = styled.img`
    background-image: url(${props => props.bgUrl});
    width: 200px;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    border-radius: 4px;
    margin-right: 40px;
    z-index:200;
    :hover{
    
    position: block;
 
    }
    @keyframes hoverImg{
        from{
            width: 180px;
             
        }
        to{
            width: 500px;
            box-shadow: 0 0 30px skyblue;
            
        }
    }
    @keyframes hoverImgOut{
        from{
            width: 500px;
             
            box-shadow: 0 0 30px skyblue;
            
        }
        to{
            width: 180px;
             
        }
    }
`

const Infos = styled.div`
position: relative;
bottom: 200px;
width: 40%;
left: 0;
opacity: 0;
display: flex;
flex-direction: column;
z-index:-1;

@keyframes showInfos{
    to{
        opacity:1;
        left: 200px;
    }
}
@keyframes hideInfos{
    from{
        opacity:1;
        left: 200px;
    }
    to{
        opacity: 0;
        left: 0;
    }
}
`

const Rating = styled.span`
color: orange;
font-size: 18px;
`;

const Title = styled.span`
display: block;
margin-bottom: 3px;
font-weight: 700;
font-size: 25px;
`

const Year = styled.span`
    font-size: 18px;
    color:rgba(255,255,255,0.5);
`;

const Poster = ({id, imageUrl, title, rating, year, isMovie = false}) => 
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
            <Container>
        <ImageContainer>
            <Image onMouseOver={(e) => mouseOn(e)} 
            onMouseOut={(e) => mouseOut(e)} 
            bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w500${imageUrl}` : ""} />
            <Infos>
            <Title>{title}</Title>
            <Rating>
                <span role="img" aria-label="rating">
                {rating ? "★" : ""}
                </span>{" "}
                {rating ? `${rating} / 10` : ""}
            </Rating>
        <Year>{year}</Year>
            </Infos>
        </ImageContainer>
    </Container>
    </Link>

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
}

function mouseOn(e){
    const {childNodes : infoBox } = e.target.parentNode;
    e.target.style.animation = "hoverImg 0.3s forwards";
    infoBox[1].style.animation = "showInfos 0.3s forwards";
}

function mouseOut(e){
    const {childNodes : infoBox } = e.target.parentNode;
    e.target.style.animation = "hoverImgOut 0.5s forwards";
    infoBox[1].style.animation = "hideInfos 0.5s forwards";
}

export default Poster;
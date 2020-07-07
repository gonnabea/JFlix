import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(2px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    z-index: 1;
    height: 100%;
`;

const Cover = styled.div`
    width: 30%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    height: 100%;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
`;

const Title = styled.h1`
 font-size: 32px;
 font-weight: 700;
 margin-bottom: 20px;
`
const ItemContainer = styled.div`
display: flex;
margin: 20px 0;
`

const Item = styled.div`

`

const Divider = styled.span`
    margin: 0 10px;
`
const Overview = styled.p`
    font-size: 12px;
    color:rgba(255,255,255,0.7);
    line-height: 1.5;
    width: 50%;
    margin-bottom: 20px;
`;

const VideoContainer = styled.div`
position: relative;
width: 100%;
height: 600px;
background-color: rgba(0,0,0,0.7);
box-shadow: 0 0 20px white;
z-index: 100;
margin-bottom: 100px;
display: flex;
flex-wrap: nowrap;
overflow-x: auto;

@keyframes showPopUp{
    from{
        height: 0px;
        opacity: 0;
    }
    to{        
        height: 600px;
        opacity: 1;
    }
}
@keyframes hidePopUp{
    from{
        height: 600px;
    }
    to{
        height: 0px;
        opacity: 0;
    }
}
`
const HideVideoBtn = styled.div`
    right: 20px;
    top: 60px;
    font-size: 30px;
    cursor: pointer;
    position: fixed;
    height: 30px;
    opacity: 0.5;
    
`

const ShowVideoBtn = styled.button`
`
const DetailPresenter = ({result, error, loading}) => (
    loading ? (
        <>
        <Helmet>
            <title>Loading | Nomflix-Jiwon</title>
        </Helmet>
        <Loader/>
        </>
    ) : (
    <Container>
        <Helmet>
            <title>{result.original_title ? result.original_title : result.original_name} | Nomflix-Jiwon</title>
        </Helmet>
        <Backdrop 
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
        <VideoContainer id="videoContainer"> 
        {result.videos.results.map( (video,index) => video ? 
            <iframe width="100%" height="100%" style={{flex:"0 0 auto"}}
        src={`https://www.youtube.com/embed/${video.key}?autoplay=${index===0 ? 1 : 0}`} 
        frameborder="0" title="Youtube" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen=""></iframe> : null)}
        <HideVideoBtn role="img" aria-label="close" onClick={hidePopUp}>Hide Videos X</HideVideoBtn>
        </VideoContainer>
    <Content>
        <Cover  bgImage={result.poster_path ? 
            `https://image.tmdb.org/t/p/original${result.poster_path}`
            : ""} />
    <Data>
        <Title>
            {result.original_title ? result.original_title : result.original_name}
        </Title>
        <ItemContainer>
        <Item>{result.release_date ? result.release_date.substring(0, 4) : ""}
        </Item>
        <Divider>.</Divider>
        <Item>
        {result.runtime 
        ? result.runtime
        : result.episode_run_time[0]} min
        </Item>
        <Divider>.</Divider>
        <Item>
        {result.genres && 
            result.genres.map((genre, index) => 
                index === result.genres.length-1 
                    ? genre.name 
                    : `${genre.name} / `)}
        </Item>
        </ItemContainer>
        <Overview>
            {result.overview}
        </Overview>
        <ShowVideoBtn onClick={() => showPopUp(VideoContainer)}> Watch Trailers </ShowVideoBtn>
    </Data>
    </Content>
    </Container>
    )
);

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

const showPopUp = (e) => {
    const videoContainer = document.getElementById("videoContainer")
    videoContainer.style.animation = "showPopUp 0.3s forwards ease-in-out";
    videoContainer.style.marginBottom = "100px"
}

const hidePopUp = (e) => {
    e.target.parentNode.style.animation = "hidePopUp 0.3s forwards ease-in-out";
    e.target.parentNode.style.marginBottom = "0px"
}

export default DetailPresenter;
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";
import InfoTap from "Components/InfoTap";
import Selector from "../../Components/Selector";

const Container = styled.div`
    padding: 10vh 50px;
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    @media only screen and (max-width: 600px){
        padding: 50px 10px;
    }
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
    width: 25%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100%;
    border-radius: 5px;
    @media only screen and (max-width: 900px){
        width: 300px;
        height: 400px;
    }
    @media only screen and (max-width: 700px){
        display: none;
    }
`;

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
    @media only screen and (max-width: 420px){
        width: 100%;
    }
`;

const Title = styled.h1`
 font-size: 32px;
 font-weight: 700;
 margin-bottom: 20px;
 width: 100%;
`
const ItemContainer = styled.div`
display: flex;
margin: 20px 0;
`

const Item = styled.div`
    font-size: 18px;
`

const Divider = styled.span`
    margin: 0 10px;
`
// const Overview = styled.p`
//     font-size: 12px;
//     color:rgba(255,255,255,0.7);
//     line-height: 1.5;
//     width: 50%;
//     margin-bottom: 20px;
// `;

const VideoContainer = styled.div`
position: relative;
width: 100%;
height: 600px;
background-color: rgba(0,0,0,0.7);
box-shadow: 0 0 20px white;
margin-bottom: 100px;
display: flex;
flex-wrap: nowrap;
overflow-x: auto;

@media only screen and (max-width: 900px){
    height: 400px;
    @keyframes showPopUp{
    from{
        height: 0px;
        opacity: 0;
    }
    to{        
        height: 400px;
        opacity: 1;
    }
}
@keyframes hidePopUp{
    from{
        height: 400px;
    }
    to{
        height: 0px;
        opacity: 0;
    }
}
}

@media only screen and (max-width: 420px){
    height: 300px;
    @keyframes showPopUp{
    from{
        height: 0px;
        opacity: 0;
    }
    to{        
        height: 300px;
        opacity: 1;
    }
}
@keyframes hidePopUp{
    from{
        height: 300px;
    }
    to{
        height: 0px;
        opacity: 0;
    }
}
}
@media only screen and (min-width: 901px){
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
}
`
const HideVideoBtn = styled.div`
    right: 20px;
    top: 10vh;
    font-size: 25px;
    cursor: pointer;
    position: fixed;
    height: 30px;
    z-index: 999;
    color: white;
`

const ShowVideoBtn = styled.button`
margin-bottom: 20px;
padding: 5px;
font-weight: 700;
`

const IMDBLink = styled.a`
`
const IMDBLogo = styled.img`
width: 80px;
height: 30px;

`
const DetailPresenter = ({result, error, loading, companies}) => (
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
        
        <Selector contents={
            result.videos.results.map( (video,index) => video ? 
            <iframe width="100%" height="100%" style={{flex:"0 0 auto"}}
        src={`https://www.youtube.com/embed/${video.key}?autoplay=${index===0 ? 1 : 0}`} 
        frameBorder="0" title="Youtube" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe> : null)
        } />

        <HideVideoBtn role="img" aria-label="close" id="hideVideoBtn" onClick={hidePopUp}>Hide Videos X</HideVideoBtn>
        </VideoContainer>
    <Content>
        <Cover  bgImage={result.poster_path ? 
            `https://image.tmdb.org/t/p/original${result.poster_path}`
            : "https://www.freeiconspng.com/uploads/no-image-icon-21.png"} />
    <Data>
        <Title>
            {result.original_title ? result.original_title : result.original_name}
        </Title>
        {result.imdb_id ?
        <IMDBLink href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank">
            <IMDBLogo src="/IMDb.jpg"></IMDBLogo>
        </IMDBLink> : null}
        <ItemContainer>
        <Item>{result.release_date ? result.release_date.substring(0, 4) : ""}
        </Item>
        <Divider>-</Divider>
        <Item>
        {result.runtime 
        ? result.runtime
        : "" || result.episode_run_time} min
        </Item>
        <Divider>-</Divider>
        <Item>
        {result.genres && 
            result.genres.map((genre, index) => 
                index === result.genres.length-1 
                    ? genre.name 
                    : `${genre.name} / `)}
        </Item>
        </ItemContainer>
        <Item style={{color: "yellow", marginBottom: "20px"}}>
            ★ {result.vote_average}  ( {result.vote_count} people voted )
        </Item>
        <ShowVideoBtn onClick={() => showPopUp(VideoContainer)}> Watch Trailers </ShowVideoBtn>
        <InfoTap 
        overview = {result.overview} 
        companies = {companies} 
        countries = {result.production_countries} 
        seasons = {result.seasons}
        creators = {result.created_by}
        />
        
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
    const videoContainer = document.getElementById("videoContainer");
    const hideVideoBtn = document.getElementById("hideVideoBtn");
    videoContainer.style.animation = "showPopUp 0.3s forwards ease-in-out";
    videoContainer.style.marginBottom = "100px"
    hideVideoBtn.style.top= "10vh";
    hideVideoBtn.style.color = "white";
}

const hidePopUp = (e) => {
    e.target.parentNode.style.animation = "hidePopUp 0.3s forwards ease-in-out";
    e.target.parentNode.style.marginBottom = "0px"
    e.target.style.top= "0px";
}

export default DetailPresenter;
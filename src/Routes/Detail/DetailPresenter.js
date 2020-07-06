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

const CoverContainer = styled.div`
@keyframes rotate{
        from{
            
        }
        to{
            transform: rotateY(180deg);
        }
    }
`;

const Cover = styled.div`
    width: 350px;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    height: 100%;
    border-radius: 5px;
`;

const VideoContainer = styled.div`
position: relative;
width: 100%;
height: 600px;
background-color: rgba(0,0,0,0.7);
box-shadow: 0 0 20px white;
z-index: 100;
margin-bottom: 30px;
display: flex;
justify-content: center;
@keyframes showPopUp{
    from{
        height: 50px;
    }
    to{        
        height: 600px;
    }
}
@keyframes hidePopUp{
    from{
        height: 600px;
    }
    to{
        height: 50px;
    }
}
`

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
`;

const RotateBtn = styled.button`
    
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
        <VideoContainer onClick={showPopUp} >
        <iframe width="90%" height="100%" src={`https://www.youtube.com/embed/${result.videos.results[0].key}?autoplay=1`} frameborder="0" title="Youtube" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
            
        </VideoContainer>
    <Content>
        <Cover  bgImage={result.poster_path ? 
            `https://image.tmdb.org/t/p/original${result.poster_path}`
            : ""}/>
        
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
    console.log(e.target)
    e.target.style.animation = "showPopUp 0.5s forwards"

}

const hidePopUp = (e) => {
    e.target.style.animation = "hidePopUp 0.5s forwards"
}

export default DetailPresenter;
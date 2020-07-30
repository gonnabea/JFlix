import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "Components/Message";
import Poster from "../../Components/Poster";
import EmptySpace from "Components/EmptySpace";
import { Helmet } from "react-helmet";

const Container = styled.div`
padding: 10vh 20px;
`

const TVPresenter = ({
    topRated,
    popular,
    airingTodays,
    loading,
    error}) => loading ? <Loader /> : <Container>
        {topRated && topRated.length > 0 && 
        (
        <Section title="Top Rated TV Shows" >
        <Helmet>
            <title>TV | Nomflix-Jiwon</title>
        </Helmet>
            {topRated.map( show => <Poster key={show.id} id={show.id}
     imageUrl={show.poster_path} 
     title={show.original_name} 
     rating={show.vote_average} 
     overview={show.overview}
     year={show.first_air_date ? show.first_air_date.substring(0,4) : "" } 
     />)}<EmptySpace/> </Section>)}
        {popular && popular.length > 0 && 
        (<Section title="Popular TV Shows" >
            {popular.map( show => <Poster key={show.id} id={show.id}
     imageUrl={show.poster_path} 
     title={show.original_name} 
     rating={show.vote_average} 
     overview={show.overview}
     year={show.first_air_date ? show.first_air_date.substring(0,4) : "" } 
     />)}<EmptySpace/> </Section>)}
        {airingTodays && airingTodays.length > 0 && 
        (<Section title="Airing Today" >
            {airingTodays.map( show => <Poster key={show.id} id={show.id}
     imageUrl={show.poster_path} 
     title={show.original_name} 
     rating={show.vote_average} 
     overview={show.overview}
     year={show.first_air_date ? show.first_air_date.substring(0,4) : ""} 
     />)}
         <EmptySpace/>   </Section>)}
        {error && (<Message text={error}></Message>)}
    </Container>;

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingTodays: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string
}

export default TVPresenter;
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div``

const TVPresenter = ({
    topRated,
    popular,
    airingTodays,
    loading,
    error}) => loading ? <Loader /> : <Container>
        {topRated && topRated.length > 0 && 
        (<Section title="Top Rated TV Shows" >
            {topRated.map( show => <Poster key={show.id} id={show.id}
     imageUrl={show.poster_path} 
     title={show.original_name} 
     rating={show.vote_average} 
     year={show.first_air_date.substring(0,4) } 
     />)}</Section>)}
        {popular && popular.length > 0 && 
        (<Section title="Popular TV Shows" >
            {popular.map( show => <Poster key={show.id} id={show.id}
     imageUrl={show.poster_path} 
     title={show.original_name} 
     rating={show.vote_average} 
     year={show.first_air_date.substring(0,4) } 
     />)}</Section>)}
        {airingTodays && airingTodays.length > 0 && 
        (<Section title="airingToday" >
            {airingTodays.map( show => <Poster key={show.id} id={show.id}
     imageUrl={show.poster_path} 
     title={show.original_name} 
     rating={show.vote_average} 
     year={show.first_air_date.substring(0,4) } 
     />)}
            </Section>)}
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
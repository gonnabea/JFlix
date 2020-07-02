import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div``

const TVPresenter = ({
    topRated,
    popular,
    airingTodays,
    loading,
    error}) => loading ? <Loader /> : <Container>
        {topRated && topRated.length > 0 && 
        (<Section title="Top Rated TV Shows" >
            {topRated.map( show => <span key={show.id}>show.name</span>)}</Section>)}
        {popular && popular.length > 0 && 
        (<Section title="Popular TV Shows" >
            {popular.map( show => <span key={show.id}>show.name</span>)}</Section>)}
        {airingTodays && airingTodays.length > 0 && 
        (<Section title="airingToday" >
            {airingTodays.map( show => <span key={show.id}>show.name</span>)}
            </Section>)}
    </Container>;

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingTodays: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string
}

export default TVPresenter;
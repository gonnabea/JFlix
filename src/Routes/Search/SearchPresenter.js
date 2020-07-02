import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
width: 50%;
`;

const Input = styled.input`
all: unset;
width: 100%;
font-size: 20px;
margin-bottom: 30px;
border-radius: 10px;
padding-left: 15px;
width: 300px;
:focus{
    animation: focusedInput 0.3s forwards;
    ::placeholder{
        color: white;
        opacity: 0.8;
    }
}
@keyframes focusedInput{

    to{
        box-shadow: 10px 5px 15px white;
    }
}
`;



const SearchPresenter = ({
    movieResults,
    tvResults,
    searchTerm,
    loading,
    error,
    handleSubmit,
    updateTerm
}) => <Container>
    <Form onSubmit={handleSubmit}>
    <Input type="text" placeholder="Search as title, description, etc..." value={searchTerm} onChange={updateTerm}/>
    </Form>
    {loading ? <Loader/> : <>
    {movieResults && movieResults.length > 0 && <Section title="Movie Results">{movieResults.map( movie => <span key={movie.id}>{movie.title}</span>)}</Section>}
    {tvResults && tvResults.length > 0 && <Section title="TV Show Results">{tvResults.map( show => <span key={show.id}>{show.name}</span>)}</Section>}
    </>}
</Container>;

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool,
    error: PropTypes.string,
    handleSubmit: PropTypes.func,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;
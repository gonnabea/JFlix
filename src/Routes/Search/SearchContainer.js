import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

class SearchContainer extends Component{

    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "code",
        loading: false,
        error: null
    }

        handleSubmit = async(searchTerm) => {
        
        if(searchTerm !== ""){
            this.searchByTerm(searchTerm);
        }
    }

    searchByTerm = async() => {
        const { searchTerm } = this.state;
        this.setState({loading: true});    
        try{
            const {data: { results: movieResults }} = await moviesApi.search(searchTerm);
            const {data: { results: tvResults }} = await tvApi.search(searchTerm);
            console.log(movieResults, tvResults);
            this.setState({
                movieResults,
                tvResults
            })
          
        }
        catch{
            this.setState({error: "Can't find result. Please try again 😅"})
        }
        finally{
            this.setState({loading: false})
        }
    }

    render(){
        console.log(this.state)
        const { 
            movieResults,
            tvResults,
            searchTerm,
            loading,
            error
        } = this.state
        
        return(
            <SearchPresenter 
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            loading={loading}
            error={error}
            handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default SearchContainer;

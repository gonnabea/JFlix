import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends Component{

    state = {
        result: null,
        error: null,
        loading: true
    }

    render(){
        const { 
            result,
            error,
            loading
        } = this.state

        return(
            <DetailPresenter 
            result={result}
            error={error}
            loading={loading}/>
        )
    }
}

export default DetailContainer;

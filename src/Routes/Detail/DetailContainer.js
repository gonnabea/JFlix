import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

class DetailContainer extends Component{

    constructor(props) {
        super(props);
        const {location: { pathname }} = props;
        this.state = {
         result: null, 
         error: null,  
         loading: true,
         isMovie: pathname.includes("/movie/"),
         isTV: pathname.includes("/tv/")
        }
    }

    async componentDidMount(){
        const {
            match: {
                params: { id }
            },
            history: { push }
        } = this.props;
        const { isMovie } = this.state;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push("/");
        }
        let result = null;
        if(isMovie){
            try{
               ({data: result}= await moviesApi.movieDetail(parsedId));
               
            }
            catch{
                this.setState({error:"Can't find anyting"})
            }
            finally{
                this.setState({loading: false, result})
            }
        }
        else{
            try{
                ({data: result} = await tvApi.showDetail(parsedId));
                
            }
            catch{
                this.setState({error:"Can't find anyting"})
            }
            finally{
                this.setState({loading: false, result})
            }
        }
    }

    render(){
        const { 
            result,
            error,
            loading
        } = this.state
        console.log(result)
        
        return(
            <DetailPresenter 
            result={result}
            error={error}
            loading={loading}/>
        )
    }
}

export default DetailContainer;

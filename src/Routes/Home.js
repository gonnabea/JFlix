import React from "react";
import axios from "axios";

axios.get("https://api.themoviedb.org/3/movie/now_playing",{
    params: {
        api_key : "6363d423c535019ac0a49bfc571cc2df"
    }
}).then(data => {
    console.log(data)
})
export default () => "Home";
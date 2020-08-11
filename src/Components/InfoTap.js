// import React, { Component } from "react";
// import styled from "styled-components";
// import Season from "./Season";
// import Selector from "./Selector";
// import NeonLineButton from "./NeonLineButton"

// const Container = styled.section`

// `;

// const MenuLine = styled.header`

// `;

// const Menu  = styled.button`
//     background-color: transparent;
//     border:none;
//     outline: none;
// `

// const Screen = styled.div`
//     background-color: rgba(0,0,0,0.5);
//     width: 100%;
//     height: 400px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     line-height: 120%;
//     font-size: 20px;
//     color: white;
//     font-weight: 500;
//     overflow: auto;
//     border-radius: 5px;
//     padding: 0px 50px 0px 50px;
//     @media screen and (max-width: 600px){
//         font-size: 17px;
//         line-height: 120%;
//         padding: 100px 0px 0px 0px;
//     }

// `;

// const LogoImg = styled.img`
//     width: 300px;
//     height: 200px;

//     background-color: white;
// `

// const InfoLine = styled.a`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 300px;
//     margin: 0 20px;
//     justify-content: space-between;
//     border: solid 1px;
//     min-height: 50px;
//     justify-content: center;
//     :hover{
//         background-color: rgba(255,255,255,0.2);
//         color: white;

//     }
//     cursor: ${props => props.homepage ? "pointer": "auto"};
//     @media only screen and (max-width: 600px){
//         width: 300px;
//     }
// `

// const SeasonContainer = styled.section`
// display: grid;
// grid-template-columns: repeat(3,1fr);
// grid-gap: 10px;
// overflow-x: auto;
// @media screen and (max-width: 420px){
//     grid-template-columns: repeat(2,1fr);
// }
// `

// const SeasonInfo = styled.section`
//     display: flex;
//     flex-direction: column;
//     background-color: white;
//     color: black;
//     cursor: pointer;
//     width: 150px;
// `
// const SeasonPoster = styled.img`
//     width: 150px;
//     height: 200px;
// `
// const SeasonName = styled.span`
// display: flex;
// align-self: center;
// text-align: center;
// `

// const ExitBtn = styled.div`
// position: absolute;
// font-size: 25px;
// color: white;
// z-index: 1000;
// display: none;
// cursor: pointer;
// color: pink;
// top: 10px;
// right: 30px;

// `

// const CompanyLine = styled.div`
// display: flex;
// flex-direction: column;
// `

// const Company = styled.div`
// display:flex;
// flex-direction: column;
// justify-content:space-around;
// align-items: center;
// `

// const Headquarter = styled.span`

// `;

// const CreatorInfo = styled.div`
//     width: 100%;
//     height: 90%;
// `;

// const CreatorImg = styled.img`
//     width: 300px;
//     height: 90%;
// `;

// const CreatorName = styled.p`

// `;

// class InfoTap extends Component{
//     state = {
//         data: this.props.overview,
//         season: null,
//         display: "none"
//     }

//     select = (selected) => {

//         if(selected === "overview"){
//             this.setState({data: this.props.overview})
//         }
//         else if(selected === "companies"){
//             const companies = this.props.companies.map( company => {
//             return (
//             <Company>
//             <InfoLine homepage={company.homepage} target="_blank" href={company.homepage === "" ? null : company.homepage}> {/*set Company's homepage link*/}
//                 {company.logo_path !== null
//                 ? <LogoImg src={`https://image.tmdb.org/t/p/w300${company.logo_path}`}
//                 alt="logo_image"/> : null}
//                 <CompanyLine>
//                 {company.name}
//             <Headquarter style={{fontSize:"13px", color:"#45E7B6"}}>{company.headquarters}</Headquarter>
//                 </CompanyLine>
//             </InfoLine>
//             </Company>
//             )
//             })
//             this.setState({data: <Selector contents={companies} width={"350px"} />})
//         }
//         else if(selected === "countries"){
//             const countries = this.props.countries.map( country => <InfoLine>{`${country.name} (${country.iso_3166_1})`}</InfoLine>);
//             this.setState({data: countries})
//         }
//         else if(selected ==="seasons"){
//             const seasons = this.props.seasons.map( season =>
//             <SeasonInfo onClick={() => this.callSeason(season)}>
//                 <SeasonPoster src={season.poster_path ? `https://image.tmdb.org/t/p/w300${season.poster_path}` : "/No_Image.jpg"} alt="poster_path" />
//                 <SeasonName>{season.name}</SeasonName>

//             </SeasonInfo>);
//             this.setState({data: <SeasonContainer>{seasons}</SeasonContainer>})
//         }
//         else if(selected === "creators"){
//             const creators = this.props.creators.map( creator =>
//                 <CreatorInfo>
//                     <CreatorImg src={creator.profile_path ? `https://image.tmdb.org/t/p/w300${creator.profile_path}` : "/No_Image.jpg"} />
//                     <CreatorName>
//                         {creator.name}
//                     </CreatorName>
//                 </CreatorInfo>
//                 )
//             this.setState({data: <Selector contents={creators} info={"test"} width={"300px"} />})
//         }

//         // Info Menu Select Treat
//     }

//     callSeason = (season,e) => {
//         const exitBtn = document.getElementById("exitBtn");
//         exitBtn.style.display = "block";
//         this.setState({season, display:"flex"})
//     }

//     exitSeason = (e) => {
//         this.setState({display: "none"})
//         e.target.style.display= "none";
//     }

//     render(){

//         return(
//             <Container>
//                 <MenuLine>
//                     <Menu onClick={() => this.select("overview")}><NeonLineButton width="120px" text="Overview" /></Menu>
//                     <Menu onClick={() => this.select("companies")}><NeonLineButton width="120px" text="Companies" /></Menu>
//                     {this.props.countries ? <Menu onClick={() => this.select("countries")}><NeonLineButton width="120px" text="Countries" /></Menu> : null}
//                     {this.props.seasons ? <Menu onClick={() => this.select("seasons")}><NeonLineButton width="120px" text="Seasons" /></Menu> : null}
//                     {this.props.creators && this.props.creators.length > 0 ? <Menu onClick={() => this.select("creators")}><NeonLineButton width="120px" text="Creators" /></Menu> : null}
//                 </MenuLine>
//                 <Screen>
//                    {this.state.data}
//                 </Screen>
//                 <ExitBtn onClick={this.exitSeason} id="exitBtn">X</ExitBtn>
//                 <Season season={this.state.season} display={this.state.display} />
//             </Container>
//         )
//     }
// }

// export default InfoTap;

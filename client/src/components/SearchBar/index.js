import React from "react";
import { useState } from 'react';
import { useMutation } from "@apollo/client";
import "./SearchBar.css";
// import SearchResultScreen from "../../screens/SearchResultScreen";
import SimilarResultCard from "../Card/SimilarResultCard";
import Card from "../Card";
import { LOAD_RESULTS } from "../../utils/mutations";

const SearchBar = () => {
  const [loadResults, { data }] = useMutation(LOAD_RESULTS);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchCategory, setSearchCategory] = useState("");
    const [resultsArray, setResultsArray] = useState([]);

    const onSearchBtnClick = () => {
      try {
        loadResults({
          variables: {
            term: searchTerm,
            category: searchCategory
          }
        }).then((data) => {
          const values = Object.values(data);
          const values2 = values[0]
          const similarities = Object.values(values2)
          const similaritiesArray = similarities[0]
          setResultsArray(similaritiesArray)
        })
      } catch(error){
        console.log(error);
      }
    }
    
    if (!data) {
      return (
        <div>
          <div className="row" style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%" }}>
            <div className="input-group mb-3">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{searchCategory.toUpperCase()}</button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={(e) => setSearchCategory("Music")}>Music</a></li>
                <li><a className="dropdown-item" onClick={(e) => setSearchCategory("Movies")}>Movies</a></li>
                <li><a className="dropdown-item" onClick={(e) => setSearchCategory("shows")}>Shows</a></li>
                <li><a className="dropdown-item" onClick={(e) => setSearchCategory("books")}>Books</a></li>
                <li><a className="dropdown-item" onClick={(e) => setSearchCategory("Authors")}>Authors</a></li>
                <li><a className="dropdown-item" onClick={(e) => setSearchCategory("Games")}>Games</a></li>
                <li><a className="dropdown-item" onClick={(e) => setSearchCategory("podcasts")}>Podcasts</a></li>
              </ul>
              <input type="text" className="form-control" aria-label="Text input with dropdown button" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <div style={{ marginLeft: "0.5%" }}>
                <button type="button" className="btn btn-dark" onClick={onSearchBtnClick}>Search</button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div>
        <div className="row" style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%" }}>
        <div className="input-group mb-3">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{searchCategory.toUpperCase()}</button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" onClick={(e) => setSearchCategory("Music")}>Music</a></li>
            <li><a className="dropdown-item" onClick={(e) => setSearchCategory("Movies")}>Movies</a></li>
            <li><a className="dropdown-item" onClick={(e) => setSearchCategory("shows")}>Shows</a></li>
            <li><a className="dropdown-item" onClick={(e) => setSearchCategory("books")}>Books</a></li>
            <li><a className="dropdown-item" onClick={(e) => setSearchCategory("Authors")}>Authors</a></li>
            <li><a className="dropdown-item" onClick={(e) => setSearchCategory("Games")}>Games</a></li>
            <li><a className="dropdown-item" onClick={(e) => setSearchCategory("podcasts")}>Podcasts</a></li>
          </ul>
          <input type="text" className="form-control" aria-label="Text input with dropdown button" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <div style={{ marginLeft: "0.5%" }}>
            <button type="button" className="btn btn-dark" onClick={onSearchBtnClick}>Search</button>
          </div>
        </div>
      </div>
        
        <div className="row" style={{ marginLeft: "3%", marginRight: "3%" }}>
            {resultsArray.map((result) => {
              if (result.yUrl) {
                return(
                  <div className="col-md-3" style={{ marginTop: "3%", marginBottom: "3%" }}>
                    <SimilarResultCard type={result.Type} video={result.yUrl} title={result.Name} description={result.wTeaser} moreInfo={result.wUrl} /> 
                  </div>
                )
              } else if (!result.video) {
                return(
                  <div className="col-md-3" style={{ marginTop: "3%", marginBottom: "3%" }}>
                    <Card type={result.Type} title={result.Name} description={result.wTeaser} moreInfo={result.wUrl} /> 
                  </div>
                )
              }
            })}
        </div>

      </div>
      )
    }
}


export default SearchBar;



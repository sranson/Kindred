import React from "react";
import axios from "axios";
import Card from '../Card'
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { 
    searchTerm: "", 
    searchCategory: "",
    searchedForDescrip: "",
    searchedTitle: "",
    searchedForWiky: "",
    searchedImage: "",
    similarities: [] 
  };

  onSearchBtnClick = () => {
    let term = this.state.searchTerm;
    let category = this.state.searchCategory;


    // Tastedive API call to get similar results
    axios.get("https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar",
        {
          params: {
            q: term,
            type: category,
            info: 1,
            limit: 10,
          },
          headers: {
            Authorization: "",
          },
        }
      )
      .then((results) => {
        this.setState({ searchedTitle: results.data.Similar.Info[0].Name })
        this.setState({ searchedForDescrip: results.data.Similar.Info[0].wTeaser.substring(0, 100) })
        this.setState({ searchedForWiky: results.data.Similar.Info[0].wUrl })
        this.setState({ similarities: results.data.Similar.Results })

        console.log(this.state.searchedTitle);
        console.log(this.state.searchedForDescrip);
        console.log(this.state.searchedForWiky);
        console.log(this.state.similarities);
      })
      .catch((err) => {
        console.log(err);
      });


    axios.get("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",
      {
        params: {
          q: term, 
          pageNumber: '1', 
          pageSize: '1', 
          autoCorrect: 'true'},
        headers: {
          'x-rapidapi-key': 'hkT3WheP81mshG7OUzxBABskhgYrp1Ew0AhjsnNEADHzJY8mIY',
          'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
      }
    )
    .then((response) => {
        // console.log(response.data.value[0].thumbnail);
        this.setState({ searchedImage: response.data.value[0].thumbnail })
    })
    .catch((err) => {
      console.log(err);
    });


    this.setState({ searchTerm: "" }); // Clear out the input text after 'Search' button is clicked
  };

  render() {
    return (
      <div>
        <div
          className="row"
          style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%" }}
        >
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {this.state.searchCategory.toUpperCase()}
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  onClick={(e) => this.setState({ searchCategory: "Music" })}
                >
                  Music
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={(e) => this.setState({ searchCategory: "Movies" })}
                >
                  Movies
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={(e) => this.setState({ searchCategory: "shows" })}
                >
                  Shows
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={(e) => this.setState({ searchCategory: "podcasts" })}
                >
                  Podcasts
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={(e) => this.setState({ searchCategory: "Books" })}
                >
                  Books
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={(e) => this.setState({ searchCategory: "Authors" })}
                >
                  Authors
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={(e) => this.setState({ searchCategory: "Games" })}
                >
                  Games
                </a>
              </li>
            </ul>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
              value={this.state.searchTerm}
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            />
            <div style={{ marginLeft: "0.5%" }}>
              <button
                type="button"
                className="btn btn-dark"
                onClick={this.onSearchBtnClick}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <Card image={this.state.searchedImage} title={this.state.searchedTitle} description={this.state.searchedForDescrip} moreInfo={this.state.searchedForWiky}/>
      </div>
    );
  }
}
export default SearchBar;

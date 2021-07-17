import React from "react";
import axios from "axios";
import Card from '../Card'
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { searchTerm: "", searchCategory: "" };

  state = { searchTerm: "", searchCategory: "" };

  onSearchBtnClick = () => {
    let term = this.state.searchTerm;
    let category = this.state.searchCategory;
    // console.log(`Category: ${category}`);
    // console.log(`Search Term: ${term}`);


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
        // let searchTerm = results.data.Similar.Info[0]
        let searchTermTitle = results.data.Similar.Info[0].Name
        let searchTermDescription = results.data.Similar.Info[0].wTeaser.substring(0, 100)
        let searchTermWiky = results.data.Similar.Info[0].wUrl
        // let similaritiesArray = results.data.Similar.Results
        // console.log(searchTerm);
        console.log(searchTermTitle);
        console.log(searchTermDescription);
        console.log(searchTermWiky);
        // console.log(similaritiesArray);
      })
      .catch((err) => {
        console.log(err);
      });

      // Web Search (imageSearch) API call to get images
      // let images = {
      //   method: 'GET',
      //   url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
      //   params: {
      //     q: term, 
      //     pageNumber: '1', 
      //     pageSize: '1', 
      //     autoCorrect: 'true'},
      //   headers: {
      //     'x-rapidapi-key': 'hkT3WheP81mshG7OUzxBABskhgYrp1Ew0AhjsnNEADHzJY8mIY',
      //     'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      //   }
      // };
      // axios.request(images).then(function (response) {
      //   // console.log(response.data);
      //   let targetImage = response.data.value[0].thumbnail;
      //   console.log(targetImage);
      // }).catch(function (error) {
      //   console.error(error);
      // });

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
        {/* <Card image={targetImage} title={searchTermTitle} description={searchTermDescription} moreInfo={searchTermWiky}/> */}
      </div>
    );
  }
}
export default SearchBar;

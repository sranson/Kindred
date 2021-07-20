import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { 
    searchTerm: "", 
    searchCategory: "",
  };

  onSearchBtnClick = () => {
    let term = this.state.searchTerm;
    let category = this.state.searchCategory;
    this.props.onSearchBtnClick(term, category)
    this.setState({ searchTerm: "" }); // Clear out the input text after 'Search' button is clicked
  };

    render() {
      return (
        <div>
          <div className="row" style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%" }} >
            <div className="input-group mb-3">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {this.state.searchCategory.toUpperCase()}
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={(e) => this.setState({ searchCategory: "Music" })} >Music</a></li>
                <li><a className="dropdown-item" onClick={(e) => this.setState({ searchCategory: "Movies" })}>Movies</a></li>
                <li><a className="dropdown-item" onClick={(e) => this.setState({ searchCategory: "shows" })}>Shows</a></li>
                <li><a className="dropdown-item" onClick={(e) => this.setState({ searchCategory: "podcasts" })}>Podcasts</a></li>
                <li><a className="dropdown-item" onClick={(e) => this.setState({ searchCategory: "books" })}>Books</a></li>
                <li><a className="dropdown-item" onClick={(e) => this.setState({ searchCategory: "Authors" })}>Authors</a></li>
                <li><a className="dropdown-item" onClick={(e) => this.setState({ searchCategory: "Games" })}>Games</a></li>
              </ul>

              <input type="text" className="form-control" aria-label="Text input with dropdown button" value={this.state.searchTerm} onChange={(e) => this.setState({ searchTerm: e.target.value })}/>
  
              <div style={{ marginLeft: "0.5%" }}>
                <button type="button" className="btn btn-dark" onClick={this.onSearchBtnClick}>Search</button>
              </div>
            </div>
          </div>
        </div>
      );
    } 
}




export default SearchBar;

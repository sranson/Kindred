import React from 'react'
import axios from 'axios';
import './SearchBar.css';


class SearchBar extends React.Component {

 state = { searchTerm: '', searchCategory: ''};

 onSearchBtnClick = () => {
    // What needs to happen when the search button is clicked? Make the call to tastedive api
    // console.log(this.state.searchCategory);
    // console.log(this.state.searchTerm);
    // https://tastedive.com/api/similar?q=breaking+bad&type=shows&info=1&limit=5
    // axios.get('https://tastedive.com/api/similar?q='+this.state.searchTerm+'&type='+this.state.searchCategory+'&info=1&limit=5', {});
    axios.get('https://tastedive.com/api/similar?q=insecure&type=shows&info=1&limit=5', {
        params: {},
        headers: {}
    });
 }

    render() {
        return(
            <div>
                <div className="row" style={{ marginTop:"3%", marginLeft:"3%", marginRight:"3%" }}>
                        <div className="input-group mb-3">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" value="music" onClick={(e) => this.setState({ searchCategory: e.target.outerText })}></a></li>
                                    <li><a className="dropdown-item" value="movies" onClick={(e) => this.setState({ searchCategory: e.target.outerText })}>Movies</a></li>
                                    <li><a className="dropdown-item" value="tvShows" onClick={(e) => this.setState({ searchCategory: e.target.outerText })}>Series</a></li>
                                    <li><a className="dropdown-item" value="podcasts" onClick={(e) => this.setState({ searchCategory: e.target.outerText })}>Podcasts</a></li>
                                    <li><a className="dropdown-item" value="books" onClick={(e) => this.setState({ searchCategory: e.target.outerText })}>Books</a></li>
                                    <li><a className="dropdown-item" value="authors" onClick={(e) => this.setState({ searchCategory: e.target.outerText })}>Authors</a></li>
                                    <li><a className="dropdown-item" value="games" onClick={(e) => this.setState({ searchCategory: e.target.outerText })}>Games</a></li>
                                </ul>
                            <input 
                                type="text" 
                                className="form-control" 
                                aria-label="Text input with dropdown button" 
                                value={this.state.searchTerm} 
                                onChange={(e) => this.setState({ searchTerm: e.target.value })} 
                            />
                            <div style={{ marginLeft:"0.5%"}}>
                                <button type="button" className="btn btn-dark" onClick={this.onSearchBtnClick}>Search</button>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}


export default SearchBar;
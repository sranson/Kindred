import React from 'react'
import axios from 'axios';
import './SearchBar.css';


class SearchBar extends React.Component {

 state = { searchTerm: '', searchCategory: ''};

 onSearchBtnClick = () => {
    // Make the call to tastedive api
    let term = this.state.searchTerm;
    let category = this.state.searchCategory;

    axios.get('http://tastedive.com/api/similar?', {
        params: {
            q: term,
            type: category,
            info: 1,
            limit: 5,
            k: '419186-Similari-8DTISBRP'
        },
        headers: {
            Authorization: ''
        }
    })
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
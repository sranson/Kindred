import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {

 state = { term: ''};

    // onSearchBtnClick() {
    //     console.log('CLICKED!');
    // }

    render() {
        return(
            <div>
                <div className="row" style={{ marginTop:"3%", marginLeft:"3%", marginRight:"3%" }}>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" value="music" >Music</a></li>
                                <li><a className="dropdown-item" value="movies">Movies</a></li>
                                <li><a className="dropdown-item" value="tvShows">TV Shows</a></li>
                                <li><a className="dropdown-item" value="podcasts">Podcasts</a></li>
                                <li><a className="dropdown-item" value="books">Books</a></li>
                                <li><a className="dropdown-item" value="authors">Authors</a></li>
                                <li><a className="dropdown-item" value="games">Games</a></li>
                            </ul>
                        <input 
                            type="text" 
                            className="form-control" 
                            aria-label="Text input with dropdown button" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value })} 
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
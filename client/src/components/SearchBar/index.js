import React from 'react';
import './SearchBar.css';


const SearchBar = () => {
    return(
        <div>
            <div className="row" style={{ marginTop:"3%", marginLeft:"3%", marginRight:"3%" }}>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Music</a></li>
                            <li><a className="dropdown-item" href="#">Movies</a></li>
                            <li><a className="dropdown-item" href="#">TV Shows</a></li>
                            <li><a className="dropdown-item" href="#">Podcasts</a></li>
                            <li><a className="dropdown-item" href="#">Books</a></li>
                            <li><a className="dropdown-item" href="#">Authors</a></li>
                            <li><a className="dropdown-item" href="#">Games</a></li>
                        </ul>
                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                </div>
            </div>
        </div>
    )
}


export default SearchBar;
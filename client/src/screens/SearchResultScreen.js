import React from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card'
import SimilarResultCard from '../components/Card/SimilarResultCard'


class SearchResultScreen extends React.Component {
    state = { 
        searchedType: "",
        searchedTitle: "",
        searchedForDescrip: "",
        searchedForWiky: "",
        searchedImage: "",
        similarities: [] 
      };

    onSearchSubmit = (term, category) => {
    this.setState({ searchedType: category })
    this.setState({ searchedImage: "" })
    // Tastedive API call to get similar results
    axios.get("https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar",
        {
        params: {
            q: term,
            type: category,
            info: 1,
            limit: 8,
        },
        headers: {
            Authorization: "",
        },
        }
    ).then((results) => {
        this.setState({ searchedTitle: results.data.Similar.Info[0].Name })
        this.setState({ searchedForDescrip: results.data.Similar.Info[0].wTeaser.substring(0, 100) })
        this.setState({ searchedForWiky: results.data.Similar.Info[0].wUrl })
        this.setState({ similarities: results.data.Similar.Results })
        // console.log(this.state.similarities);
    }).catch((err) => {
        // console.log(err);
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
        }).then((response) => {
            // console.log(response.data.value[0].thumbnail);
            this.setState({ searchedImage: response.data.value[0].thumbnail })
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        if (!this.state.searchedImage) {
            return (
                <div style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%" }}>            
                    <SearchBar onSearchBtnClick={this.onSearchSubmit} />
                </div>    
            )
        }
        if (this.state.searchedImage) {
            return (
            <div style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%" }}>
                <SearchBar onSearchBtnClick={this.onSearchSubmit} />
                <Card type={this.state.searchedType} image={this.state.searchedImage} title={this.state.searchedTitle} description={this.state.searchedForDescrip} moreInfo={this.state.searchedForWiky}/>
                <div className="row" style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%" }}>
                        {this.state.similarities.map((result) => {
                            return (
                                <div className="col-md-3" style={{ marginBottom: "3%" }}>
                                    <SimilarResultCard type={this.state.searchedType} video={result.yUrl} title={result.Name} description={result.wTeaser.substring(0, 80)} moreInfo={result.wUrl}/>
                                </div>
                            )
                        })}
                </div>
            </div>
            )
        }
    }
}


export default SearchResultScreen;

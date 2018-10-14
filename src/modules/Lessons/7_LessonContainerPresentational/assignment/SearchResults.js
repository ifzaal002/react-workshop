import React, { Component } from 'react';

import Loader from './Loader';
import FLIGHT_SEARCH_RESULTS from '../../../../util/resultsList';
import ResultsList from "./ResultsList";

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      isLoading: true,
    };
  }

  componentWillMount() {
    setTimeout(()=>{
      this.setState({results: FLIGHT_SEARCH_RESULTS, isLoading: !(FLIGHT_SEARCH_RESULTS && FLIGHT_SEARCH_RESULTS.length > 0)})
    }, 1000)
  }

  getCurrentView(){
    const {isLoading} = this.state;
    if (isLoading){
      return <Loader />;
    } else {
      return <ResultsList results={this.state.results}/>
    }

  }

  render() {
    const { isLoading } = this.state;

    return (
        <section className="info-panel">
          <h2>Search Results</h2>
          <div className="results-body">
            {this.getCurrentView()}
          </div>
        </section>
    )
  }
}

export default SearchResults;

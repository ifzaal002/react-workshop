import React from "react";
import axios from "axios";
import ErrorMsg from "./ErrorMsg";
import Results from "./Results";
import LoaderImage from "./LoaderImage";
import SearchBox from "./SearchBox";

import './Dashboard.css'
import ResultNotification from "./ResultNotification";

const APP_STATE = {
  IS_LOADING: 'IS_LOADING',
  IS_ERRORED: 'IS_ERRORED',
  IS_READY: 'IS_READY'
};

const DASHBOARD_TYPE = {
  USERS: 'USERS',
  REPOS: 'REPOS',
};

const API_URL = `https://api.github.com/users`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    let dashboardType = DASHBOARD_TYPE.USERS;
    let apiURL = API_URL;
    if (props.match && props.match.params.userId) {
      dashboardType = DASHBOARD_TYPE.REPOS;
      apiURL = `${API_URL}/${props.match.params.userId}/repos`;

    }


    this.state = {
      appState: APP_STATE.IS_LOADING,
      results: [],
      dashboard: dashboardType,
      query: '',
      error: '',
      apiUrl: apiURL,
    }
  }

  componentWillMount() {
    this.fetchData(this.onSuccess, this.onError);
  }

  componentWillReceiveProps(nextProps) {
    this.updateDashBoardState(nextProps.match);
    setTimeout(()=>{
      this.fetchData(this.onSuccess, this.onError);
    }, 1);
  }

  updateDashBoardState = (match) => {
    let dashboardType = DASHBOARD_TYPE.USERS;
    let apiURL = API_URL;
    if (match && match.params.userId) {
      dashboardType = DASHBOARD_TYPE.REPOS;
      apiURL = `${API_URL}/${match.params.userId}/repos`;
    }
    this.setState({
      appState: APP_STATE.IS_LOADING,
      results: [],
      dashboard: dashboardType,
      query: '',
      error: '',
      apiUrl: apiURL,
    });
  };


  onSuccess = (response) => {
    this.setState({appState: APP_STATE.IS_READY, results: response.data});
  };

  onError = (error) => {
    this.setState({appState: APP_STATE.IS_ERRORED, results: [], error: error});
  };


  fetchData = (onSuccess, onError) => {
    axios.get(this.state.apiUrl, {
      auth: {
        username: 'ifzal',
        password: 'arb1s0ft'
      }
    }).then(function (response) {
      onSuccess(response);
    }).catch(function (error) {
      onError(error)
    });
  };

  getActiveView = () => {
    switch (this.state.appState) {
      case APP_STATE.IS_LOADING:
        return <LoaderImage/>;
      case APP_STATE.IS_ERRORED:
        return <ErrorMsg error={this.state.error}/>;
      case APP_STATE.IS_READY:
        return <Results type={this.state.dashboard} results={this.getFilteredResults(this.state)}
                        query={this.state.query}/>;
    }
  };

  getFilteredResults = ({results, query, dashboard}) => {
    const searchTerm = dashboard === 'USERS' ? 'login' : 'name';
    return query ? results.filter((item) => {
      return item[searchTerm].indexOf(query) >= 0;
    }) : results;
  };

  onSearchInputChange = (e) => {
    e.preventDefault();
    const searchQuery = e.target.value;
    this.setState({query: searchQuery});
  };

  render() {
    return (
        <div className="git-dashboard">
          <h4>Git Dashboard</h4>
          <SearchBox onSearchInputChange={this.onSearchInputChange} query={this.state.query}/>
          <ResultNotification filteredResultsCount={this.getFilteredResults(this.state).length}
                              resultsCount={this.state.results.length}/>
          <div className="search-results">
            {
              this.getActiveView()
            }
          </div>
        </div>
    )
  }

}

export default Dashboard;

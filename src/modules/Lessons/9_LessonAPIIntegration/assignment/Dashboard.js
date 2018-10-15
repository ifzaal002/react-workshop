import React from "react";
import axios from "axios";
import ErrorMsg from "./ErrorMsg";
import Results from "./Results";
import LoaderImage from "./LoaderImage";

import './Dashboard.css'

const APP_STATE = {
  IS_LOADING: 'IS_LOADING',
  IS_ERRORED: 'IS_ERRORED',
  IS_READY: 'IS_READY'
};

const DASHBOARD_TYPE = {
  USERS: 'USERS',
  REPOS: 'REPOS',
};

const API_URL = `https://api.github.com`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appState: APP_STATE.IS_LOADING,
      results: [],
      dashboard: DASHBOARD_TYPE.USERS,
      error: '',
    }
  }

  componentWillMount() {
    this.fetchData(`${API_URL}/users`, this.onSuccess, this.onError);
  }

  onSuccess = (response)=>{
    this.setState({appState: APP_STATE.IS_READY, results: response.data});
  };

  onError = (error)=>{
    this.setState({appState: APP_STATE.IS_ERRORED, results: [], error: error});
  };


  fetchData = (url, onSuccess, onError) => {
    axios.get(url).then(function (response) {
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
        return <Results type={this.state.dashboard} results={this.state.results} onViewRepoClick={this.onViewRepoClick}/>;
    }
  };

  onViewRepoClick = (repoUrl)=>{
    this.setState({
      appState: APP_STATE.IS_LOADING,
      results: [],
      dashboard: DASHBOARD_TYPE.REPOS,
      error: '',
    });
    this.fetchData(repoUrl, this.onSuccess, this.onError);
  };

  render() {
    return (
        <div className="git-dashboard">
          <h4>Git Dashboard</h4>
          <div className="search-box"></div>
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

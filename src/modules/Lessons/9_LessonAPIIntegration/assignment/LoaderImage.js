import React from 'react';
import loaderImage from '../../../../static/img/loading-animation.gif';
import './Loader.css'

const Loader = () => <div className="loader-box">
  <span className="loader-box">Loading results... </span>
  <img src={loaderImage} className="loading-image"/>
</div>;

export default Loader;

import React from 'react';
import Timer from './Timer'

const Footer = () => {
  return (
      <footer className="App-footer">
        <span style={{float: 'left'}}><Timer/></span>
        <p className="Footer-title">
          GitHub REPO: <a href="https://github.com/InamTaj/react-workshop">InamTaj/react-workshop</a>
        </p>
      </footer>
  );
};


export default Footer;
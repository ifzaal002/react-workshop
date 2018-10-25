import React from 'react';

import Dashboard from '../assignment/Dashboard';

import './PracticeAPIIntegration.css'

const PracticeAPIIntegration = ({match}) => {
  return (
      <section className="lesson-api-integration info-panel">
        <h2>Practice API Integration</h2>
        <Dashboard match={match}/>
      </section>
  );
};

export default PracticeAPIIntegration;

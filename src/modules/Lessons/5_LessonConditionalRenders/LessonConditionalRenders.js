import React from 'react';
import PropTypes from 'prop-types';

import Intro from './components/ConditionalRenderIntro';
import DataView from "./components/DataView";

const LessonConditionalRenders = ({title}) => {
  return (
      <div className="lesson-container">
        <Intro title={title} />
        <div className="lesson-parts">
          <DataView />
        </div>
      </div>
  );
};

LessonConditionalRenders.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonConditionalRenders;

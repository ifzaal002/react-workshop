import React from 'react';
import PropTypes from 'prop-types';

import Intro from './assignment/LessonContPresIntro';
import SearchResults from './assignment/SearchResults';

const LessonContainerPresentational = ({title}) => {
  return (
      <div className="lesson-container">
        <Intro title={title}/>
        <div className="lesson-parts">
          <SearchResults />
        </div>
      </div>
  );
};

LessonContainerPresentational.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonContainerPresentational;

import React from 'react';
import {NavLink} from "react-router-dom";

const LESSON_TYPES = {
  JSX: {title: 'Introduction to JSX', link: '/lesson/jsx'},
  REACT_ELEMENTS: {title: 'React Elements', link: '/lesson/elements'},
  COMP_PROPS: {title: 'Components and Props', link: '/lesson/components-props'},
  STATE_LIFEHOOKS: {title: 'State & Lifecycle Hooks', link: '/lesson/state-lifecycle-hooks'},
  CONDITIONAL_RENDERS: {title: 'Conditional Rendering', link: '/lesson/conditional-rendering'},
  STATE_LIFTUP: {title: 'State Lift-up', link: '/lesson/state-liftup'},
  CONTAINER_PRESENT: {title: 'Container vs. Presentational', link: '/lesson/container-vs-presentational'},
  USER_DATA: {title: 'Handling User Data', link: '/lesson/handling-user-data'},
  API_INTEGRATION: {title: 'API Integration', link: '/lesson/api-integration'},
};

const Sidebar = () => {
  return (
      <aside>
        <ul className="lessons-list">
          {
            Object.values(LESSON_TYPES).map((lessonDetails) =>
              <li key={lessonDetails.link}>
                <NavLink to={lessonDetails.link} className="lesson-item">{lessonDetails.title}</NavLink>
              </li>)
          }
        </ul>
      </aside>
  )
};

export default Sidebar;

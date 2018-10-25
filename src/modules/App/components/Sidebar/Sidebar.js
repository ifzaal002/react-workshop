import React from 'react';
import {NavLink} from "react-router-dom";

const Sidebar = ({navLinks}) => {
  return (
      <aside>
        <ul className="lessons-list">
          {
            navLinks.map((lessonDetails) =>
              <li key={lessonDetails.link}>
                <NavLink to={lessonDetails.link} className="lesson-item">{lessonDetails.title}</NavLink>
              </li>)
          }
        </ul>
      </aside>
  )
};

export default Sidebar;

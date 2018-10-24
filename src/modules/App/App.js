import React, { Component } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from "./components/Sidebar/Sidebar";

import LessonJSX from "../Lessons/1_LessonJSX/LessonJSX";
import LessonElements from "../Lessons/2_LessonElements/LessonElements";
import LessonCompProps from "../Lessons/3_LessonCompProps/LessonCompProps";
import LessonStateLifeHooks from "../Lessons/4_LessonStateLifeHooks/LessonStateLifeHooks";
import LessonConditionalRenders from "../Lessons/5_LessonConditionalRenders/LessonConditionalRenders";
import LessonStateLiftup from "../Lessons/6_LessonStateLiftup/LessonStateLiftup";
import LessonContainerPresentational from "../Lessons/7_LessonContainerPresentational/LessonContainerPresentational";
import LessonUserData from "../Lessons/8_LessonUserData/LessonUserData";
import LessonAPIIntegration from "../Lessons/9_LessonAPIIntegration/LessonAPIIntegration";

import './App.css';
import '../Lessons/Lessons.css';
import WorkshopRoutes from "../../routes";


const LESSONS = {
  'jsx': {title: 'Introduction to JSX', link: '/lesson/jsx', lesson: LessonJSX},
  'elements': {title: 'React Elements', link: '/lesson/elements', lesson: LessonElements},
  'components-props': {title: 'Components and Props', link: '/lesson/components-props', lesson: LessonCompProps},
  'state-lifecycle-hooks': {title: 'State & Lifecycle Hooks', link: '/lesson/state-lifecycle-hooks', lesson: LessonStateLifeHooks},
  'conditional-rendering': {title: 'Conditional Rendering', link: '/lesson/conditional-rendering', lesson: LessonConditionalRenders},
  'state-liftup': {title: 'State Lift-up', link: '/lesson/state-liftup', lesson: LessonStateLiftup},
  'container-vs-presentational': {title: 'Container vs. Presentational', link: '/lesson/container-vs-presentational', lesson: LessonContainerPresentational},
  'handling-user-data': {title: 'Handling User Data', link: '/lesson/handling-user-data', lesson: LessonUserData},
  'api-integration': {title: 'API Integration', link: '/lesson/api-integration', lesson: LessonAPIIntegration},
};

const LessonLoader = (props) => {
  const lessonSlug = props.match.params.slug;
  const Lesson = LESSONS[lessonSlug].lesson;
    return (
        <Lesson title={LESSONS[lessonSlug].title}/>
    )
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="lessons">
          <Sidebar navLinks={Object.values(LESSONS)}/>
          <div className="lesson-body">
            <WorkshopRoutes lessonLoader={LessonLoader}/>
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;

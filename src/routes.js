import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LessonJSX from './modules/Lessons/1_LessonJSX/LessonJSX';
import LessonElements from './modules/Lessons/2_LessonElements/LessonElements';
import LessonCompProps from './modules/Lessons/3_LessonCompProps/LessonCompProps';
import LessonStateLifeHooks from './modules/Lessons/4_LessonStateLifeHooks/LessonStateLifeHooks';
import LessonConditionalRenders from './modules/Lessons/5_LessonConditionalRenders/LessonConditionalRenders';
import LessonStateLiftup from './modules/Lessons/6_LessonStateLiftup/LessonStateLiftup';
import LessonContainerPresentational from './modules/Lessons/7_LessonContainerPresentational/LessonContainerPresentational';
import LessonUserData from './modules/Lessons/8_LessonUserData/LessonUserData';
import LessonAPIIntegration from './modules/Lessons/9_LessonAPIIntegration/LessonAPIIntegration';
import Dashboard from "./modules/Lessons/Dashboard/Dashboard";
import PageNotFound from "./modules/App/components/ErrorPage/PageNotFound";


export default (
    <Switch>
      <Route path="/" exact render={(props) => <Dashboard {...props}/>} />
      <Route path="/lesson/jsx" render={(props) => <LessonJSX {...props}/>} />
      <Route path="/lesson/elements" component={LessonElements} />
      <Route path="/lesson/components-props" component={LessonCompProps} />
      <Route path="/lesson/state-lifecycle-hooks" component={LessonStateLifeHooks} />
      <Route path="/lesson/conditional-rendering" component={LessonConditionalRenders} />
      <Route path="/lesson/state-liftup" component={LessonStateLiftup} />
      <Route path="/lesson/container-vs-presentational" component={LessonContainerPresentational} />
      <Route path="/lesson/handling-user-data" component={LessonUserData} />
      <Route path="/lesson/api-integration" component={LessonAPIIntegration} />

      <Route component={PageNotFound}/>
    </Switch>
);

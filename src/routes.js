import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Dashboard from "./modules/Lessons/Dashboard/Dashboard";
import PageNotFound from "./modules/App/components/ErrorPage/PageNotFound";



const WorkshopRoutes = ({lessonLoader}) => {
  return (
      <Switch>
        <Route path="/" exact render={(props) => <Dashboard {...props}/>}/>

        <Route path="/lesson/:slug" component={lessonLoader}/>

        <Route component={PageNotFound}/>
      </Switch>
  )
};

export default WorkshopRoutes;

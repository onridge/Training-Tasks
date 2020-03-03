import React from "react";
import { Switch, Route } from "react-router";
import MainPage from "../pages/MainPage/MainPage";
import Task1 from "../pages/TheoreticalTasks/Task1/Task1";
import Task2 from "../pages/TheoreticalTasks/Task2/Task2";
import Task3 from "../pages/TheoreticalTasks/Task3/Task3";

function Routes() {
    return(
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/git/task1' component={Task1}/>
            <Route exact path='/git/task2' component={Task2}/>
            <Route exact path='/git/task3' component={Task3}/>
        </Switch>
    )
}

export default Routes;

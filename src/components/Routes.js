import React from "react";
import { Switch, Route } from "react-router";
import MainPage from "../pages/MainPage/MainPage";
import Task1 from "../pages/TheoreticalTasks/GIT/Task1/Task1";
import Task2 from "../pages/TheoreticalTasks/GIT/Task2/Task2";
import Task3 from "../pages/TheoreticalTasks/GIT/Task3/Task3";
import Task4 from "../pages/TheoreticalTasks/GIT/Task4/Task4";
import Task5 from "../pages/TheoreticalTasks/GIT/Task5/Task5";
import NetworkTask1 from "../pages/TheoreticalTasks/Network/NetworkTask1/NetworkTask1";
import JSTask1 from "../pages/TheoreticalTasks/JS/JSTask1/JSTask1";
import ReactTask1 from "../pages/TheoreticalTasks/React/ReactTask1/ReactTask1";
import ReactTask2 from "../pages/TheoreticalTasks/React/ReactTask2/ReactTask2";
import JSTask2 from "../pages/TheoreticalTasks/JS/JSTask2/JSTask2";
import JSTask3 from "../pages/TheoreticalTasks/JS/JSTask3/JSTask3";
import JSTask4 from "../pages/TheoreticalTasks/JS/JSTask4/JSTask4";
import PatternTask1 from "../pages/TheoreticalTasks/Patterns/PatternsTask1/PatternsTask1";
import PatternTask2 from "../pages/TheoreticalTasks/Patterns/PatternsTask2/PatternsTask2";
import PatternTask3 from "../pages/TheoreticalTasks/Patterns/PatternsTask3/PatternsTask3";
import PatternTask4 from "../pages/TheoreticalTasks/Patterns/PatternsTask4/PatternsTask4";
import Storage from "../pages/practicalTasks/Storage/Storage";
import cookiesCRD from "../pages/practicalTasks/CookiesCRD/cookiesCRD";
import DelegationEvent from "../pages/practicalTasks/DelegationEvent/DelegationEvent";
import IntersectionArray from "../pages/practicalTasks/intersectionArray/IntersectionArray";

function Routes() {
    return(
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/git/task1' component={Task1}/>
            <Route exact path='/git/task2' component={Task2}/>
            <Route exact path='/git/task3' component={Task3}/>
            <Route exact path='/git/task4' component={Task4}/>
            <Route exact path='/git/task5' component={Task5}/>
            <Route exact path='/network/task1' component={NetworkTask1}/>
            <Route exact path='/js/task1' component={JSTask1}/>
            <Route exact path='/react/task1' component={ReactTask1}/>
            <Route exact path='/patterns/task1' component={PatternTask1}/>
            <Route exact path='/patterns/task2' component={PatternTask2}/>
            <Route exact path='/patterns/task3' component={PatternTask3}/>
            <Route exact path='/patterns/task4' component={PatternTask4}/>
            <Route exact path='/react/task2' component={ReactTask2}/>
            <Route exact path='/js/task2' component={JSTask2}/>
            <Route exact path='/js/task3' component={JSTask3}/>
            <Route exact path='/js/task4' component={JSTask4}/>
            <Route exact path='/practical/task1' component={Storage} />
            <Route exact path='/practical/task2' component={cookiesCRD} />
            <Route exact path='/practical/task3' component={DelegationEvent} />
            <Route exact path='/practical/task4' component={IntersectionArray} />
        </Switch>
    )
}

export default Routes;

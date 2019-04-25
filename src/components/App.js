import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import Home from './landing/Home';
import CourseListContainer from './course/CourseListContainer'; // eslint-disable-line import/no-named-as-default
import CourseListContainer2 from './course/CourseListContainer2';
import CourseListContainer3 from './course/CourseListContainer3';  
import AddOrEditCourseContainer from './course/AddOrEditCourseContainer'; // eslint-disable-line import/no-named-as-default
import About from './About';
import createBrowserHistory from 'history/createBrowserHistory';
import HeaderNavContainer from './landing/HeaderNavContainer'; // eslint-disable-line import/no-named-as-default
import AddOrEditCourseContainer2 from './course/AddOrEditCourseContainer2';
import AddOrEditCourseContainer3 from './course/AddOrEditCourseContainer3';



const history = createBrowserHistory();


const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>

                    <HeaderNavContainer />

                    <Switch>
                        <Route exact path="/" component={CourseListContainer} />
                        <Route exact path="/course2" component={CourseListContainer2} />
                        <Route exact path="/course3" component={CourseListContainer3} />
                        <Route exact path="/course" component={AddOrEditCourseContainer} />
                        <Route exact path="/course2/course2" component={AddOrEditCourseContainer2} />
                        <Route exact path="/course3/course3" component={AddOrEditCourseContainer3} />

                        <Route path="/course/:id" component={AddOrEditCourseContainer} />
                        <Route path="/course2/course2/:id" component={AddOrEditCourseContainer2} />
                        <Route path="/course3/course3/:id" component={AddOrEditCourseContainer3} />
                        
                        <Route component={PageNotFound} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;
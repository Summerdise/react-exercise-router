import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import Home from "./home";

const About = (props) => {
    return (
        <Router>
            <Fragment>
                <p>Company:ThoughtWorks Local</p>
                <p>Location:Xi`an</p>
                <br />
                <p>For more information, please</p>
                <p>view our
                <Link to="/" className="nav_link">website</Link>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </p>
            </Fragment>
        </Router>
    )
}

export default About;
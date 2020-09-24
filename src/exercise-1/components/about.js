import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {
    return (
        <Fragment>
            <p>Company:ThoughtWorks Local</p>
            <p>Location:Xi`an</p>
            <br />
            <p>For more information, please</p>
            <p>view our
                <Link to="/" className="nav_link">website</Link>
            </p>
        </Fragment>
    )
}

export default About;
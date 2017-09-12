import React from 'react';
import {Link ,NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';


const Base = ({ props, children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left" style={props}>
        <NavLink to="/">Home</NavLink>
      </div>

      <div className="top-bar-right">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>

    </div>

    {children}

  </div>
);

Base.PropTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
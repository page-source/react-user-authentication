import React from 'react';
import {Link ,NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';


const Base = ({ props, children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left" style={props}>
      {Auth.isUserAuthenticated() ? (
        <NavLink to="/dashboard">Home</NavLink>
      ) : (
        <NavLink to="/">Home</NavLink>
      )}
      </div>

    {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout">Log out</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}


    </div>

    {children}

  </div>
);

Base.PropTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
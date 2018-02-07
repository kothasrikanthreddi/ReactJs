import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

const HomePage = ({ isAuthenticated , logout }) => (
  <div>
    <h1>Home Page</h1>
    {isAuthenticated ? <button onClick={ () => logout() }>Logout</button> : (<div><Link to="/login">Login</Link> or <Link to="/adduser">Add User</Link></div>)}
  </div>
);

HomePage.prototypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(action){
  return {
    isAuthenticated: !!action.user.token 
  }
}
export default connect(mapStateToProps, { logout : actions.logout })(HomePage);

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import { Button } from "react-bootstrap";

const HomePage = ({ isAuthenticated , logout }) => (
  <div>
    <h1>Home Page</h1>
    {isAuthenticated ? <Button bsStyle='success' onClick={ () => logout() }>Logout</Button> : (<div><Button bsStyle="link"><Link to="/login">Login</Link></Button> or <Button bsStyle="link"> <Link to="/adduser">Add User</Link></Button></div>)}
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

import React from "react";
import { Grid , Row , Table , Col , Clearfix ,PageHeader, Navbar , Nav , NavItem , MenuItem , NavDropdown , Button , Glyphicon} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import OdinSupportStyle from '../../css/odin.css';

const NavbarComponent = ({ isAuthenticated , logout }) => (
    <div>
    {isAuthenticated ? 
            <Navbar className="navbar-inverse OdinSupportStyle.navbar">
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">ODIN Support App</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <LinkContainer to="/adduser">
    <NavItem eventKey={2}>Add User</NavItem>
  </LinkContainer> 
  <LinkContainer to="/dashboard">
    <NavItem eventKey={2}>Dashboard</NavItem>
  </LinkContainer> 
  <LinkContainer to="/colors">
    <NavItem eventKey={2}>Colors</NavItem>
  </LinkContainer> 
  <LinkContainer to="/progressbar">
    <NavItem eventKey={2}>ProgressBar</NavItem>
  </LinkContainer>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}> Some Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>   
    <Button bsStyle='glyphicon pull-left' onClick={ () => logout() }>
        <Glyphicon glyph="off" />
      </Button>
  </Nav>
</Navbar> :  <Navbar className="navbar-inverse"> <Navbar.Header>
<Navbar.Brand>
  <a href="#home">ODIN Support App</a>
</Navbar.Brand>
</Navbar.Header>


</Navbar> } </div>
        );
    

NavbarComponent.prototypes = {
    isAuthenticated: PropTypes.bool.isRequired ,
    logout: PropTypes.func.isRequired  
  };

function mapStateToProps(action){
    return {
      isAuthenticated: !!action.user.token 
    }
  }

export default connect(mapStateToProps, { logout : actions.logout })(NavbarComponent);
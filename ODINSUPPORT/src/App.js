import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import AddUserPage from "./components/pages/AddUserPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import { Button } from "react-bootstrap";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Grid , Row , Table , Col , Clearfix  } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import Sidebar from './components/Sidebar/Sidebar';
import {Switch, Redirect} from 'react-router-dom';
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Colors from "./components/ProgressBar/Colors";


const App = ({ location }) => (
  <div className="">
   
    <Navbar></Navbar>
    <Footer></Footer>
    <div id="app"></div>
    <div> 

<br>
</br>
<br>
</br>
<Grid>
  <Row className="show-grid">
    <Col sm={6} md={3}>     
    <Sidebar></Sidebar>
    </Col>
    <Col md={9}>     
    <Route location={location} path="/" exact component={HomePage} />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <UserRoute location={location} path="/adduser" exact component={AddUserPage} />
    <UserRoute
      location={location}
      path="/dashboard"
      exact
      component={DashboardPage}
    />
    <UserRoute location={location} path="/colors" exact component={Colors} />
    <UserRoute location={location} path="/progressbar" exact component={ProgressBar} />
    </Col>
    
  </Row>
</Grid>
<br>
</br>
<br>
</br>
<br>
</br>
{/*<Table striped bordered condensed hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>; */}
</div>
   

  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
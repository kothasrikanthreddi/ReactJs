import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap';
import Sidebar from '../Sidebar/Sidebar';


const DashboardPage = () => (
<div> 
<h1>Welcome to dashboard</h1>

</div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  dummySentences: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    dummySentences : [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'Donec hendrerit tempor tellus.',
      'Donec pretium posuere tellus.',
      'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      'Nulla posuere.',
      'Donec vitae dolor.',
      'Nullam tristique diam non turpis.',
      'Cras placerat accumsan nulla.',
      'Nullam rutrum.',
      'Nam vestibulum accumsan nisl.'
    ]
  };
}

export default connect(mapStateToProps)(DashboardPage);
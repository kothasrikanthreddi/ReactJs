import React from 'react';
import { render } from 'react-dom';

import styled from 'styled-components';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { ic_people } from 'react-icons-kit/md/ic_people';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart';
import PropTypes from "prop-types";
import { Link , NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import OdinSupportStyle from '../../css/odin.css';
import profileimage from '../../Images/sree.jpg';
//import { Router } from 'react-router-dom';
import { Router, browserHistory } from 'react-router';


const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;

const BaseContainer = props =>
    <div
        style={{
            display: 'inline-block',
            paddingTop: 16,
            paddingBottom: 16,
            fontFamily: 'Roboto',
            width: 240,
            ...props.style
        }}
    >
        {props.children}
    </div>;

const Title = styled.div`
    padding: 12px;
`;

const Separator = styled.div`
    padding-right: 12px;
`;
const SeparatorTitleContainer = styled.div`
    font-size: 14px;
    color: #AAA;
    margin: 10px 12px;
    padding: 4px 12px 2px;
`;
const SeparatorTitle = props => {
    return (
        <SeparatorTitleContainer>
            {props.children}
            <hr style={{ border: 0, borderTop: '1px solid #E5E5E5' }} />
        </SeparatorTitleContainer>
    );
};



const SideNavWithAlerts  = props => {
    return (
    <SideNav
        hoverBgColor="#232a2f"
        hoverColor="red"
        highlightBgColor="#00acac"
        defaultSelected="products"
        highlightColor="#FFF"
    >
        <div />
        <Nav id="dashboard">
            <NavIcon><Icon20 icon={ic_aspect_ratio} /></NavIcon>
            <NavText> Dashboard </NavText>
            <Link to="/adduser">Here</Link>
        </Nav>

        <Nav id="products">
            <NavIcon><Icon20 icon={ic_business_center} /></NavIcon>
            <NavText> Products </NavText>
        </Nav>
        <Nav id="orders">
            <NavIcon><Icon20 icon={ic_format_list_bulleted} /></NavIcon>
            <NavText>
                {' '}<span style={{ paddingRight: 6 }}>Orders</span>{' '}
                <span
                    style={{
                        textAlign: 'center',
                        lineHeight: '16px',
                        height: 16,
                        width: 16,
                        margin: '0 auto',
                        borderRadius: '50%',
                        fontSize: 9,
                        display: 'inline-block',
                        color: '#FFF',
                        background: '#ff5b57'
                    }}
                >
          
                </span>
            </NavText>
        </Nav>

        <Nav id="customers">
            <NavIcon><Icon20 icon={ic_people} /></NavIcon>
            <NavText> Customers </NavText>
            <Nav id="dashboard2">
                <NavIcon><Icon20 size={16} icon={ic_aspect_ratio} /></NavIcon>
                <NavText> Search </NavText>
            </Nav>
            <Nav
                id="sales2"
                onNavClick={() => {
                    //console.log('Promote clicked!', arguments);
                    this.props.history.push("/adduser");
                }}
            >
                <NavIcon><Icon20 size={16} icon={ic_business} /></NavIcon>
                <NavText> Promote </NavText>
            </Nav>
            <Nav id="products2">
                <NavIcon><Icon20 size={16} icon={ic_business_center} /></NavIcon>
                <NavText> Social Media </NavText>
            </Nav>
        </Nav>
        <Nav
            id="sales"
            onNavClick={() => {
                console.log('Sales clicked!', arguments);
            }}
        >
            <NavIcon><Icon20 icon={ic_business} /></NavIcon><NavText> Sales </NavText>
        </Nav>
        <Nav id="deliveries">
            <NavIcon><Icon20 icon={ic_shopping_cart} /></NavIcon>
            <NavText> Deliveries </NavText>
        </Nav>
    </SideNav> )};



const Sidebar = ({ isAuthenticated , logout }) => (
    <div>
    {isAuthenticated ? 
            <div style={{ display: 'flex' }}>
           
                <Separator />
                <BaseContainer
                    style={{
                        fontSize: 12,
                        background: '#2d353c',
                        color: '#a8acb1',
                        paddingTop: 0
                    }}
                >
                    <div style={{ display: 'flex', padding: 16, background: '#1a2229' }}>
                        <div style={{ width: 40, height: 40 }}>
                            <img
                                src={profileimage}
                                style={{ borderRadius: '30px', width: 40, height: 40 }}
                            />
                        </div>
                        <div style={{ paddingLeft: 6, paddingTop: 6 }}>
                            <div style={{ fontSize: 12, color: '#E5E5E5' }}>
                                {' '}Sreekanth{' '}
                            </div>
                            <div style={{ fontSize: 11 }}> UI Developer</div>
                        </div>
                    </div>
                    <SideNavWithAlerts />
                </BaseContainer>
                <Separator />
             
                <Separator />
            </div> : <div></div>} </div>
 );
Sidebar.prototypes = {
    isAuthenticated: PropTypes.bool.isRequired ,
    logout: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired  
  };

function mapStateToProps(action){
    return {
      isAuthenticated: !!action.user.token 
    }
  }

export default connect(mapStateToProps, { logout : actions.logout })(Sidebar);
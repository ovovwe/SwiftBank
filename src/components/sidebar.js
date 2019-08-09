import React from 'react';
import pic1 from './../images/faces/face1.jpg';

import '../css/style.css';

import Dashboard from './dashboard';
import Withdrawal from './withdrawal';
import Transfer from './transfer';
import Airtime from './airtime';
import PayBills from './paybills';

import Main from '../index';

import {Switch, Router, Route, Link} from 'react-router-dom';

class SideBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {componentToRender: <div></div>};
    }

    render() {
        return (
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-profile">
                        <div className="nav-link">
                            <div className="user-wrapper">
                                <div className="profile-image">
                                    <img src={pic1} alt="profile image"/>
                                </div>
                                <div className="text-wrapper">
                                    <p className="profile-name">John Doe</p>
                                    <div>
                                        <small className="designation text-muted">savings</small>
                                        <span className="status-indicator online"></span>
                                    </div>
                                </div>
                            </div>


                            <button className="btn btn-block"
                                    style={{background:"linear-gradient(120deg, #ffaf00, #dc3545)"}}
                                    onClick={this.clickOnSomething}>Withdrawal
                                <i className="mdi mdi-arrow-left"></i>
                            </button>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href={Dashboard}>
                            <i className="menu-icon fa fa-dashboard"></i>
                            <span className="menu-titles">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={Transfer}>
                            <i className="menu-icon mdi mdi-transfer"></i>
                            <span className="menu-title">Transfer</span>
                            <i class="badge badge-primary">5</i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={Airtime}>
                            <i className="menu-icon mdi mdi-cards"></i>
                            <span className="menu-title">Airtime Recharge</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={PayBills}>
                            <i className="menu-icon fa fa-money"></i>
                            <span className="menu-title">Pay bills</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/icons/font-awesome.html">
                            <i className="menu-icon mdi mdi-history"></i>
                            <span className="menu-title">Trasaction history</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/icons/font-awesome.html">
                            <i className="menu-icon mdi mdi-settings"></i>
                            <span className="menu-title">Settings</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );

    }
}
export default SideBar;
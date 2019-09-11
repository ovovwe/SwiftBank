import React from 'react';
import pic1 from './../images/faces/face1.jpg';

import {BrowserRouter as Router, Link} from 'react-router-dom';

class SideBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {componentToRender: <div></div>};
    }

    render() {
        return (
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                {
                   /* alert(window.location.pathname)*/

                }
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

                            <Link className="btn btn-block btn-gradient" to="/withdraw">Withdrawal
                                <i className="mdi mdi-arrow-left"></i>

                            </Link>
                        </div>
                    </li>

                    {window.location.pathname==='/dashboard'?
                        (
                            <li className="nav-item active">
                                <Link className="nav-link" to="/dashboard">
                                    <i className="menu-icon fa fa-dashboard"></i>
                                    <span className="menu-titles">Dashboard</span>
                                </Link>
                            </li>
                        ):(
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">
                                    <i className="menu-icon fa fa-dashboard"></i>
                                    <span className="menu-titles">Dashboard</span>
                                </Link>
                            </li>
                        )
                    }
                    {window.location.pathname==='/transfer'?
                        (
                            <li className="nav-item active">
                                <Link className="nav-link" to="/transfer">
                                    <i className="menu-icon mdi mdi-transfer"></i>
                                    <span className="menu-title">Transfer</span>
                                    <i className="badge badge-primary">5</i>
                                </Link>
                            </li>
                        ):(
                        <li className="nav-item">
                            <Link className="nav-link" to="/transfer">
                                <i className="menu-icon mdi mdi-transfer"></i>
                                <span className="menu-title">Transfer</span>
                                <i className="badge badge-primary">5</i>
                            </Link>
                        </li>
                        )
                    }
                    {window.location.pathname==='/airtime'?
                        (
                            <li className="nav-item active">
                                <Link className="nav-link" to="/airtime">
                                    <i className="menu-icon mdi mdi-cards"></i>
                                    <span className="menu-title">Airtime Recharge</span>
                                </Link>
                            </li>
                        ):(

                        <li className="nav-item">
                            <Link className="nav-link" to="/airtime">
                                <i className="menu-icon mdi mdi-cards"></i>
                                <span className="menu-title">Airtime Recharge</span>
                            </Link>
                        </li>
                        )
                    }
                    {window.location.pathname==='/paybills'?
                        (
                            <li className="nav-item active">
                                <Link className="nav-link" to="/paybills">
                                    <i className="menu-icon fa fa-money"></i>
                                    <span className="menu-title">Pay bills</span>
                                </Link>
                            </li>
                        ):(

                        <li className="nav-item">
                            <Link className="nav-link" to="/paybills">
                                <i className="menu-icon fa fa-money"></i>
                                <span className="menu-title">Pay bills</span>
                            </Link>
                        </li>
                        )
                    }
                    {window.location.pathname==='/history'?
                        (
                            <li className="nav-item active">
                                <Link className="nav-link" to="/history">
                                    <i className="menu-icon mdi mdi-history"></i>
                                    <span className="menu-title">Trasaction history</span>
                                </Link>
                            </li>
                        ):(

                        <li className="nav-item">
                            <Link className="nav-link" to="/history">
                                <i className="menu-icon mdi mdi-history"></i>
                                <span className="menu-title">Trasaction history</span>
                            </Link>
                        </li>
                        )
                    }
                    {window.location.pathname==='/settings'?
                        (
                            <li className="nav-item active">
                                <Link className="nav-link" to="/settings">
                                    <i className="menu-icon mdi mdi-settings"></i>
                                    <span className="menu-title">Settings</span>
                                </Link>
                            </li>
                        ):(

                        <li className="nav-item">
                            <Link className="nav-link" to="/settings">
                                <i className="menu-icon mdi mdi-settings"></i>
                                <span className="menu-title">Settings</span>
                            </Link>
                        </li>
                        )
                    }

                </ul>
            </nav>
        );

    }
}
export default SideBar;
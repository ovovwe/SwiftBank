import React from 'react';
import ReactDOM from 'react-dom';
//import logo from './../images/logo.svg';
import swiftbanklogo from './../images/swiftbank.png';
//import logo_mini from './../images/logo-mini.svg';
import logo_mini from './../images/swiftbank-mobile1.png';
import pic1 from './../images/faces/face1.jpg';

import '../css/style.css';


class NavBar extends React.Component{
    render(){
        return(

           // <!-- partial:partials/_navbar.html -->
            <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                    <a className="navbar-brand brand-logo" href="index.html">
                        <img src={swiftbanklogo} alt="logo" />
                    </a>
                    <a className="navbar-brand brand-logo-mini" href="index.html">
                        <img src={logo_mini} alt="logo" />
                    </a>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center">

                    <ul className="navbar-nav navbar-nav-right">

                        <li className="nav-item dropdown d-none d-xl-inline-block">
                            <a className="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                                <span className="profile-text">Hi, Doe </span>
                                <img className="img-xs rounded-circle"  src={pic1} alt="Profile main pic" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                                <a className="dropdown-item p-0">

                                </a>
                                <a className="dropdown-item mt-2">
                                    Manage Accounts
                                </a>
                                <a className="dropdown-item">
                                    Change Password
                                </a>
                                <a className="dropdown-item">
                                    Check Inbox
                                </a>
                                <a className="dropdown-item">
                                    Sign Out
                                </a>
                            </div>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-menu"></span>
                    </button>
                </div>
            </nav>
        //<!-- partial -->
            
        );
    }
}
export default NavBar;
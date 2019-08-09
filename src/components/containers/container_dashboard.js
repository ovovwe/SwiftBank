import React from 'react';
import ReactDOM from 'react-dom';
import pic1 from './../../images/faces/face1.jpg';

import '../../css/style.css';

//import components
import Footer from '../footer';

class ContainerDashboard extends React.Component{
    render(){
        return(

            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row purchace-popup">
                        <div className="col-12">
              <span className="d-block d-md-flex align-items-center">
                <p>Like what you see? Check out our premium version for more.</p>
                <a className="btn ml-auto download-button d-none d-md-block" href="https://github.com/BootstrapDash/StarAdmin-Free-Bootstrap-Admin-Template" target="_blank">Download Free Version</a>
                <a className="btn purchase-button mt-4 mt-md-0" href="https://www.bootstrapdash.com/product/star-admin-pro/" target="_blank">Upgrade To Pro</a>
                <i className="mdi mdi-close popup-dismiss d-none d-md-block"></i>
              </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card ">
                            <div className="card card-statistics border-radius-6 shadow">
                                <div className="card-body">
                                    <div className="clearfix">
                                        <div className="float-left">
                                            <i className="mdi mdi-cash-multiple text-success icon-lg"></i>
                                        </div>
                                        <div className="float-right">
                                            <p className="mb-0 text-right">Available Balance</p>
                                            <div className="fluid-container">
                                                <h3 className="font-weight-medium text-right mb-0 text-success">&#x20A6;65,650</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-muted mt-3 mb-0">
                                        <i className="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower growth
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                            <div className="card card-statistics border-radius-6 shadow">
                                <div className="card-body">
                                    <div className="clearfix">
                                        <div className="float-left">
                                            <i className="mdi mdi-arrow-left text-warning icon-lg"></i>
                                        </div>
                                        <div className="float-right">
                                            <p className="mb-0 text-right">Total Withdrawal</p>
                                            <div className="fluid-container">
                                                <h3 className="font-weight-medium text-right mb-0">&#x20A6;3,455</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-muted mt-3 mb-0">
                                        <i className="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> Product-wise sales
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                            <div className="card card-statistics border-radius-6 shadow">
                                <div className="card-body">
                                    <div className="clearfix">
                                        <div className="float-left">
                                            <i className="mdi mdi mdi-arrow-right text-success icon-lg"></i>
                                        </div>
                                        <div className="float-right">
                                            <p className="mb-0 text-right">Total Deposit</p>
                                            <div className="fluid-container">
                                                <h3 className="font-weight-medium text-right mb-0">&#x20A6;5,693</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-muted mt-3 mb-0">
                                        <i className="mdi mdi-close-outline mr-1" aria-hidden="true"></i> Weekly Sales
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                            <div className="card card-statistics border-radius-6 shadow">
                                <div className="card-body">
                                    <div className="clearfix">
                                        <div className="float-left">
                                            <i className="mdi mdi-cash text-info icon-lg"></i>
                                        </div>
                                        <div className="float-right">
                                            <p className="mb-0 text-right">Ledger Balance</p>
                                            <div className="fluid-container">
                                                <h3 className="font-weight-medium text-right mb-0">&#x20A6;2,46</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-muted mt-3 mb-0">
                                        <i className="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 grid-margin">
                            <div className="card shadow border-radius-6">
                                <div className="card-body">
                                    <div className="row d-none d-sm-flex mb-4">
                                        <div className="col-4">
                                            <h5 className="text-primary">Unique Visitors</h5>
                                            <p>34657</p>
                                        </div>
                                        <div className="col-4">
                                            <h5 className="text-primary">Bounce Rate</h5>
                                            <p>45673</p>
                                        </div>
                                        <div className="col-4">
                                            <h5 className="text-primary">Active session</h5>
                                            <p>45673</p>
                                        </div>
                                    </div>
                                    <div className="chart-container">
                                        <canvas id="dashboard-area-chart" height="80"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 grid-margin">
                            <div className="card shadow border-radius-6">
                                <div className="card-body">
                                    <h4 className="card-title">Orders</h4>
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>
                                                    #
                                                </th>
                                                <th>
                                                    First name
                                                </th>
                                                <th>
                                                    Progress
                                                </th>
                                                <th>
                                                    Amount
                                                </th>
                                                <th>
                                                    Sales
                                                </th>
                                                <th>
                                                    Deadline
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="font-weight-medium">
                                                    1
                                                </td>
                                                <td>
                                                    Herman Beck
                                                </td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-success progress-bar-striped" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0"
                                                             aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    $ 77.99
                                                </td>
                                                <td className="text-danger"> 53.64%
                                                    <i className="mdi mdi-arrow-down"></i>
                                                </td>
                                                <td>
                                                    May 15, 2015
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-medium">
                                                    2
                                                </td>
                                                <td>
                                                    Messsy Adam
                                                </td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-danger progress-bar-striped" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0"
                                                             aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    $245.30
                                                </td>
                                                <td className="text-success"> 24.56%
                                                    <i className="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td>
                                                    July 1, 2015
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-medium">
                                                    3
                                                </td>
                                                <td>
                                                    John Richards
                                                </td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0"
                                                             aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    $138.00
                                                </td>
                                                <td className="text-danger"> 28.76%
                                                    <i className="mdi mdi-arrow-down"></i>
                                                </td>
                                                <td>
                                                    Apr 12, 2015
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-medium">
                                                    4
                                                </td>
                                                <td>
                                                    Peter Meggik
                                                </td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary progress-bar-striped" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0"
                                                             aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    $ 77.99
                                                </td>
                                                <td className="text-danger"> 53.45%
                                                    <i className="mdi mdi-arrow-down"></i>
                                                </td>
                                                <td>
                                                    May 15, 2015
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-medium">
                                                    5
                                                </td>
                                                <td>
                                                    Edward
                                                </td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-danger progress-bar-striped" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0"
                                                             aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    $ 160.25
                                                </td>
                                                <td className="text-success"> 18.32%
                                                    <i className="mdi mdi-arrow-up"></i>
                                                </td>
                                                <td>
                                                    May 03, 2015
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-medium">
                                                    6
                                                </td>
                                                <td>
                                                    Henry Tom
                                                </td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{width: '20%'}} aria-valuenow="20" aria-valuemin="0"
                                                             aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    $ 150.00
                                                </td>
                                                <td className="text-danger"> 24.67%
                                                    <i className="mdi mdi-arrow-down"></i>
                                                </td>
                                                <td>
                                                    June 16, 2015
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 grid-margin">
                            <div className="card shadow border-radius-6">
                                <div className="card-body">
                                    <h5 className="card-title mb-4">Manage Tickets</h5>
                                    <div className="fluid-container">
                                        <div className="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3">
                                            <div className="col-md-1">
                                                <img className="img-sm rounded-circle mb-4 mb-md-0" src="images/faces/face1.jpg" alt="profile image" />
                                            </div>
                                            <div className="ticket-details col-md-9">
                                                <div className="d-flex">
                                                    <p className="text-dark font-weight-semibold mr-2 mb-0 no-wrap">James :</p>
                                                    <p className="text-primary mr-1 mb-0">[#23047]</p>
                                                    <p className="mb-0 ellipsis">Donec rutrum congue leo eget malesuada.</p>
                                                </div>
                                                <p className="text-gray ellipsis mb-2">Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim
                                                    vivamus.
                                                </p>
                                                <div className="row text-gray d-md-flex d-none">
                                                    <div className="col-4 d-flex">
                                                        <small className="mb-0 mr-2 text-muted text-muted">Last responded :</small>
                                                        <small className="Last-responded mr-2 mb-0 text-muted text-muted">3 hours ago</small>
                                                    </div>
                                                    <div className="col-4 d-flex">
                                                        <small className="mb-0 mr-2 text-muted text-muted">Due in :</small>
                                                        <small className="Last-responded mr-2 mb-0 text-muted text-muted">2 Days</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ticket-actions col-md-2">
                                                <div className="btn-group dropdown">
                                                    <button type="button" className="btn btn-success dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Manage
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fa fa-reply fa-fw"></i>Quick reply</a>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fa fa-history fa-fw"></i>Another action</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fa fa-times text-danger fa-fw"></i>Close Issue</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3">
                                            <div className="col-md-1">
                                                <img className="img-sm rounded-circle mb-4 mb-md-0" src="images/faces/face2.jpg" alt="profile image" />
                                            </div>
                                            <div className="ticket-details col-md-9">
                                                <div className="d-flex">
                                                    <p className="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Stella :</p>
                                                    <p className="text-primary mr-1 mb-0">[#23135]</p>
                                                    <p className="mb-0 ellipsis">Curabitur aliquet quam id dui posuere blandit.</p>
                                                </div>
                                                <p className="text-gray ellipsis mb-2">Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Curabitur non nulla sit amet
                                                    nisl.
                                                </p>
                                                <div className="row text-gray d-md-flex d-none">
                                                    <div className="col-4 d-flex">
                                                        <small className="mb-0 mr-2 text-muted">Last responded :</small>
                                                        <small className="Last-responded mr-2 mb-0 text-muted">3 hours ago</small>
                                                    </div>
                                                    <div className="col-4 d-flex">
                                                        <small className="mb-0 mr-2 text-muted">Due in :</small>
                                                        <small className="Last-responded mr-2 mb-0 text-muted">2 Days</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ticket-actions col-md-2">
                                                <div className="btn-group dropdown">
                                                    <button type="button" className="btn btn-success dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Manage
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fa fa-reply fa-fw"></i>Quick reply</a>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fa fa-history fa-fw"></i>Another action</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fa fa-times text-danger fa-fw"></i>Close Issue</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ticket-card mt-3">
                                            <div className="col-md-1">
                                                <img className="img-sm rounded-circle mb-4 mb-md-0" src="images/faces/face3.jpg" alt="profile image" />
                                            </div>
                                            <div className="ticket-details col-md-9">
                                                <div className="d-flex">
                                                    <p className="text-dark font-weight-semibold mr-2 mb-0 no-wrap">John Doe :</p>
                                                    <p className="text-primary mr-1 mb-0">[#23246]</p>
                                                    <p className="mb-0 ellipsis">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.</p>
                                                </div>
                                                <p className="text-gray ellipsis mb-2">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Lorem ipsum dolor sit amet.</p>
                                                <div className="row text-gray d-md-flex d-none">
                                                    <div className="col-4 d-flex">
                                                        <small className="mb-0 mr-2 text-muted">Last responded :</small>
                                                        <small className="Last-responded mr-2 mb-0 text-muted">3 hours ago</small>
                                                    </div>
                                                    <div className="col-4 d-flex">
                                                        <small className="mb-0 mr-2 text-muted">Due in :</small>
                                                        <small className="Last-responded mr-2 mb-0 text-muted">2 Days</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ticket-actions col-md-2">
                                                <div className="btn-group dropdown">
                                                    <button type="button" className="btn btn-success dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Manage
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fa fa-reply fa-fw"></i>Quick reply</a>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fa fa-history fa-fw"></i>Another action</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fa fa-times text-danger fa-fw"></i>Close Issue</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>



        );
    }
}
export default ContainerDashboard;
import React from 'react';

import '../../css/style.css';

//import components
import Footer from '../footer';

class ContainerDashboard extends React.Component {
    render() {
        return (

            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row purchace-popup">
                        <div className="col-12">
              <span className="d-block d-md-flex align-items-center">
                <p>Like what you see? Check out our premium version for more.</p>
                <a className="btn ml-auto download-button d-none d-md-block"
                   href="https://github.com/BootstrapDash/StarAdmin-Free-Bootstrap-Admin-Template" target="_blank">Download
                    Free Version</a>
                <a className="btn purchase-button mt-4 mt-md-0"
                   href="https://www.bootstrapdash.com/product/star-admin-pro/" target="_blank">Upgrade To Pro</a>
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
                                                <h3 className="font-weight-medium text-right mb-0 text-success">&#x20A6;
                                                    65,650</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-muted mt-3 mb-0">
                                        <i className="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower
                                        growth
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
                                        <i className="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i>
                                        Product-wise sales
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
                                                        <div className="progress-bar bg-success progress-bar-striped"
                                                             role="progressbar" style={{width: '25%'}}
                                                             aria-valuenow="25" aria-valuemin="0"
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
                                                        <div className="progress-bar bg-danger progress-bar-striped"
                                                             role="progressbar" style={{width: '75%'}}
                                                             aria-valuenow="75" aria-valuemin="0"
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
                                                        <div className="progress-bar bg-warning progress-bar-striped"
                                                             role="progressbar" style={{width: '90%'}}
                                                             aria-valuenow="90" aria-valuemin="0"
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
                                                        <div className="progress-bar bg-primary progress-bar-striped"
                                                             role="progressbar" style={{width: '50%'}}
                                                             aria-valuenow="50" aria-valuemin="0"
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
                                                        <div className="progress-bar bg-danger progress-bar-striped"
                                                             role="progressbar" style={{width: '35%'}}
                                                             aria-valuenow="35" aria-valuemin="0"
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
                                                        <div className="progress-bar bg-warning progress-bar-striped"
                                                             role="progressbar" style={{width: '20%'}}
                                                             aria-valuenow="20" aria-valuemin="0"
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
                </div>

                <Footer />

            </div>



        );
    }
}
export default ContainerDashboard;
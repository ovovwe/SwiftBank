/**
 * Created by ma on 8/7/2019.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import '../../css/style.css';

import mtn from '../../images/network_operators/mtn.png';
import glo from '../../images/network_operators/glo.png';
import nineMobile from '../../images/network_operators/9mobile.jpeg';
import airel from '../../images/network_operators/airtel.png';

//import components
import Footer from '../footer';

class ContainerAirtime extends React.Component{
    render(){

        var logoStyle = {maxWidth: '130px',

        }

        return(



            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row purchace-popup">
                        <div className="col-12">

                            <h3 style={{textAlign:"center"}} classname="align-items-center center">Airtime Recharge</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 grid-margin stretch-card ">
                            <div className="card card-statistics border-radius-6 shadow">
                                <div className="card-body">
                                    <div className="clearfix">
                                        <div className="float-left">
                                            <i className="mdi mdi-cash-multiple text-success icon-lg"></i>
                                        </div>
                                        <div className="float-right">
                                            <p className="mb-0 text-right">Available balance</p>
                                            <div className="fluid-container">
                                                <h3 className="font-weight-medium text-right mb-0">&#x20A6;65,650</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-muted mt-3 mb-0">
                                        <i className="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower growth
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 grid-margin">
                            <h3>Operator </h3>

                            <div className="row ">

                                <div className="mr-md-3 col-md-2 col-sm-6 grid-margin align-items-center stretch-card card shadow">
                                    <div className="form-radio form-radio-flat">
                                        <label className="form-check-label" htmlFor="mtn">
                                            <div style={{display:"block;"}}>
                                                <img style={logoStyle} className="img img-fluid" src={mtn} alt="MTN" />
                                            </div>
                                            <div>
                                                <input type="radio" className="form-check-input" name="operator" id="mtn" value="mtn" />
                                                <i className="input-helper"></i>
                                            </div>
                                        </label>
                                    </div>
                                </div>



                                <div className="mr-md-3 col-md-2 col-sm-6 grid-margin align-items-center stretch-card card shadow">
                                    <div className="form-radio form-radio-flat">
                                        <label className="form-check-label" htmlFor="glo">
                                            <img style={logoStyle} className="img img-fluid" src={glo} alt="GLO" />
                                         <input type="radio" className="form-check-input" name="operator" id="glo" value="glo" />
                                            <i className="input-helper"></i>
                                        </label>
                                    </div>
                                </div>


                                <div className="mr-md-3 col-md-2 col-sm-6 grid-margin align-items-center stretch-card card shadow">
                                    <div className="form-radio form-radio-flat">
                                        <label className="form-check-label" htmlFor="airtel">
                                            <img style={logoStyle} className="img img-fluid" src={airel} alt="Airtel" />
                                         <input type="radio" className="form-check-input" name="operator" id="airtel" value="airtel" />
                                            <i className="input-helper"></i>
                                        </label>
                                    </div>
                                </div>


                                <div className="mr-md-3 col-md-2 col-sm-6 grid-margin align-items-center stretch-card card shadow">
                                    <div className="form-radio form-radio-flat">
                                        <label className="form-check-label" htmlFor="9mobile">
                                            <img style={logoStyle} className="img img-fluid" src={nineMobile} alt="9Mobile" />
                                         <input type="radio" className="form-check-input" name="operator" id="9mobile" value="9mobile" />
                                            <i className="input-helper"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-radius-6 shadow">
                                <div className="card-body col-md-6">
                                    <form className="form" action="#" method="post">

                                        <div className="form-group row">
                                            <label for="phoneNumber" className="col-sm-3 col-form-label">Recipient number</label>
                                            <div className="col-sm-9">
                                                <input type="tel" className="form-control" id="phoneNumber" placeholder="Phone number" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="amount" className="col-sm-3 col-form-label">Amount</label>
                                            <div className="col-sm-9">
                                                <input type="tel" className="form-control" id="amount" placeholder="Amount" />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label for="pin" className="col-sm-3 col-form-label">Enter PIN</label>
                                            <div className="col-sm-9">
                                                <input type="tel" className="form-control" id="pin" placeholder="PIN" />
                                            </div>
                                        </div>


                                        <div className="row mt-5">
                                            <div className="form-group mr-4">
                                                <input type="submit" value="recharge" className="btn btn-primary" />
                                            </div>
                                            <div className="form-group">
                                                <input type="reset" value="clear fields" className="btn btn-outline-danger" />
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>









                    <div className="row">
                        <div className="col-12 grid-margin">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4 className=" mb-4">Transfer history</h4>
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
                                <div className="card-footer">
                                    <span className="pagination"> <span className="active">1</span><span>2</span><span>3</span><span>4</span></span>
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
export default ContainerAirtime;
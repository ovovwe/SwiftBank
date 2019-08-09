/**
 * Created by ma on 8/7/2019.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import '../../css/style.css';

import '../../vendors/iconfonts/simple-line-icon/css/simple-line-icons.css';
import '../../vendors/iconfonts/ti-icons/css/themify-icons.css';

//import components
import Footer from '../footer';

class ContainerPayBills extends React.Component{
    render(){
        return(

            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row purchace-popup">
                        <div className="col-12">

                            <h3 style={{textAlign:"center"}} classname="align-items-center center">PayBills</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card ">
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
                        <div className="col-md-6 grid-margin">
                            <div className="card border-radius-6 shadow">
                                <div className="card-body">
                                    <form className="form" action="#" method="post">
                                        <div className="form-group row">
                                            <label for="actNo" className="col-sm-3 col-form-label">Category</label>
                                            <div className="col-sm-9">
                                                <select className="form-control" name="bank">
                                                    <option value="airlines">Airlines</option>
                                                    <option value="cable-tv">Cable TV</option>
                                                    <option value="charities">Charities</option>
                                                    <option value="churches">Churches</option>
                                                    <option value="electricity-power">Electricity/Power</option>
                                                    <option value="fashion">Fashion</option>
                                                    <option value="fastfood-restaurants">Fastfood & Restaurants</option>
                                                    <option value="fmcg">FMCG</option>
                                                    <option value="fuel-service-station">Fuel Service Station</option>
                                                    <option value="gaming-lottery">Gaming/Lottery</option>
                                                    <option value="hotels">Hotels</option>
                                                    <option value="insurance">Insurance</option>
                                                    <option value="internet-service-providers">Internet Service Providers</option>
                                                    <option value="investment">Investment</option>
                                                    <option value="microfinance">Microfinance</option>
                                                    <option value="mobile-wallet">Mobile Wallet</option>
                                                    <option value="multinationals">Multinationals</option>
                                                    <option value="ngos">NGOs</option>
                                                    <option value="schools">Schools</option>
                                                    <option value="shipping">Shipping</option>
                                                    <option value="taxes-and-levies">Taxes and Levies</option>
                                                    <option value="telecommunications">Telecommunications</option>
                                                    <option value="transportation">Transportation</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="actNo" className="col-sm-3 col-form-label">Select Biller</label>
                                            <div className="col-sm-9">
                                                <select className="form-control" name="bank">
                                                    <option value="klm">KLM</option>
                                                    <option value="airfrance">AIRFRANCE</option>
                                                    <option value="virgin">Virgin</option>
                                                    <option value="overland-airways">Overland Airways</option>
                                                    <option value="egypt-air">Egypt Air</option>
                                                    <option value="asky-airlines">Asky Airlines</option>
                                                    <option value="delta-airlines">Delta Airlines</option>
                                                    <option value="emirates">Emirates</option>
                                                    <option value="kenya-airways">Kenya Airways</option>
                                                    <option value="south-africa-air">South Africa Air</option>
                                                    <option value="royal-air-maroc">Royal Air Maroc</option>
                                                    <option value="ethiopian-airlines">Ethiopian Airlines</option>
                                                    <option value="african-world-airline">African World Airline</option>
                                                    <option value="turkish-airlines-mobil">Turkish Airlines Mobil</option>
                                                    <option value="air-cote-divoire">Air Cote D'voire</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="amount" className="col-sm-3 col-form-label">Amount</label>
                                            <div className="col-sm-9">
                                                <input type="tel" className="form-control" id="amount" placeholder="Amount" />
                                            </div>
                                        </div>

                                        <div className="form-check form-check-flat">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" /> Save as beneficiary
                                                    <i className="input-helper"></i>
                                            </label>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 "></label>
                                            <div className="col-sm-9">
                                                <span  className="text-warning">We need your pin to authorize this transaction</span>
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
                                                <input type="submit" value="withdraw" className="btn btn-primary" />
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
                            <div className="card shadow border-radius-6">
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
export default ContainerPayBills;
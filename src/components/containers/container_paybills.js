/**
 * Created by ma on 8/7/2019.
 */
import React from 'react';


import '../../vendors/iconfonts/simple-line-icon/css/simple-line-icons.css';
import '../../vendors/iconfonts/ti-icons/css/themify-icons.css';

//import components
import Footer from '../footer';

class ContainerPayBills extends React.Component {

    constructor() {
        super();
        this.state = {
            category: '',
            biller: '',
            amount: '',
            saveBeneficiary:false,
            pin: ''
        }
    }

    submitPayBillsForm(event) {
        event.preventDefault();

        var categoryValue = event.target.elements.categoryName.value;
        var billerValue = event.target.elements.billerName.value;
        var amountValue = event.target.elements.amountName.value;
        var beneficiaryValue = event.target.elements.saveBeneficiaryName.value;
        var pinValue = event.target.elements.pinName.value;

        this.setState({
            category: categoryValue,
            biller: billerValue,
            amount: amountValue,
            saveBeneficiary: beneficiaryValue,
            pin: pinValue
        });

        console.log(categoryValue);
        console.log(billerValue);
        console.log(amountValue);
        console.log(beneficiaryValue);
        console.log(pinValue);
    }

    render() {
        return (

            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row purchace-popup">
                        <div className="col-12">

                            <h3 style={{textAlign:"center"}} className="align-items-center center">PayBills</h3>
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
                                        <i className="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower
                                        growth
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 grid-margin">
                            <div className="card border-radius-6 shadow">
                                <div className="card-body">
                                    <form className="form" onSubmit={this.submitPayBillsForm.bind(this)}>
                                        <div className="form-group row">
                                            <label htmlFor="actNo" className="col-sm-3 col-form-label">Category</label>
                                            <div className="col-sm-9">
                                                <select className="form-control" name="categoryName">
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
                                                    <option value="internet-service-providers">Internet Service Providers </option>
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
                                            <label htmlFor="actNo" className="col-sm-3 col-form-label">Select Biller</label>
                                            <div className="col-sm-9">
                                                <select className="form-control" name="billerName">
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
                                                    <option value="turkish-airlines-mobil">Turkish Airlines Mobil
                                                    </option>
                                                    <option value="air-cote-divoire">Air Cote D'voire</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="amount" className="col-sm-3 col-form-label">Amount</label>
                                            <div className="col-sm-9">
                                                <input type="tel" name="amountName" className="form-control" id="amount"
                                                       placeholder="Amount"/>
                                            </div>
                                        </div>

                                        <div className="form-check form-check-flat">
                                            <label className="form-check-label">
                                                <input type="checkbox" name="saveBeneficiaryName" className="form-check-input"/> Save as
                                                beneficiary
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 "></label>
                                            <div className="col-sm-9">
                                                <span className="text-warning">We need your pin to authorize this transaction</span>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="pin" className="col-sm-3 col-form-label">Enter PIN</label>
                                            <div className="col-sm-9">
                                                <input type="tel" name="pinName" className="form-control" id="pin" placeholder="PIN"/>
                                            </div>
                                        </div>


                                        <div className="row mt-5">
                                            <div className="form-group mr-4">
                                                <input type="submit" value="pay" className="btn btn-gradient"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="reset" value="clear fields"
                                                       className="btn btn-outline-danger"/>
                                            </div>
                                        </div>

                                        <div id="loading-div" className="row alert alert-primary">
                                            <span className="fa fa-spinner fa-spin fa-2x text-primary"></span> &nbsp;<span className="text-primary">Please wait...</span>
                                        </div>

                                    </form>
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
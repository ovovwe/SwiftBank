/**
 * Created by ma on 8/7/2019.
 */
import React from 'react';
import pic1 from './../../images/faces/face1.jpg';

//import HandleWithdrawal from './../form_handler/handle_withdrawal';

//import components
import Footer from '../footer';

class ContainerWithdrawal extends React.Component {
    constructor() {
        super();
        this.state = {
            bank: '',
            accountNumber: '',
            amount: '',
            pin: ''
        }
    }

    submitWithdrawalForm(event) {
        var bankValue = event.target.elements.bankName.value;
        var accountNumberValue = event.target.elements.accountNumberName.value;
        var amountValue = event.target.elements.amountName.value;
        var pinValue = event.target.elements.pinName.value;

        this.setState({
            bank: bankValue,
            accountNumber: accountNumberValue,
            amount: amountValue,
            pin: pinValue
        });

        console.log(bankValue);
        console.log(accountNumberValue);
        console.log(amountValue);
        console.log(pinValue);

        event.preventDefault();

    }

    render() {
        return (

            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row purchace-popup">
                        <div className="col-12">

                            <h3 style={{textAlign:"center"}} className="align-items-center center">Withdrawal</h3>
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
                                                <h3 className="font-weight-medium text-right mb-0 text-success">&#x20A6;65,650</h3>
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
                                    <form className="form" onSubmit={this.submitWithdrawalForm.bind(this)}>
                                        <div className="form-group row">
                                            <label htmlFor="actNo" className="col-sm-3 col-form-label">Bank</label>
                                            <div className="col-sm-9">
                                                <select className="form-control" name="bankName">
                                                    <option value="access">ACCESS BANK NIGERIA</option>
                                                    <option value="ecobank">ECOBANK NIGERIA PLC</option>
                                                    <option value="fidelity">FIDELITY BANK PLC</option>
                                                    <option value="firstbank">FIRST BANK PLC</option>
                                                    <option value="gtb">GTBANK PLC</option>
                                                    <option value="uba">UNITED BANK FOR AFRICA PLC</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="actNo" className="col-sm-3 col-form-label">Account
                                                Number</label>
                                            <div className="col-sm-9">
                                                <input type="tel" className="form-control" id="actNoID" name="accountNumberName"
                                                       placeholder="Account number"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="amount" className="col-sm-3 col-form-label">Amount</label>
                                            <div className="col-sm-9">
                                                <input type="tel" name="amountName" className="form-control" id="amount"
                                                       placeholder="Amount"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <p htmlFor="amount" className="text-success font-weight-bold">Fetched
                                                account
                                                name found!</p>
                                            <p htmlFor="amount" className="text-danger font-weight-bold">Fetched account
                                                name not found!</p>
                                        </div>

                                        <p htmlFor="amount" className="text-primary font-weight-bold">We need your pin
                                            to
                                            authorize this transaction</p>
                                        <div className="form-group row">
                                            <label htmlFor="pin" className="col-sm-3 col-form-label">Enter PIN</label>
                                            <div className="col-sm-9">
                                                <input type="tel" name="pinName" className="form-control" id="pin" placeholder="PIN"/>
                                            </div>
                                        </div>

                                        <div className="row mt-5">
                                            <div className="form-group mr-4">
                                                <input type="submit" value="withdraw" className="btn btn-gradient"/>
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
export default ContainerWithdrawal;
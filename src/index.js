import React from 'react';
import ReactDOM from 'react-dom';

//import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard';
import Withdrawal from './components/withdrawal';
import Transfer from './components/transfer';
import Airtime from './components/airtime';
import PayBills from './components/paybills';
import NotFound from './components/not_found';

import './vendors/iconfonts/font-awesome/css/font-awesome.css';
import './vendors/iconfonts/mdi/css/materialdesignicons.min.css';


import { BrowserRouter, Switch, Route} from 'react-router-dom';

import { withRouter } from "react-router";

class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <main>
						<Route path="/" exact component={Dashboard}/>
						<Route path="/dashboard" exact component={Dashboard}/>
                        <Route path="/withdraw" exact component={Withdrawal}/>
                        <Route path="/transfer" exact component={Transfer}/>
                        <Route path="/airtime" exact component={Airtime}/>
                        <Route path="/paybills" exact component={PayBills}/>
                    {//<Route component={NotFound}/>
                         }
                </main>

            </BrowserRouter>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById("root"));


//<Dashboard />
//<Withdrawal />
// <Transfer />
//<Airtime />
//<PayBills />




//
//<Route path="/" exact component={withRouter(Dashboard)}/>
//<Route path="/withdraw" exact component={withRouter(Withdrawal)}/>
//    <Route path="/transfer" exact component={withRouter(Transfer)}/>
//    <Route path="/airtime" exact component={withRouter(Airtime)}/>
//    <Route path="/paybills" exact component={withRouter(PayBills)}/>
//    <Route component={withRouter(NotFound)}/>
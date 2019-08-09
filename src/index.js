import React from 'react';
import ReactDOM from 'react-dom';

//import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard';
import Withdrawal from './components/withdrawal';
import Transfer from './components/transfer';
import Airtime from './components/airtime';
import PayBills from './components/paybills';

import './vendors/iconfonts/font-awesome/css/font-awesome.css';
import './vendors/iconfonts/mdi/css/materialdesignicons.min.css';

class Main extends React.Component{
    render(){
        return (
            <main>
                <Dashboard />
            </main>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById("root"));

//<Dashboard />
//<Withdrawal />
// <Transfer />
//<Airtime />
//<PayBills />
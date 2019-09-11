import React from 'react';
import ReactDOM from 'react-dom';

// importing components
import Dashboard from './components/dashboard';
import Withdrawal from './components/withdrawal';
import Transfer from './components/transfer';
import Airtime from './components/airtime';
import PayBills from './components/paybills';
import NotFound from './components/not_found';


//import './css/style.css';

//import DarkLightTheme from './components/theme_import_js/dark_light_theme';






// importing material icons
import './vendors/iconfonts/font-awesome/css/font-awesome.css';
import './vendors/iconfonts/mdi/css/materialdesignicons.min.css';


import { BrowserRouter, Switch, Route} from 'react-router-dom';

import { withRouter } from "react-router";

class Main extends React.Component {
    render() {

        var isDarkMode  = true;

        if (isDarkMode) {
            import('./css/style.css')
                .then((something) => {
                    //console.log(something.something);
                });
        }

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
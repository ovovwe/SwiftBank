import React from 'react';
//import '../css/style.css';

// importing components
import NavBar from './navbar';
import SideBar from './sidebar';
import ContainerAirtime from './containers/airtime_container';

class Airtime extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>

                <div className="container-fluid page-body-wrapper">
                    <SideBar />
                    <ContainerAirtime />
                </div>
            </div>

        );
    }

//&#x20A6;
}
export default Airtime;
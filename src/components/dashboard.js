import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.css';

// importing components
import NavBar from './navbar';
import SideBar from './sidebar';
import ContainerDashboard from './containers/container_dashboard';

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>

                <div className="container-fluid page-body-wrapper">
                    <SideBar />
                    <ContainerDashboard />
                </div>
            </div>
        );
    }
//&#x20A6;
}
export default Dashboard;
import React from 'react';


// importing components
import NavBar from './navbar';
import SideBar from './sidebar';
import ContainerWithdrawal from './containers/container_withdrawal';



class Withdrawal extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>

                <div className="container-fluid page-body-wrapper">
                    <SideBar />
                    <ContainerWithdrawal />
                </div>
            </div>

        );
    }

//&#x20A6;
}
export default Withdrawal;
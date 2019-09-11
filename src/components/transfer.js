import React from 'react';


// importing components
import NavBar from './navbar';
import SideBar from './sidebar';
import ContainerTransfer from './containers/container_transfer';

class Transfer extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>

                <div className="container-fluid page-body-wrapper">
                    <SideBar />
                    <ContainerTransfer />
                </div>
            </div>

        );
    }

//&#x20A6;
}
export default Transfer;
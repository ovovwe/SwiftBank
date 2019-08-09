import React from 'react';

import '../css/style.css';

// importing components
import NavBar from './navbar';
import SideBar from './sidebar';
import ContainerTransfer from './containers/transfer_container';

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
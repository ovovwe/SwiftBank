import React from 'react';

// importing components
import NavBar from './navbar';
import SideBar from './sidebar';
import ContainerPayBills from './containers/paybills_container';

class PayBills extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>

                <div className="container-fluid page-body-wrapper">
                    <SideBar />
                    <ContainerPayBills />
                </div>
            </div>

        );
    }
}
export default PayBills;
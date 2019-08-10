import React from 'react';

import '../css/style.css';

// importing components
import NavBar from './navbar';
import SideBar from './sidebar';
import Footer from './footer';
import ContainerNotFound from './containers/container_not_found';

class NotFound extends React.Component {
    render() {
        return (
            <main>
            <div style={{backgroundColor:"#eee", minHeight: "550px"}}>
                <NavBar />
                <h1 className="" style={{textAlign:"center", marginTop:"100px"}}>NOT FOUND </h1>


            </div>
                <Footer />
                </main>
        );
    }

//&#x20A6;
}
export default NotFound;
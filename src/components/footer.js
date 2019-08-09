import React from 'react'
import ReactDOM from 'react-dom'


class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid clearfix">
                    <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
                        Copyright © 2018
                      <a href="http://swiftbank.com" target="_blank"> SwiftBank</a>. All rights reserved.
                    </span>
                </div>
            </footer>
        );
    }
}
export default Footer;
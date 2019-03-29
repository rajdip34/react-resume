import React, { Component } from 'react';
import './Nevigation.css';

class Nevigation extends Component {



    render() {
        const nevBarArry = ['Home', 'About', 'Services', 'Portfolio', 'Contact Us'];
        const navLink = nevBarArry.map(nevBar => {
            return (
                <li><a href={'/' + nevBar}> {nevBar}</a></li >
            )
        })
        return (
            <nav className="Nevbar" >
                <h2 className="hade">{this.props.logoTitle}</h2>
                <ul className="ul">
                    {navLink}
                </ul>

            </nav>

        )
    }
}

export default Nevigation;

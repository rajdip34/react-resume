import React, { Component } from 'react';
import img4 from './img/img4.jpeg';
import './css/Header.css';


var sectionStyle = {
    backgroundSize: 'cover',
    height: "80vh",
    backgroundImage: `url(${img4})`
};

class Header extends Component {
    render() {
        return (
            <header className='head' style={sectionStyle} >
                <h2>Hello World</h2>
                <h1>{this.props.title}</h1>
                <p>I'm a Full-Stack Web Developer and Cyber Security Engineer</p>
                <a href="/button" className="turquoise" >{this.props.button}</a>
            </header>



        )
    }
}

export default Header

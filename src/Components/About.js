import React, { Component } from 'react'
import './css/About.css';

class About extends Component {
    render() {
        return (
            <div className='about'>
                <h1>About</h1>
                <div className='banner'>
                    <h1>Full-Stack Web Developer and Cyber Security Engineer</h1>
                    <hr />
                    <p> HTML5/CSS3| BootStrap | JavaScript | React | Anguler | NodeJS | Python | Dajngo | Flusk | C | Flutter | Linux Server | Docker | Apache2 | Mysql | MongoDB | LDAP </p>
                    <div className="socal-link">

                        <a href="https://google.com" terget="_blank"><i class="fab fa-google"></i></a>
                        <a href="https://github.com/rajdip34" terget="_blank"><i class="fab fa-github"></i></a>
                        <a href="https://facebook.com" terget="_blank"><i class="fab fa-facebook"></i></a>
                        <a href="https://instagram.com" terget="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://youtube.com" terget="_blank"><i class="fab fa-youtube"></i></a>
                        <a href="https://twitter.com" terget="_blank"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>

            </div>
        )
    }
}

export default About

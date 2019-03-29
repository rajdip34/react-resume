import React, { Component } from 'react'
import './css/Services.css';
import services from './img/services.jpg';

var sectionStyle1 = {
    backgroundSize: 'cover',
    height: "80vh",
    backgroundImage: `url(${services})`
};
class Services extends Component {
    render() {
        return (
            <div className='services' style={sectionStyle1}>
                <h3>Services</h3>
                <h2>My Services</h2>
                <div className='row'>

                    <div className='font-end'><span><i class="fab fa-firefox"></i></span>
                        <h4> Front-end Web Development</h4>
                        <p>React js , Valu js ,Anguler js</p>
                    </div>
                    <div className='back-end'><span><i class="fas fa-server"></i></span>
                        <h4> Back-end Web Development</h4>
                        <p>Django,Flask, Node js,php Codeigniter.. </p>
                    </div>
                    <div className='web-app-hack'><span><i class="fas fa-user-check"></i></span>
                        <h4>Web Application Pentesting</h4>
                        <p>Web/Mobile application Pentesting like SQL Injection, Cross-Site Scripting, Cross-Site Request Forgery.....</p>

                    </div>

                    <div className='web-server-hack'><span><i class="fas fa-shield-alt"></i></span>
                        <h4>Server Pentesting</h4>
                        <p>Packet capture analysis software, advanced penetration testing Linux distributions server testing ...</p>
                    </div>
                </div>


            </div >
        )
    }
}

export default Services;

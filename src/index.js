import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Nevigation from './Nevigation';
import Header from './Components/Header';
import Services from './Components/Services';
import About from './Components/About';


class App extends Component {
    render() {
        return (
            <div>
                <Nevigation logoTitle='SecurityHub' />
                <Header title="I'm Rajdip" button='Find Out More' />
                <About />
                <Services />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


import React, { Component } from 'react';
import Home from '../components/home/Home';
import Header from "../components/common/Header";

class App extends Component {
    render() {
        return (
            <div>
                <Header />        
                <Home />
            </div>
        )
    }
}

export default App;
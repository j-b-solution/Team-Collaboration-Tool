
import React, { Component } from 'react';
import Home from '../components/home/homeComponent';

import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
    render() {
        return (
            <div>
                <Home />
            </div>
        )
    }
}

export default App;
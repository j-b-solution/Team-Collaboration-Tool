import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import InputBox from './chatbox/_inputBox';
import socketio from 'socket.io-client'
import { BrowserRouter as Link } from "react-router-dom";
import { withRouter } from "react-router-dom";


const socket = socketio.connect('http://localhost:8080')
class SearchBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            owner: [],
            username: [],
            currentUserName: sessionStorage.getItem('user'),
            team_id: this.props.match.params.team_id,
            currentUsersName: []
        }
    }

    componentWillMount() {
        fetch(`http://localhost:8080/api/auth/dashboard/${this.state.team_id}/owner`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({
                    owner: data.userList
                });
            },
                error => {
                    this.setState({
                        error: error
                    });
                },
            );
    }
    componentDidMount() {

        fetch(`http://localhost:8080/api/auth/dashboard/${this.state.team_id}/saver`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify({
                
                username: this.state.currentUserName
            })
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({
                    currentUsersName: data.currenUserList
                });
                console.log("ADSDSA")
            },

                error => {
                    this.setState({
                        error: error
                    });
                },
            );
    }
    _renderCurrentUser = () => {
        const userList = this.state.owner.map((owner, index) => {
            return (
                <div key={index}>
                    <span>chat room owner</span>
                    <span>: {owner.owner_username}</span>
                </div>
            )
        })
        return userList;

    }

    render() {
        return (
            <section>
                <div className="SearchBox_container">
                    <button className="SearchBox" alt="prompt search box">
                        <FontAwesomeIcon icon={faSearch} />&nbsp; JUMP TO
                <span className="tooltiptext">TODO: Need to promp search box</span>
                    </button>
                </div>
                <div>
                    Current Joining User.
                    <div>{this._renderCurrentUser()}</div>
                </div>
            </section>
        );
    }
}

SearchBox.propTypes = {

}

SearchBox.defaultProps = {

}

export default withRouter(SearchBox);
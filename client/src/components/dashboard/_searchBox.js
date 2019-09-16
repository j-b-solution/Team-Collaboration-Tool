import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import socketio from 'socket.io-client'
import { withRouter } from "react-router-dom";
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const socket = socketio.connect('https://jb-solutions.herokuapp.com')
class SearchBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chatuserlist: '',
            username: [],
            currentUserName: sessionStorage.getItem('user'),
            team_id: this.props.match.params.team_id,
            currentUsersName: []
        }
    }
    componentWillMount() {
        fetch(`https://jb-solutions.herokuapp.com/api/auth/dashboard/${this.state.team_id}/saver`, {
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
        fetch(`https://jb-solutions.herokuapp.com/api/auth/dashboard/${this.state.team_id}/userList`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({
                    chatuserlist: data.userList
                });
            },
                error => {
                    this.setState({
                        error: error
                    });
                },
            );
    }

    _renderJoinUser = () => {
        const _joinUserList = this.state.chatuserlist.join_username.map((joinuser, index) => {
            return (
                <div key={index}>
                    &nbsp;&nbsp;<FontAwesomeIcon icon={faUser} size="lg" />&nbsp;{joinuser}
                </div>
            )

        })
        return _joinUserList
    }

    _renderOwnerUser = () => {
        return (
            <div>
                <span>&nbsp;<FontAwesomeIcon icon={faCrown} size="lg" />&nbsp;Owner</span>
                <span>: {this.state.chatuserlist.owner_username}</span>
            </div>
        )
    }
    render() {
        const { chatuserlist } = this.state;
        return (
            <section>
                <div className="SearchBox_container">
                    <button className="SearchBox" alt="prompt search box">
                        <FontAwesomeIcon icon={faSearch} />&nbsp; JUMP TO
                <span className="tooltiptext">TODO: Need to promp search box</span>
                    </button>
                </div>
                <div className="SearchBox_userList">
                    <div>{this._renderOwnerUser()}</div>
                    <div className="SearchBox_user">{this.state.chatuserlist ? this._renderJoinUser() : ""}</div>
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
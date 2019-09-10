import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import InputBox from './_inputBox';
import socketio from 'socket.io-client'
import LoadingBar from '../../common/Loading_bar';

const socket = socketio.connect('http://localhost:8080');

class ChatBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            team_id: this.props.match.params.team_id,
            user_loggedIn: sessionStorage.getItem("user"),
            msg: '',
            logs: []
        }
    }
    componentDidMount() {
        fetch(`http://localhost:8080/api/auth/dashboard/${this.state.team_id}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({
                    msg: data.chatList
                });
            },
            error => {
                this.setState({
                    error: error
                });
            },
        );
        this._foucsOnBottom();
    }

    componentDidUpdate(prevProps, prevState) {
        this._foucsOnBottom();
    }
    componentWillMount() {
        // 실시간으로 로그를 받게 설정
        socket.on('chat-msg', (obj) => {
            const logs2 = this.state.logs
            obj.key = 'key_' + (this.state.logs.length + 1)
            this.setState({ logs: logs2.concat(obj) })
        })

    }
    _foucsOnBottom = () => {
        const {thing} = this.refs;
        thing.scrollTop = thing.scrollHeight - thing.clientHeight;
    }
    _renderHistory = () => {
        let date = '';
        let prevUser = '';
        const history = this.state.msg.map((msg, index) => {
            let dateChanged = false;
            if(index === 0) {
                date = msg.created.substring(0,10);
                dateChanged = true;
            }
            if(date !== msg.created.substring(0,10)){
                date = msg.created.substring(0,10); 
                dateChanged = true;
            }
            const msgStyleName = msg.username === this.state.user_loggedIn ? "msg right" : "msg left"

            const isSameUser = (msg.username === prevUser && !dateChanged ) ? true : false
            prevUser = msg.username;
            return (
                <Fragment key={index}>
                    { dateChanged ? <p className="Separator Date"><span>{date}</span></p> : '' }
                    <div className={msgStyleName}>
                        { isSameUser ? "" 
                        : 
                            <p className="msg_user">{msg.username}</p> 
                        }
                        <span className="msg_context">  {msg.message}</span>
                        <p></p>
                    </div>
                </Fragment>
        )})
        return history;
    }

    _renderLiveMessage = () => {
        let prevUser = '';

        const messages = this.state.logs.map(message => {
            
            const msgStyleName = message.name === this.state.user_loggedIn ? "msg right" : "msg left";
            const isSameUser = message.name === prevUser  ? true : false
            prevUser = message.name;

            return (
                <div key={message.key} className={msgStyleName}>
                    { isSameUser ? "" 
                    : 
                        <p className="msg_user">{message.name}</p> 
                    }                    
                    <span  className="msg_context"> {message.message}</span>
                    <p></p>
                </div>
            )
        })
        return messages;
    }

    render() {
        const { msg } = this.state;
        const { title, description } = this.props;
        return (
            <div className="ChatBox_Container">
                <div className="ChatBox_titleBox">
                    <p className="ChatBox_title">{title}</p>
                    <p className="ChatBox_desc">{description}</p>
                </div>
                <div ref={`thing`} className="ChatBox_msg">
                    { msg ? 
                        <Fragment>
                            <div>{this._renderHistory()}</div>
                            <p className="Separator"><span> message has loaded</span></p>
                        </Fragment>
                    :
                    <LoadingBar  type='cylon' color='#214368' msg='Loading message history...' />
                    }

                    <div>{this._renderLiveMessage()}</div>
                </div>
                <div className="ChatBox_msg_inputBox">
                    <InputBox team_id={this.state.team_id}/>
                </div>
            </div>
        )
    }
}

ChatBox.defaultProps = {
    title: 'Notice',
    description: 'This topic is a basic topic that all active members are automatically involved and cannot get out of.'
}

ChatBox.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}


export default ChatBox;
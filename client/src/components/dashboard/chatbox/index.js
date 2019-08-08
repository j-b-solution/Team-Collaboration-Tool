import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputBox from './_inputBox';
import socketio from 'socket.io-client'
const socket = socketio.connect('http://localhost:8080')

class ChatBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logs: []
        }
    }
    // 컴포넌트가 마운트됐을 때 --- (※5)
    componentDidMount() {
        // 실시간으로 로그를 받게 설정
        socket.on('chat-msg', (obj) => {
            const logs2 = this.state.logs
            obj.key = 'key_' + (this.state.logs.length + 1)
            console.log(obj)
            logs2.unshift(obj) // 로그에 추가하기
            this.setState({ logs: logs2 })
        })
    }
    render() {
        const messages = this.state.logs.map(e => (
            <div key={e.key}>
                <span>{e.name}</span>
                <span>:{e.message}</span>
                <p/>
            </div>
        ))
        const { title, description } = this.props;
        return (
            <div className="ChatBox_Container">
                <div className="ChatBox_titleBox">
                    <p className="ChatBox_title">{title}</p>
                    <p className="ChatBox_desc">{description}</p>
                </div>
                <div className="ChatBox_msg">
                    TODO: Message box, bring message history
                    <div>{messages}</div>
                </div>
                <div className="ChatBox_msg_inputBox">
                    <InputBox />
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
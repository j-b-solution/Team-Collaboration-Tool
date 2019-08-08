import React from 'react';
import socketio from 'socket.io-client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
const socket = socketio.connect('http://localhost:8080')

class InputBox extends React.Component  {
    constructor(props) {
        super(props)
        this.state = { name: '', message: '' }
    }
    nameChanged(e) {
        this.setState({ name: e.target.value })
    }
    messageChanged(e) {
        this.setState({ message: e.target.value })
    }
   //send name and msg to server
    send() {
        socket.emit('chat-msg', {
            name: this.state.name,
            message: this.state.message
        })
        this.setState({ message: '' }) // initialize msg box after send msg
    }
    render() {
        return (
            <div>
                <form className="InputBox_Body">
                    <div className="InputBox_btnPlus">
                        <FontAwesomeIcon icon={faPlusCircle} size="2x" />
                    </div>
                    <form id="chat">
                    <input value={this.state.name}
                    onChange={e => this.nameChanged(e)} placeholder="user name"/><br />
                    <input value={this.state.message}
                    onChange={e => this.messageChanged(e)} placeholder="Enter MSG"/><br />
                        <input type="button" onClick={e => this.send()} class="chat" value="send"/>
                    </form>                    
                </form>
            </div>
        )
    }
}

export default InputBox;
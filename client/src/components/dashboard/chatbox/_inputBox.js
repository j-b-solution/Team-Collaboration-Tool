import React from 'react';
import socketio from 'socket.io-client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'


const socket = socketio.connect('http://localhost:8080')

class InputBox extends React.Component {

    constructor(props) {
        super(props)
        this.state = { name: sessionStorage.getItem('user'), message: ' ' }
    }

    messageChanged(e) {
        this.setState({ message: e.target.value })
    }
    //send name and msg to server
    send() {
        socket.emit('chat-msg', {
            name: sessionStorage.getItem('user'),
            message: this.state.message
        })
        this.setState({ message: '' }) // initialize msg box after send msg
    }
    render() {
        const { user } = this.state;
        return (
            <div>
                <form className="InputBox_Body" onSubmit={e => {
                    e.preventDefault();
                    this.send();
                }}>
                    <div className="InputBox_btnPlus">
                        <FontAwesomeIcon icon={faPlusCircle} size="2x" />
                    </div>
                    <div className="Chat">
                        <input type="hidden" value={user} />
                        <input className="Body_Textbox" type="text" value={this.state.message}
                            onChange={e => this.messageChanged(e)} placeholder="Enter message" />
                        <input type="submit" className="Body_btnSend" value="send"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default InputBox;

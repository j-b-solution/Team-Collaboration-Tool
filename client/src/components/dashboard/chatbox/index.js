import React, { Component } from 'react';

class ChatBox extends Component {
    render() {
        return (
            <div className="ChatBox_Container">
                <div className="ChatBox_title">
                    <p>Title</p>
                    <p>Description</p>
                </div>
                <div className="ChatBox_msg">
                    message box
                </div>
                <div className="ChatBox_msg_inputBox">
                    Input box
                </div>
            </div>
        )
    }
}

export default ChatBox;
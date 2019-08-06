import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputBox from './_inputBox';

class ChatBox extends Component {
    render() {
        const {title, description} = this.props;
        return (
            <div className="ChatBox_Container">
                <div className="ChatBox_titleBox">
                    <p className="ChatBox_title">{title}</p>
                    <p className="ChatBox_desc">{description}</p>
                </div>
                <div className="ChatBox_msg">
                    TODO: Message box, bring message history
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
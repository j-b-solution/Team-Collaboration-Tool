import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const InputBox = () => {
    return (
        <div >
            <form className="InputBox_Body">
                <div className="InputBox_btnPlus">
                    <FontAwesomeIcon icon={faPlusCircle} size="2x" />
                </div>
                <textarea rows="3" cols="130" maxLength='400' placeholder="Send your message..." className="Body_Textbox" type="text"/>
                <button className="Body_btnSend" type="submit">Send</button>
            </form>
        </div>
    )
}

export default InputBox;
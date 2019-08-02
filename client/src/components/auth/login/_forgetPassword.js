import React, { Component } from 'react'
import Modal from 'react-responsive-modal';

class ForgetPassword extends Component {
    render() {
        return (
            <Modal className="ForgetPW_Modal" open={this.props.open} onClose={this.props.onClose}  center>
                <br />
                <p className="modal_title">Please enter your email. We will send you instructions to reset your password.</p>
                <input className="txtbox_email"  text="text" placeholder="enter your email" />
                <div className="Modal_btnRow">
                    <button className="Modal_btnClear">Clear</button>
                    <button className="Modal_btnSubmit">Submit</button>
                </div>
            </Modal> 
        )
    }
}

export default ForgetPassword;
import React, { Component } from 'react'
import Modal from 'react-responsive-modal';

class ForgetPassword extends Component {
    state = {
        forgetEmail: ''
    }

    _btnClear = (event) => {
        this.setState({
            forgetEmail: ''
        })
    }
    _onClose = () => {
        this.props.onClose();
        this.setState({
            forgetEmail: ''
        })
    }
    render() {
        return (
            <Modal className="ForgetPW_Modal" open={this.props.open} onClose={this._onClose}  center>
                <br />
                <p className="modal_title">Please enter your email. We will send you instructions to reset your password.</p>
                <form>
                    <input className="txtbox_email"  text="email" name="forgetEmail" placeholder="enter your email" onChange={e => this.setState({[e.target.name]: e.target.value})} />
                    <div className="Modal_btnRow">
                        <button type="reset" onClick={this._btnClear} className="Modal_btnClear">Clear</button>
                        <button className="Modal_btnSubmit" disabled={!this.state.forgetEmail}>Submit</button>
                    </div>
                </form>
            </Modal> 
        )
    }
}

export default ForgetPassword;
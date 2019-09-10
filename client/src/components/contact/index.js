import React, { Component } from 'react';
import ContactForm from './_contactForm';

class Contact extends Component {
    state={
        name: '',
        phone: '',
        company: '',
        job_title: '',
        email: '',
        message: ''
    }

    _onSubmit = (e) => {
        this.setState({
            name: '',
            phone: '',
            company: '',
            job_title: '',
            email: '',
            message: ''
        })
        alert('This feature will be updated shortly');
    }
    render(){
        return(
            <div className="Contact_Container">
                <section className="contact_section">
                    <h3 className="section_title">Contact Sales</h3>
                    <span className="section_scope">Still using traditional social messaging apps for your business?</span>
                    <span className="section_scope">You deserve something better, and this is is.</span>
                    <span className="section_scope">Contact our JB Solution Team now.</span>
                </section>
                <div className="contact_body_form">
                    <ContactForm onChange={e => this.setState({[e.target.name]: e.target.value})} onSubmit={this._onSubmit} />
                </div>
            </div>
        )
    }
}

export default Contact;
import React from 'react';

const ContactForm = ({onChange, onSubmit}) => {
    return (
        <form className="contact_form" onSubmit={onSubmit}>
            <div className="form_block">
                <p className="inner_title">Contact Information <span>*</span></p>
                <div>
                    <input className="contact_input" type="text" placeholder="Name" name="name"  onChange={onChange} />
                    <input className="contact_input" type="text" placeholder="Phone number" name="phone"  onChange={onChange} />
                </div>
            </div>
            <div className="form_block">
                <p className="inner_title">Workplace Information</p>
                <div>
                    <input className="contact_input" type="text"  placeholder="Company name" name="company"  onChange={onChange} />
                    <input className="contact_input" type="text"  placeholder="Job title" name="job_title"  onChange={onChange} />
                </div>
                <input className="contact_input" type="text"  placeholder="Email address" name="email" onChange={onChange} />
                <textarea className="contact_textarea" placeholder="Let us know your specific concerns or inquiries you wish to discuss in advance" name="message"  onChange={onChange}  />
            </div>
            <div className="form_block button">
                <button className="contact_submit" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default ContactForm;
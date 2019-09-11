import React, { Component } from 'react'

class Download extends Component {
    render() {
        return (
            <div className="Download_Container">
                <section className="download_section">
                    <h3 className="section_title">Download</h3>
                    <span className="section_scope">Our solution will be available on the web, Windows, Mac, Android, and IOS</span>
                    <span className="section_scope">Download service is currently unavailable</span>
                    <span className="section_scope">Service will start soon</span>
                </section>
                <div className="button_container">
                    <button className="btn">Contact Sales</button>
                    <button className="btn">Sign up for free today</button>

                </div>
            </div>
        )
    }
};

export default Download;
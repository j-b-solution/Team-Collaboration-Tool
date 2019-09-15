import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faPortrait } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faPoll } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

class Property extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="icon-container">
                <div className="icon-margin">
                    <FontAwesomeIcon icon={faUser} size="2x" />
                </div>
                <div className="icon-margin">
                    <FontAwesomeIcon icon={faImage} size="2x" />
                </div>
                <div className="icon-margin">
                    <FontAwesomeIcon icon={faPortrait} size="2x" />
                </div>
                <div className="icon-margin">
                    <FontAwesomeIcon icon={faPhoneVolume} size="2x" />
                </div>
                <div className="icon-margin">
                    <FontAwesomeIcon icon={faCamera} size="2x" />
                </div>
                <div className="icon-margin">
                    <FontAwesomeIcon icon={faCalculator} size="2x" />
                </div>
                <div className="icon-margin">
                    <FontAwesomeIcon icon={faCalendar} size="2x" />
                </div>
                <div className="icon-margin">
                    <FontAwesomeIcon icon={faSearch} size="2x" />
                </div>
                <div className="icon-margin">
                    <FontAwesomeIcon icon={faFileAlt} size="2x" />
                </div>
                <div className="icon-margin">
                    <FontAwesomeIcon icon={faPoll} size="2x" />
                </div>
                <div className="icon-margin">
                    <FontAwesomeIcon icon={faUpload} size="2x" />
                </div>
                <div className="icon-margin">
                    <FontAwesomeIcon icon={faLink} size="2x" />
                </div>
            </div>


        );
    }
}

export default Property;
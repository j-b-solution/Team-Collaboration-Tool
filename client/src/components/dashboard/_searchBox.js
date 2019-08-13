import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


import { BrowserRouter as Link } from "react-router-dom";


const SearchBox = () => {
    return (
        <section>
            <div className="SearchBox_container">
                <button className="SearchBox" alt="prompt search box">
                    <FontAwesomeIcon icon={faSearch} />&nbsp; JUMP TO
                <span className="tooltiptext">TODO: Need to promp search box</span>
                </button>
            </div>
        </section>
    )
}

SearchBox.propTypes = {

}

SearchBox.defaultProps = {

}

export default SearchBox;
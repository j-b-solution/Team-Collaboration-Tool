import React from 'react';
import PropTypes from 'prop-types';

const MainTitle = ({title}) => {
    return (
        <div className="section_head">
            <h3 className="section_title">{title}</h3>
        </div>
    )
}

MainTitle.propTypes = {
    title: PropTypes.string
}

MainTitle.defaultProps = {
    title: 'Title'
}

export default MainTitle;
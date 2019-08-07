import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';

const TeamLogo = ({imgSrc, teamName}) => {
    return (
        <div className="teamLogo_container">
            <div className="teamLogo_wrap">
                <img className="teamLogo" src={imgSrc} alt="team_logo" />
                <p className="teamLogo_name">{teamName}</p>
            </div>

        </div>
    )
}


TeamLogo.propTypes = {
    imgSrc: PropTypes.string,
    teamName: PropTypes.string
}

TeamLogo.defaultProps = {
    imgSrc: logo,
    teamName: 'JB Solutions'
}


export default TeamLogo;
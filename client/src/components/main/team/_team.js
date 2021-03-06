import React from 'react';
import PropTypes from 'prop-types';
import Image_logo from "../../../assets/images/logo.png";
import { BrowserRouter as  Route, Link } from "react-router-dom";

const Team = ({id, user_id, name, owner, img}) => {
    return (
        <article className="section team_list">
            <article className="team">
                <div className="media border p-3">
                    <img src={img} className="mr-2 mt-2 rounded-circle" />                            
                    <div className="media-body">
                        <dl className="user-profile-wrap">
                            <dt className="teamlist_user_name">
                                <span>{name}</span></dt>
                                <dd className="teamlist_user_email">
                                <span className="user_email">Created by {owner}</span></dd>                                        
                            <div className="btn-box btn-s1 rsp">
                                <Link to={{pathname: `/${user_id}/main/${id}/settings`}}><button type="button" className="btn Setting">SETTING</button></Link>
                                <Link to={{pathname: `/dashboard/${id}`}}><button type="button" className="btn Launch">LAUNCH</button></Link>
                            </div>
                        </dl>
                    </div>
                </div>
            </article>
        </article>
    )
}
Team.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    owner: PropTypes.string, 
    img: PropTypes.string
}

Team.defaultProps = {
    name: 'Team Name',
    owner: 'Team Owner', 
    img: Image_logo
}

export default Team;
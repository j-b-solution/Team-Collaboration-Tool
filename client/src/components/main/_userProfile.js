import React, { Component } from 'react';
import { BrowserRouter as  Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import MainTitle from './_title'
import Image_logo from "../../assets/images/logo.png";

const UserProfile = ({id, name, email}) => {
    return (
        <div className="userProfile_body">
                <section className="section main_account">
                    <MainTitle title="Account Settings" />
                    <article className="section_body">
                        <dl className="user-profile-wrap">
                            <dt className="teamlist_user_name">
                                <span>{name}</span></dt>
                            <dd className="img-user-profile" >
                                <img className="img" src={Image_logo} alt="user profile image" />
                            </dd>
                            <dd className="teamlist_user_email">
                                <span className="user_email">{email}</span>
                            </dd>
                        </dl>
                        {/*
                        <dl className="btn-profile-edit">
                            <Link to={{pathname: `/${id}/edit`, component: '../user/edit'}}><FontAwesomeIcon icon={faEdit} />Edit Profile</Link>
                        </dl>
                        */}
                    </article>
                </section>
        </div>
    )
}

export default UserProfile;

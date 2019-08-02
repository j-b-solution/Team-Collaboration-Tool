import React, { Component } from 'react';
import Image_logo from "../../assets/images/logo.png";

class UserProfile extends Component {

    state = {}
    render() {
        return (
            <article>
            <div className="userProfile_body">
                <section className="section main_account">
                    <header className="section_head">
                        <h3 className="section_title">Account Settings</h3>
                    </header>
                    <article className="section_body">
                        <dl className="user-profile-wrap">
                            <dt className="teamlist_user_name">
                                <span>User-Name</span></dt>
                            <dd className="img-user-profile" >
                                <img className="img" src={Image_logo} alt="user profile image" />
                            </dd>
                            <dd className="teamlist_user_email">
                                <span className="user_email">User-Email</span>
                            </dd>
                        </dl>
                        <button type="button" className="btn-profile-edit">
                            <i class="icon icon-pencil" aria-hidden="true"></i>
                            <span class="txt" translate=""><span class="ng-scope">Edit Profile</span></span>
                        </button>
                    </article>
                </section>
            </div>
        </article>
        );
    }
}

export default UserProfile;

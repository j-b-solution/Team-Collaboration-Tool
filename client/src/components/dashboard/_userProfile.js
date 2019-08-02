import React, { Component } from 'react';
import Image_logo from "../../assets/images/logo.png;

class UserProfile extends Component {

    state = {}
    render() {
        return (
            <div className="userProfile_body">
                <div className="row">
                    <section className="section">
                        <header className="section_head">Account Settings</header>
                        <div className="section_body">
                            <dl className="TeamList_dl">
                                <dt className="TeamList_dl_dt">User-Name</dt>
                                <dd className="TeamList_dl_dd1 img" >
                                <img className="img" src={Image_logo} />
                                </dd>
                                <dd className="TeamList_dl_dd2">
                                    <span>User-Email</span>
                                </dd>
                            </dl>
                            <button type="button" className="btn-profile-edit">
                            <i class="icon icon-pencil" aria-hidden="true"></i>
                            <span class="txt" translate=""><span class="ng-scope">Edit Profile</span></span>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default UserProfile;

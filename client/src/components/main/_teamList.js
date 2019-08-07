import React, { Component } from 'react';
import Image_logo from "../../assets/images/logo.png";

class TeamList extends Component {
    render() { 
        return (  
            <article>
                <section className="section userProfile_body">
                    <hearder className="section_head">
                        <h3 className="section_title">
                            <span>Team List</span>
                        </h3>
                    </hearder>
                    <article class="section_body">
                        <div class="media border p-3">
                        <img src={Image_logo} class="mr-2 mt-2 rounded-circle" />                            
                            <div class="media-body">
                                <dl className="user-profile-wrap">
                                    <dt className="teamlist_user_name">
                                        <span>John Doe </span></dt>
                                    <dd className="teamlist_user_email">
                                        <span className="user_email">Team Host address</span></dd>
                                        <dd className="teamlist_user_email">
                                        <span className="user_email">user email</span></dd>                                        
                                    <div class="btn-box btn-s1 rsp">
                                        <button type="button" class="btn btn-fff"><span translate=""><span>Settings</span></span></button>
                                        <button type="button" class="btn btn-blue"><span translate=""><span >LAUNCH</span></span></button>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </article>
                </section>
            </article>
        );
    }
}
export default TeamList;
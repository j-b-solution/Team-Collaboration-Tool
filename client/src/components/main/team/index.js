import React, { Component } from 'react';
import Team from './_team';
import MainTitle from '../_title';
import AddButton from './_teamAddButton';

class TeamList extends Component {
    state = {
        id: this.props.id
    }
    render() {
        console.log(this.props)
        return (
            <article>
                <section className="userProfile_body">
                    <MainTitle title="Team List" />
                    <Team />

                    <AddButton {...this.props} />
                </section>
        </article>
        )
    }
}

export default TeamList;
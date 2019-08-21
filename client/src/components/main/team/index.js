import React, { Component } from 'react';
import Team from './_team';
import MainTitle from '../_title';
import AddButton from './_teamAddButton';

class TeamList extends Component {
    render() {
        return (
            <article>
            <section className="userProfile_body">
                <MainTitle title="Team List" />
                <Team />
                <Team />
                <Team />
                <Team />
                <AddButton />
            </section>
        </article>
        )
    }
}

export default TeamList;
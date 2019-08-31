import React, { Component } from 'react';
import Team from './_team';
import MainTitle from '../_title';
import AddButton from './_teamAddButton';
import LoadingBar from '../../common/Loading_bar';

class TeamList extends Component {
    state = {
        id: this.props.id,
        teamList: undefined
    }
    componentWillMount() {
        this.timerID = setTimeout(
            () =>  this._callApi(),
            100
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    _callApi = () => {
        return fetch(`http://localhost:8080/api/team`)
        .then(response => response.json())
        .then(json => {
            this.setState({
                teamList:json.teamList
            })
            return json.teamList;
        })
        .catch(err => console.log(err));
    }

    _renderTeamList = () => {
        const { teamList } = this.state;
        if(teamList !== undefined ) {
            const teams = teamList.map((team) => {
                return <Team key={team._id}
                            id={team._id}
                            name={team.name}
                            owner={team.owner_username} />
            })
            return teams;
        }
    }

    render() {
        return (
            <article>
                <section className="userProfile_body">
                    <MainTitle title="Team List" />
                    { this.state.teamList ? this._renderTeamList() : <LoadingBar  type='cylon' color='#214368' /> }
                    <AddButton {...this.props} />
                </section>
        </article>
        )
    }
}

export default TeamList;


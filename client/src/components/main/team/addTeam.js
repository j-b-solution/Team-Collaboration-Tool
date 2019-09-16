import React, { Component } from 'react';

class AddTeam extends Component {
    state ={
        name: '',
        description: '',
        user_id: this.props.match.params.id,
        username: sessionStorage.getItem('user')
    }
    _handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://jb-solutions.herokuapp.com/api/team/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                user_id: this.state.user_id,
                username: this.state.username
            })
        }).then(res =>{
            this.props.history.push(`/${this.state.user_id}/main`);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    render(){
        return (
            <div className="addTeam_container">
                <p className="create-title">Create New Team</p>
                <form className="addTeam-form" onSubmit={this._handleSubmit} >
                    <input className="inputTextBox" name="name" type="text" placeholder="Choose your team name" onChange={e => this.setState({[e.target.name]: e.target.value})} required={true}/>                    
                    <input className="inputTextBox" name="description" type="text" placeholder="What is this team about?" onChange={e => this.setState({[e.target.name]: e.target.value})} required={true}/>
                    <button className="btnAdd" type="submit">Go check new dashboard</button>    
                </form>
            </div>
        )
    }
}

export default AddTeam;
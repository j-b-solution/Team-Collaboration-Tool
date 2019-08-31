import React from 'react';
import { browserHistory } from 'react-router'


const AddButton = ({id, history}) => {
    return (
        <div className="add_button" onClick={()=> { history.push(`/${id}/main/add-team`)}} >
            <span>+ Create Team</span>
        </div>
    )
}
export default AddButton;
import React from 'react';

const DeleteForm = ({deleteAction}) => {
    return (
        <form>
            <button className="btnRemove" onClick={(e)=> deleteAction(e)}>Delete this team</button>
        </form>
    )
}


export default DeleteForm;
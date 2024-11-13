import React from 'react';
import PropTypes from 'prop-types';  // Import prop-types
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
function TODOItem({ task, deleteTaskCallback,editTaskCallback }) {
    return (
        <li className='task-item'>
            <span >{task.text}</span>
            <button onClick={editTaskCallback} aria-label='Edit task'>
                    <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
               onClick={deleteTaskCallback} aria-label='Delete task'>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </li>
    );
}
TODOItem.propTypes = {
    task:PropTypes .shape({
        id:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired,
    }).isRequired,
    deleteTaskCallback:PropTypes.func.isRequired,
    editTaskCallback:PropTypes.func.isRequired,
    
};

export default TODOItem;
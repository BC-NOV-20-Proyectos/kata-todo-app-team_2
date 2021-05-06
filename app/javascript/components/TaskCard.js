import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrash, faPen, faCheck, faSave} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

let TaskCard = ({task, handleOnUpdate, handleOnDelete}) => {
    let [checked, setChecked] = useState(task.status == 0 ? false : true);
    let [editing, setEditing] = useState(false);
    let respName = task.name;
    let [name, setName] = useState(task.name);
    let handleOnCheck = (e) => {
        if(e.target.checked) {
            setChecked(true);
            handleOnUpdate({tasks: [{id: task.id, name}], status: 1});
        }
        else {
            setChecked(false);
            handleOnUpdate({tasks: [{id: task.id, name}], status: 0});
        }
        setEditing(false);
    }
    const handleOnDestroy = (e) => {
        Swal.fire({
            title: 'Are you sure of delete the task?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                handleOnDelete({tasks: [task]});
            }
        });
    }
    const handleOnEdit = (e) => {
        setEditing(true);
        document.getElementById(`txtName-${task.id}`).focus();
    }
    const handleCancelEdit = (e) => {
        setEditing(false);
        setName(respName);
    }
    const handleOnInput = (e) => {
        setName(e.target.value);
    }

    const btnEdit = <button onClick={handleOnEdit} className="shadow-sm-custom rounded-circle btn-ctrl btn bg-light text-dark-custom">
                        <FontAwesomeIcon icon={faPen}/>
                    </button>
    const btnDelete = <button onClick={handleOnDestroy} className="ms-2 shadow-sm-custom rounded-circle btn-ctrl btn bg-light text-dark-custom">
        <FontAwesomeIcon icon={faTrash}/>
    </button>
    const btnCancel = <button onClick={handleCancelEdit} className="ms-2 shadow-sm-custom rounded-circle btn-ctrl btn bg-light text-dark-custom">
        <FontAwesomeIcon icon={faTimes}/>
    </button>
    const btnSave = <button 
    onClick={handleOnCheck} 
    className="ms-2 rounded-circle btn-ctrl btn btn-primary text-white"
    disabled={name == ""}>
    <FontAwesomeIcon icon={faSave} />
    </button>
    
    return (
        <React.Fragment>
            <div 
            className={`card-task ${task.status == 1 ? "card-task--checked" : ""} 
            px-4 py-3 mb-3 d-flex flex-column flex-md-row flex-wrap 
            justify-content-between align-items-md-center`}>
                <div className="d-flex align-items-md-center cont-task-name">
                    <div className="cont-chk-custom text-gray-darken">
                        <input onChange={handleOnCheck} 
                        type="checkbox" 
                        name="" id={`chk-${task.id}`} 
                        className="chk-custom" 
                        checked={task.status == 1}/>
                        <label htmlFor={`chk-${task.id}`} className="lbl-chk-custom">
                            <FontAwesomeIcon icon={faCheck}/>
                        </label>
                    </div>
                    <input onChange={handleOnInput} id={`txtName-${task.id}`} className="ms-4 task-name" value={task.name} readOnly={!editing}/>
                </div>
                <div className="d-flex align-items-center ms-auto ms-md-0 mt-2 mt-md-0">
                    {editing ? btnSave : ""}
                    {(!task.status == 1 && !editing) ? btnEdit : ""}
                    {!editing ? btnDelete : btnCancel}
                </div>
            </div>
        </React.Fragment>
    )
}
export default TaskCard;
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrash, faPen, faCheck, faSave} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

let TaskCard = ({task, handleOnUpdate, handleOnDelete}) => {
    let [checked, setChecked] = useState(task.status == 0 ? false : true);
    let [editing, setEditing] = useState(false);
    let respName = task.name;
    let [name, setName] = useState(task.name);
    let handleOnCheck = (e, type) => {
        if(type == 1) {
            handleOnUpdate({tasks: [{id: task.id, name: name}], status: task.status});
        } else {
            if(e.target.checked) {
                setChecked(true);
                handleOnUpdate({tasks: [{id: task.id, name: task.name}], status: 1});
            }
            else {
                setChecked(false);
                handleOnUpdate({tasks: [{id: task.id, name: task.name}], status: 0});
            }
        }
        setEditing(false);
        e.preventDefault();
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
        setName(task.name);
    }
    const handleCancelEdit = (e) => {
        setEditing(false);
        setName(respName);
    }
    const handleOnInput = (e) => {
        setName(e.target.value);
    }

    const btnEdit = <button onClick={handleOnEdit} className="shadow-sm-custom rounded-circle btn-ctrl btn text-dark-custom">
                        <FontAwesomeIcon icon={faPen}/>
                    </button>
    
    const btnDelete = <button onClick={handleOnDestroy} className="ms-2 shadow-sm-custom rounded-circle btn-ctrl btn text-dark-custom">
        <FontAwesomeIcon icon={faTrash}/>
    </button>
    
    const btnCancel = <button onClick={handleCancelEdit} className="ms-2 shadow-sm-custom rounded-circle btn-ctrl btn text-dark-custom">
        <FontAwesomeIcon icon={faTimes}/>
    </button>
    
    const btnSave = <button 
    form={`frm-${task.id}`}
    type="submit"
    onClick={(e) => handleOnCheck(e, 1)} 
    className="ms-2 rounded-circle btn-ctrl btn btn-primary text-white"
    disabled={name == ""}>
    <FontAwesomeIcon icon={faSave} />
    </button>
    
    const inputName = <input placeholder="Type the name task here..." onChange={handleOnInput} id={`txtName-${task.id}`} className="ms-4 task-name px-0" defaultValue={task.name} autoFocus/>
    const labelName = <label className="ms-4 task-name">{task.name}</label>
    
    return (
        <React.Fragment>
            <div 
            className={`card-task ${task.status == 1 ? "card-task--checked" : ""} 
            px-4 py-3 mb-3 d-flex flex-column flex-md-row flex-wrap 
            justify-content-between align-items-md-center`}>
                <form id={`frm-${task.id}`} onSubmit={handleOnCheck} className="d-flex align-items-md-center cont-task-name">
                    <div className="cont-chk-custom text-gray-darken">
                        <input onChange={(e) => handleOnCheck(e, 0)} 
                        type="checkbox" 
                        name="" id={`chk-${task.id}`} 
                        className="chk-custom" 
                        checked={task.status == 1}
                        disabled={editing}/>
                        <label 
                        htmlFor={`chk-${task.id}`} 
                        className="lbl-chk-custom">
                            <FontAwesomeIcon icon={faCheck}/>
                        </label>
                    </div>
                    {editing ? inputName : labelName}
                </form>
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
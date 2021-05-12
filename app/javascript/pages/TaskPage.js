import React, {useState} from 'react';
import TaskCard from '../components/TaskCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faCheck, faSmileBeam, faChevronDown, faFilePdf, faFileCsv, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { ToastContainer } from 'react-toastify';
import NavBar from '../components/NavBar';

let TaskPage = ({tasks, handleOnCreate, handleOnUpdate, handleOnDelete, profile, picture_link}) => {
    const [tasksArray, setTasks] = useState("");
    const [onTop, setOnTop] = useState("");
    
    let topCtrls = null;
    const handleOnChange = (e) => {
        setTasks(e.target.value);
    }
    const handleOnClick = (e) => {
        if(tasksArray == "") {
            return false;
        }
        handleOnCreate({
            task: {
                tasks: tasksArray,
                status: 0
            }
        });
        setTasks("");
        e.preventDefault();
    }  
    const handleOnDestroy = (e) => {
        Swal.fire({
            title: 'Are you sure of delete all the tasks?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                handleOnDelete({tasks: tasks});
            }
        });
    }
    const handleOnCheckAll = (e) => {
        handleOnUpdate({tasks: tasks, status: 1});
    }
    document.onscroll = (e) => {
        if(topCtrls == null) {
            topCtrls = document.getElementById("ctrlTaskMain").scrollHeight;
        }
        if(window.scrollY >= topCtrls) {
            setOnTop("shadow-lg-custom");
        } else {
            setOnTop("");
        }
    } 
    return(
        <React.Fragment>
            <ToastContainer 
            limit={1}
            autoClose={4000}
            />
            <NavBar picture_link={picture_link}/>
            <div id="ctrlTaskMain" className={`rounded-custom-bottom w-100 bg-gray py-md-4 pb-3 pt-0 sticky-top ${onTop}`}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12 mt-2">
                            <div className="d-flex flex-lg-row flex-column-reverse flex-1 flex-wrap justify-content-between align-items-lg-center">
                                <div className="d-flex flex-grow-1 flex-wrap justify-content-lg-start justify-content-between align-items-center mt-3 mt-lg-0">
                                    <div className="dropdown me-3">
                                        <button 
                                        className="btn btn-light btn-profile-nav dropdown-toggle me-2 text-dark-custom" 
                                        type="button" id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        disabled={tasks.length == 0}>
                                            <FontAwesomeIcon icon={faEllipsisV}/>
                                        </button>
                                        <ul className="dropdown-menu shadow-md-custom text-dark-custom" aria-labelledby="dropdownMenuButton1">
                                            <li><a target="_blank" className="dropdown-item text-dark-custom" href="/todopdf.pdf"><FontAwesomeIcon icon={faFilePdf}/><span className="ms-2">Export to PDF</span></a></li>
                                            <li><a target="_blank" className="dropdown-item text-dark-custom" href="/todocsv.csv"><FontAwesomeIcon icon={faFileCsv}/><span className="ms-2">Export to CSV</span></a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <button 
                                        onClick={handleOnCheckAll} 
                                        className="px-3 text-white-custom btn btn-green rounded-buttons"
                                        disabled={tasks.length == 0}>
                                            <FontAwesomeIcon icon={faCheck}/>
                                            <span className="ms-2 d-none d-sm-inline-block">Check all</span>
                                        </button>
                                        <button 
                                        onClick={handleOnDestroy} 
                                        className="px-3 text-dark-custom ms-3 btn btn-light rounded-buttons"
                                        disabled={tasks.length == 0}>
                                            <FontAwesomeIcon icon={faTrash}/>
                                            <span className="ms-2 d-none d-sm-inline-block">Delete all</span>
                                        </button>
                                    </div>
                                </div>
                                <form onSubmit={handleOnClick} className="d-flex flex-grow-1 flex-wrap align-items-center justify-content-end mt-2 mt-lg-0">
                                    <input value={tasksArray} onChange={handleOnChange} 
                                    type="text" id="" 
                                    className="flex-grow-1 text-dark px-4 bg-gray input-custom rounded-buttons" 
                                    placeholder = "Type the task name here..."/>
                                    <button type="submit" className="px-3 ms-2 ms-md-3 btn btn-primary rounded-buttons"
                                    disabled={tasksArray == ""}>
                                        <FontAwesomeIcon icon={faPlus}/>
                                        <span className="ms-2 d-none d-sm-inline-block">Add Task</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 mt-4 mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div id="contTask" className="w-100">
                                {
                                    tasks.length > 0 ?
                                    tasks.map((task, index) => <TaskCard 
                                    task={task} 
                                    handleOnUpdate={handleOnUpdate} 
                                    handleOnDelete={handleOnDelete}
                                    key={index}/>)
                                    :
                                    <h1 className="text-secondary-dark text-center py-5 my-5">There are not tasks <FontAwesomeIcon icon={faSmileBeam}/></h1>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </React.Fragment>
    )
}

export default TaskPage;
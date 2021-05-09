import React from 'react';
import TaskPage from './TaskPage';
import ErrorController from '../controllers/ErrorController';
import config from '../config';
import UIFeatures from '../controllers/UIFeatures';
import axios from 'axios';

class TaskContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    componentDidMount = () => {
        this.getTasks();
    }

    getTasks = async () => {
        try {
            let tasks = await axios.get(config.routes.getTasks())
            this.setState({
                tasks: tasks.data.tasks
            })
        } catch(error) {
            ErrorController.errorServer(error.response);
        }
    }

    createTask = async (jsonTask, status) => {
        if(status)
            jsonTask.status = status

        try {
            await axios.post(config.routes.getTasks(), jsonTask);
            this.getTasks();
            UIFeatures.toast("Task added!");
        } catch(error) {
            ErrorController.errorServer(error.response);
        }
    }

    updateTask = async (jsonTask) => {
        try {
            let tasks = this.state.tasks;
            jsonTask.tasks.forEach((newTask) => {
                for(let i = 0; i < tasks.length; i++) {
                    if(tasks[i].id == newTask.id) {
                        tasks[i].status = jsonTask.status;
                        tasks[i].name = newTask.name;
                        break;
                    }
                }
            });
            await axios.put(config.routes.updateTask(), jsonTask);
            this.setState({
                tasks
            });
        } catch(error) {
            ErrorController.errorServer(error.response);
        }
    }


    deleteTask = async (jsonTask) => {
        try {
            await axios.delete(config.routes.deleteTask(),{data: jsonTask});
            this.getTasks();
            jsonTask["tasks"].length > 1 ? UIFeatures.toast("Tasks deleted!") : UIFeatures.toast("Task deleted!");
        } catch(error) {
            ErrorController.errorServer(error.response);
        }
    }

    render = () => {
        return (
            <TaskPage 
            tasks={this.state.tasks} 
            handleOnCreate={this.createTask}
            handleOnUpdate={this.updateTask}
            handleOnDelete={this.deleteTask}
            />
        )
    }
}

export default TaskContainer;
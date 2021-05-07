import React from 'react'
import ReactDOM from 'react-dom'
import TaskContainer from '../pages/TaskContainer';
import 'react-toastify/dist/ReactToastify.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TaskContainer />,
    document.body.appendChild(document.createElement('div')),
  )
})

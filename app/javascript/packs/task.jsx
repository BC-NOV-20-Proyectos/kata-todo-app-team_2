import React from 'react'
import ReactDOM from 'react-dom'
import TaskContainer from '../pages/TaskContainer';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TaskContainer />,
    document.body.appendChild(document.createElement('div')),
  )
})

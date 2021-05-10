import React from 'react'
import ReactDOM from 'react-dom'
import ProfileContainer from '../pages/ProfileContainer';
import 'react-toastify/dist/ReactToastify.css';

var root = document.createElement("div");
root.className = "bg-blue min-h-100";
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ProfileContainer />,
    document.body.appendChild(root),
  )
})

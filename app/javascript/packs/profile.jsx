import React from 'react'
import ReactDOM from 'react-dom'
import ProfileContainer from '../pages/ProfileContainer';
import 'react-toastify/dist/ReactToastify.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ProfileContainer />,
    document.body.appendChild(document.createElement('div')),
  )
})

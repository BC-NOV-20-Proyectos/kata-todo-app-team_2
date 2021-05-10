import React from 'react';
import axios from 'axios';
import ProfilePage from './ProfilePage';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {}
        }
    }

    render = () => {
        return(
            <ProfilePage/>
        )
    }
}

export default ProfileContainer;
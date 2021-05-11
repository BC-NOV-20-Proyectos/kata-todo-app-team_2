import React from 'react';
import axios from 'axios';
import ProfilePage from './ProfilePage';
import config from '../config';
import UIFeatures from '../controllers/UIFeatures';
import ErrorController from '../controllers/ErrorController';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile_picture: "",
            profile: {
                name: "",
                emai: "",
                description: ""
            }
        }
    }

    componentDidMount = () => {
        this.getUser();
    }

    getUser = async () => {
        try {
            let response = await axios.get(config.routes.get_profile());
            this.setState({
                profile: response.data.user,
                profile_picture: response.data.picture_link
            });
        } catch (error) {
            ErrorController.errorServer(error.response);
        }
    }

    updatePicture = async (e) => {
        e.preventDefault();
        if(e.target.elements["profile_picture"].files.length > 0) {
            let frmData = new FormData(e.target);
            try {
                await axios.put(config.routes.update_picture_profile(), frmData);
                this.getUser();
                UIFeatures.toast("Profile picture updated!");
            } catch (error) {
                ErrorController.errorServer(error.response);
            }
        }
    }
    handleOnChange = (e) => {
        this.setState({
            profile: {
                ...this.state.profile,
                [e.target.name]: e.target.value
            }
        });

    }
    updateProfileInfo = async () => {
        try {
            await axios.put(config.routes.update_profile_info(), this.state.profile, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });
            this.getUser();
            UIFeatures.toast("Profile info updated!");
        } catch (error) {
            ErrorController.errorServer(error.response);
        }
    }
    render = () => {
        return(
            <ProfilePage 
            profile={this.state.profile} 
            picture_link={this.state.profile_picture}
            handleOnSubmitPicture={this.updatePicture}
            handleOnUpdate={this.updateProfileInfo}
            handleOnChange={this.handleOnChange}
            />
        )
    }
}

export default ProfileContainer;
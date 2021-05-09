import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import Logo from '../../assets/images/logo.png';
import { ToastContainer } from 'react-toastify';


let ProfilePage = ({profile}) => {
    
    return(
        <React.Fragment>
            <ToastContainer 
            limit={1}
            autoClose={4000}
            />
            <div className="w-100 mb-md-5 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-between pt-3">
                            <a data-method="get" href="/"><img src={Logo} width="148px"/></a>
                            <div className="d-flex align-items-center">
                                <div className="profile-picture" 
                                style={
                                    {
                                        backgroundImage: 'url("https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg")',
                                        backgroundSize: 'cover'
                                    }
                                }>
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-light btn-profile-nav ms-2 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FontAwesomeIcon icon={faChevronDown}/>
                                    </button>
                                    <ul className="dropdown-menu shadow-md-custom" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="/page">Profile</a></li>
                                        <li><a data-method="delete" className="dropdown-item" href="/sign_out">Sign out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfilePage;
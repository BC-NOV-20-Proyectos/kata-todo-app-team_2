import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/images/logo.png';

let NavBar = ({picture_link}) => (
    <div className="w-100 mb-md-5 mb-4">
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-between pt-3">
                    <a data-method="get" href="/"><img src={Logo} width="148px"/></a>
                    <div className="d-flex align-items-center">
                        <a data-method="get" href="/profile" className="btn btn-light p-0 profile-picture" 
                        style={
                            {
                                backgroundColor: "#f5f5f5",
                                backgroundImage: picture_link ? `url("${picture_link}")` : "",
                            }
                        }>
                        </a>
                        <div className="dropdown">
                            <button className="btn btn-light btn-profile-nav ms-2 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faChevronDown}/>
                            </button>
                            <ul className="dropdown-menu shadow-md-custom" aria-labelledby="dropdownMenuButton1">
                                <li><a data-method="get" className="dropdown-item" href="/profile">Profile</a></li>
                                <li><a data-method="delete" className="dropdown-item" href="/sign_out">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default NavBar;
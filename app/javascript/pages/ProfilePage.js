import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faAt, faCamera} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import Logo from '../../assets/images/logo.png';
import { ToastContainer } from 'react-toastify';
import NavBar from '../components/NavBar';


let ProfilePage = ({profile}) => {
    return(
        <React.Fragment>
            <ToastContainer 
            limit={1}
            autoClose={4000}
            />
            <div className="bg-background">
                <NavBar/>
                <div className="container">
                    <div className="row ">
                        <div className="col-4">
                            <div className="cont-profile-picture shadow-md-custom ms-auto"
                            style={
                                {
                                    backgroundImage: 'url("https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg")',
                                    backgroundSize: 'cover'
                                }
                            }>
                                <button className="btn btn-edit p-0 shadow">
                                    <FontAwesomeIcon icon={faCamera}/>
                                </button>
                            </div>
                            <input type="file" hidden/>
                        </div>
                        <div className="col-8 container-name-profile">
                            <div className="mt-5 ms-3">
                                <button className="btn btn-edit p-0 shadow">
                                    <FontAwesomeIcon icon={faPen}/>
                                </button>
                                <h1>Jose Enrique Figueroa</h1>
                                <span className="me-2 d-flex align-items-center"><FontAwesomeIcon icon={faAt}/><span className="ms-2 fw-bold">jose@email.com</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-8">
                        <div className="ms-auto">
                            <div className="ms-3 text-white my-4">
                                <h5 className="fw-bold">Description</h5>
                                <span>
                                    Enim incididunt amet nostrud cupidatat ut ullamco adipisicing incididunt sint incididunt in. Mollit amet id do ea eiusmod elit sunt ullamco non excepteur mollit enim. Ad enim sit ipsum excepteur id qui do deserunt nostrud aute veniam aliquip. Tempor laborum Lorem id ex consequat irure adipisicing adipisicing. Enim incididunt amet nostrud cupidatat ut ullamco adipisicing incididunt sint incididunt in. Mollit amet id do ea eiusmod elit sunt ullamco non excepteur mollit enim. Ad enim sit ipsum excepteur id qui do deserunt nostrud aute veniam aliquip. Tempor laborum Lorem id ex consequat irure adipisicing adipisicing.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfilePage;
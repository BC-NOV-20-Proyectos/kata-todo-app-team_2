import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faAt, faCamera, faTimes, faSave} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import NavBar from '../components/NavBar';


let ProfilePage = ({profile, picture_link, handleOnSubmitPicture, handleOnUpdate, handleOnChange}) => {
    let [show, showModal] = useState(false);

    const onClickFile = (e) => {
        document.getElementById("profile_picture").click();
    }
    const onChangeFile = (e) => {
        document.getElementById("btnFrmPicture").click();
    }

    let handleOnSave = (e) => {
        handleOnUpdate();
        showModal(false);
    }
    let handleEdit = (e) => {
        showModal(true);
    }

    const handleCloseModal = (e) => {
        showModal(false);
    }

    const inputName = <input className="input-custom bg-gray rounded-buttons mb-2 w-100" onChange={handleOnChange} defaultValue={profile.name || "User Name"} name="name" autoFocus placeholder="Type your name here..."/>;
    const lblName = <h1 className="profile-name">{ profile.name ? profile.name : "User Name" }</h1>;

    const inputEmail = <input className="input-custom bg-gray rounded-buttons w-100 ms-1 mb-2" onChange={handleOnChange} defaultValue={profile.email} name="email" placeholder="Type your email here..."/>;
    const lblEmail = <span className="profile-email ms-1">{profile.email}</span>;
    
    const lblDescription =  <p className="ms-lg-1 text-white">
                            {profile.description}
                            </p>
    const inputDescription = <textarea maxLength="500" id="txtDescription" className="input-custom bg-gray rounded-buttons px-3 py-2 profile-description w-100 ms-1 text-dark-custom" onChange={handleOnChange} defaultValue={profile.description} name="description" placeholder="Type your description here..."/>;

    const btnEdit = <button onClick={handleEdit} className="btn bg-gray btn-edit-profile p-0 shadow">
                        <FontAwesomeIcon icon={faPen}/>
                    </button>
    return(
        <React.Fragment>
            <ToastContainer 
            limit={1}
            autoClose={4000}
            />
            <div className="bg-background">
                <NavBar picture_link={picture_link}/>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-4 col-12">
                            <form onSubmit={handleOnSubmitPicture} className="cont-profile-picture shadow-md-custom mx-auto ms-lg-end"
                            style={
                                {
                                    backgroundColor: "#f5f5f5",
                                    backgroundImage: picture_link ? `url("${picture_link}")` : "",
                                }
                            }>
                                <button onClick={onClickFile} className="btn btn-edit-picture p-0 shadow text-dark-custom">
                                    <FontAwesomeIcon icon={faCamera}/>
                                </button>
                                <button id="btnFrmPicture" type="submit" hidden></button>
                                <input onChange={onChangeFile} type="file" name="profile_picture" id="profile_picture" hidden/>
                            </form>
                        </div>
                        <div className="col-lg-8 col-12 container-name-profile">
                            <div className="mt-5 ms-lg-3 position-relative">
                                <div className="cont-profile-ctrl">
                                    {btnEdit}
                                </div>
                                <div className="cont-profile-info text-lg-start text-center">
                                    {lblName}
                                    {lblEmail }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-8 col-12">
                        <div className="ms-lg-auto">
                            <div className="container-profile-description ms-lg-3 text-lg-start text-center my-lg-4">
                                <h5 className="fw-bold ms-1 text-white">Description</h5>
                                {lblDescription}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal backdrop={"static"} show={show} onHide={handleCloseModal} animation={false}>
                <Modal.Header closeButton>
                    <h3>Edit Profile</h3>
                <Modal.Title>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label className="mb-2 fw-bold">Name</label>
                    {inputName}
                    <label className="mb-2 fw-bold">Email</label>
                    {inputEmail}
                    <label className="mb-2 fw-bold">Description</label>
                    {inputDescription}
                </Modal.Body>
                <Modal.Footer>
                <button onClick={handleOnSave} type="submit" className="px-3 ms-2 ms-md-3 btn btn-primary rounded-buttons"
                >
                    <FontAwesomeIcon icon={faSave}/>
                    <span className="ms-2">Save changes</span>
                </button>
                <button 
                onClick={handleCloseModal} 
                className="px-3 text-dark-custom ms-3 btn btn-light rounded-buttons"
                >
                    <FontAwesomeIcon icon={faTimes}/>
                    <span className="ms-2">Cancel</span>
                </button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default ProfilePage;
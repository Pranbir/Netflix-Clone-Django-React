import assets from "../Assests/user.png";
import assets2 from "../Assests/addUser.png";
import styles from "../Profile/Profile.module.css"
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Header from "../Header";

const Profile = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header />
            <h1 className="text-center text-white mt-5">Who's Watching</h1>
            <div className="container mt-5">

                <div>
                    <div className="row mt-4">
                        <div className="col-lg-3">
                            <img className={styles.imgfield} alt="movie" src={assets} width="250" height="220" />
                        </div>
                        <div className="col-lg-3">
                            <img className={styles.imgfield} alt="movie" onClick={handleShow} src={assets2} width="250" height="220" />
                        </div>
                        <div className="col-lg-3">
                            <img className={styles.imgfield} alt="movie" onClick={handleShow} src={assets2} width="250" height="220" />
                        </div>
                        <div className="col-lg-3">
                            <img className={styles.imgfield} alt="movie" onClick={handleShow} src={assets2} width="250" height="220" />
                        </div>

                    </div>
                </div>
            </div>

            <div className={styles.butnclass}>
                <button className=" btn btn-dark btn-lg ">
                    Manage Profile
                </button>
            </div>


            <Modal size="lg" show={show} onHide={handleClose}>
                <div style={{ border: "1px solid white" }}>
                <Modal.Header style={{  backgroundColor: "black"}} className="text-white">
                    <h4>Add Profile</h4>
                    <Button className="float-right bg-transparent" variant="secondary" onClick={handleClose}>
                        <i className="fa fa-times"></i>
                    </Button>
                </Modal.Header>
                <Modal.Body style={{  backgroundColor: "black"}} className="text-white">

                    <div className="mt-4">
                        <img className={styles.imgField2} alt="user" src={assets2} width="150" height="150" />
                    </div>
                    <div className="container col-md-9 mt-5">
                        <div className="form-group">
                            <label>User Name</label>
                            <input type="type" className="form-control" placeholder="Enter User Name" />
                        </div>
                        <label>Maturity Level</label>
                        <select className="custom-select">
                            <option selected>All</option>
                            <option value="7+">7+</option>
                            <option value="13+">13+</option>
                            <option value="16+">16+</option>
                            <option value="18+">18+</option>
                        </select>
                        <div className={styles.pBtn}>
                        <button className="btn btn-secondary mr-4 w-50" onClick={handleClose}>Cancel</button>
                        <button type="submit" className="btn btn-secondary w-50">Submit</button>
                        </div>
                    </div>

                </Modal.Body>
                </div>
            </Modal>

        </>
    )

}

export default Profile;
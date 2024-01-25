import { IoIosAdd } from "react-icons/io";
import './assets/Posts.css'
import { IoIosPersonAdd } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";


const ProfilePostsBar = () => {
    return (
        <div className="me-3">
            <div className="d-flex flex-column bg-light w-100 rounded-3 border border-secondary mt-4 mb-3 fs-5">
                    <div className="immaginebg text-center">
                        <img
                        className='margincustom mb-4 rounded-circle'
                        width={140}
                        src=''
                        alt=''
                        srcset=''
                      />             
                      <h3 className="fs-5">Nome Cognome</h3>
                      <p className="text-secondary fs-6">Titolo</p>
                    </div>
               
                <div className="border-top border-bottom border-2 border-greey p-2 profileBar">
                    <p className="m-0 text-secondary fs-6">Collegamenti</p>
                    <p className="m-0 fs-6 d-flex justify-content-between align-items-center">
                        <span className="fw-semibold">Espandi la tua rete</span>
                        <IoIosPersonAdd className="text-dark ms-auto" size={20} />
                    </p>
                </div>
                <div className="p-2 profileBar">
                    <p className="m-0 fs-6">
                        <FaBookmark /><span className="ms-2 fw-semibold">I miei elementi</span>
                    </p>
                </div>
            </div>
            <div className="d-flex flex-column bg-light w-100 rounded-3 p-3 border border-secondary">
                <ul className="list-unstyled text-primary fw-semibold ulProfilePostsBar">
                    <li>Gruppi</li>
                    <li className="d-flex justify-content-between align-items-center">
                        <span>Eventi</span>
                        <IoIosAdd className="text-dark" size={25} />
                    </li>
                    <li>Hastag seguiti</li>
                </ul>
                <div className="border-top border-2 border-greey d-flex justify-content-center">
                    <button className="mt-2 bg-transparent btnProfilePostsBar">Scopri di più</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePostsBar;
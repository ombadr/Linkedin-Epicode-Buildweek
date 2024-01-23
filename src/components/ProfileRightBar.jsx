import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfiles } from "../redux/actions";
import { Modal, Button } from "react-bootstrap";
import { PersonAdd } from "react-bootstrap-icons";

const ProfileRightBar = () => {
    const dispatch = useDispatch();
    const { profile, loading, error } = useSelector((state) => state.FetchProfiles);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlNDk1MTYwMGJlMTAwMTgzYTg2YTUiLCJpYXQiOjE3MDU5MjA4NDksImV4cCI6MTcwNzEzMDQ0OX0.lWpP-DosTePIjyhJO-aug1d5RJPA-hzq5ehW8RJ5Kt4";
        dispatch(fetchProfiles(token));
    }, [dispatch]);

    if (loading) {
        return <p>Loading</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const renderRandomProfiles = (profilesNumber) => {
        const profiles = [];
        if (profile && profile.length >= profilesNumber) {
            const availableIndices = Array.from({ length: profile.length }, (_, index) => index);

            for (let i = 0; i < profilesNumber; i++) {
                const randomIndex = Math.floor(Math.random() * availableIndices.length);
                const selectedIndex = availableIndices[randomIndex];
                const randomProfile = profile[selectedIndex];

                if (randomProfile.name.trim() !== "" || randomProfile.title.trim() !== "" || randomProfile.surname.trim() !== "") {
                    profiles.push(
                        <div key={i} className="SuggestedProfile d-flex p-4 m-3 border-bottom border-secondary">
                            <img src={randomProfile.image} alt={`${randomProfile.name} ${randomProfile.surname}`} />
                            <div>
                                <p className="fw-bolder">{randomProfile.name} {randomProfile.surname}</p>
                                <p className="fw-lighter">{randomProfile.title}</p>
                                <button className="p-2 text-secondary"> <PersonAdd /> Connect</button>
                            </div>
                        </div>
                    );
                    availableIndices.splice(randomIndex, 1);
                } else {
                    i--
                }
            }
        }
        return profiles;
    };


    const handleShowModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
    return (
        <>
            <div className="text-center ">
                <h1>Profiles: </h1>
                {renderRandomProfiles(5)}
                    <div >
                        <button onClick={(e) => { e.preventDefault(); handleShowModal(); }} className="rounded-pill p-2 my-5 bg-light">
                            Show all profiles
                        </button>
                    </div>
            </div>

            <Modal show={isModalOpen} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {renderRandomProfiles(20)}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProfileRightBar;

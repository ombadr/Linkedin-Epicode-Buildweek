import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfiles } from "../redux/actions";
import { Modal, Button,Tabs, Tab, Col } from "react-bootstrap";
import { PersonAdd } from "react-bootstrap-icons";
import { FaArrowRight } from "react-icons/fa";


const ProfiliRandom = () => {
  const dispatch = useDispatch();
  const { profile, loading, error } = useSelector(
    (state) => state.FetchProfiles
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlNDk1MTYwMGJlMTAwMTgzYTg2YTUiLCJpYXQiOjE3MDU5MjA4NDksImV4cCI6MTcwNzEzMDQ0OX0.lWpP-DosTePIjyhJO-aug1d5RJPA-hzq5ehW8RJ5Kt4";
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
      const availableIndices = Array.from(
        { length: profile.length },
        (_, index) => index
      );

      for (let i = 0; i < profilesNumber; i++) {
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        const selectedIndex = availableIndices[randomIndex];
        const randomProfile = profile[selectedIndex];

        if (
          randomProfile.name.trim() !== "" ||
          randomProfile.title.trim() !== "" ||
          randomProfile.surname.trim() !== ""
        ) {
          profiles.push(
            <div
              key={i}
            >
              <div className="d-flex mx-3 mb-3">
                <div>
                  <img
                    src={randomProfile.image}
                    width={64}
                    height={64}
                    className="rounded-circle"
                    alt={`${randomProfile.name} ${randomProfile.surname}`}
                  />
                </div>

                <div className="px-2">
                  <p className="fw-bold m-0">
                    {randomProfile.name} {randomProfile.surname}
                  </p>
                  <p>{randomProfile.title}</p>
                  <Button variant="outline-secondary" className="rounded-pill">
                    <PersonAdd /> Collegati
                  </Button>
                </div>
              </div>
            </div>
          );
          availableIndices.splice(randomIndex, 1);
        } else {
          i--;
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
      <div className="border rounded my-2 bg-white">
        <div className="border-bottom">
          <div className="justify-content-between p-3">
            <h2 className="m-0">Persone che potresti conoscere</h2>
            <p className="text-secondary">Dalla tua scuola o università</p>
          </div>
          {renderRandomProfiles(10)}
          <div>
            <div className="text-center text-secondary pt-2">
              <div className="text-center border-top">
                <Button
                  variant="light"
                  className="w-100 text-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    handleShowModal();
                  }}
                >
                  Mostra tutte le analisi <span><FaArrowRight/></span>
                </Button>
              </div>
            </div>
          </div>

          <Modal show={isModalOpen} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Persone che potresti conoscere</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Tabs defaultActiveKey="profile" className="mb-3">
                <Tab eventKey="home" title="Aziende">
                  <Col className="d-flex">
                    <div className="d-flex  flex-column mx-3 p-3">
                      {renderRandomProfiles(20)}
                    </div>
                  </Col>
                </Tab>
                <Tab eventKey="profile" title="Scuole e Università">
                  <Col className="d-flex">
                    <div className="d-flex  flex-column mx-3 p-3">
                      {renderRandomProfiles(20)}
                    </div>
                  </Col>
                </Tab>
              </Tabs>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default ProfiliRandom;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoBookmarkSharp } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoDocumentOutline } from "react-icons/io5";
import { MdSmartDisplay } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IconContext } from "react-icons";
import { FaPenToSquare } from "react-icons/fa6";
import "./JobsNav.css";

const JobsPage = () => {
  return (
        <>
          <div className="JobsNav">
            <p>
              <IconContext.Provider
                value={{ className: "jobsnav-react-icons" }}
              >
                <IoBookmarkSharp />
              </IconContext.Provider>
              My Jobs
            </p>
            <p>
              <IconContext.Provider
                value={{ className: "jobsnav-react-icons" }}
              >
                <FaList />
              </IconContext.Provider>
              Preferences
            </p>
            <p>
              <IconContext.Provider
                value={{ className: "jobsnav-react-icons" }}
              >
                <FaCheck />
              </IconContext.Provider>
              Demonstrate skills
            </p>
            <p>
              <IconContext.Provider
                value={{ className: "jobsnav-react-icons" }}
              >
                <IoDocumentTextSharp />
              </IconContext.Provider>
              Interview prep
            </p>
            <p>
              <IconContext.Provider
                value={{ className: "jobsnav-react-icons" }}
              >
                <IoDocumentOutline />
              </IconContext.Provider>
              Resume Builder
            </p>
            <p>
              <IconContext.Provider
                value={{ className: "jobsnav-react-icons" }}
              >
                <MdSmartDisplay />
              </IconContext.Provider>
              Job seeker guidance
            </p>
            <p>
              <IconContext.Provider
                value={{ className: "jobsnav-react-icons" }}
              >
                <IoIosSettings />
              </IconContext.Provider>
              Application settings
            </p>
          </div>

          <div className="JobsButton">
            <button>
              <IconContext.Provider value={{ className: "post-react-icon" }}>
                <FaPenToSquare />
              </IconContext.Provider>
              Post a free job
            </button>
          </div>
          </>

  );
};

export default JobsPage;

import React, { useContext, useRef } from "react";
import { InfoContext } from "../context/InfoContext";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function HomePage({ location }) {
  const { setUserInfo } = useContext(InfoContext);
  const zipCodeRef = useRef();
  const handleClick = () => {
    setUserInfo({ UserZip: zipCodeRef.current.value });
  };
  return (
    <div>
      <Header currentPath={location.pathname} />
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control welcome-zip-code"
          placeholder="Enter your zip code"
          aria-label="Enter your zip code"
          ref={zipCodeRef}
        />
        <div className="input-group-append">
          <span
            className="input-group-text bg-primary text-white font-weight-bold"
            id="basic-addon2"
          >
            <Link
              to="/info"
              style={{ textDecoration: "none", color: "white" }}
              onClick={handleClick}
            >
              See plans
            </Link>
          </span>
        </div>
      </div>{" "}
    </div>
  );
}

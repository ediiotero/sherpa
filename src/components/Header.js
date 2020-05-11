import React from "react";
import logo from "../images/healthsherpa_logo.png";
import whiteLogo from "../images/healthsherpa_logo_white.png";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ match, location, history, currentPath }) {
  //   currentPath = location.pathname;
  return currentPath === "/" ? (
    <>
      <section className="nav-top">
        <span className="mr-3 .text-secondary">Español</span>{" "}
        <span className="mr-3 .text-secondary">855.772.2663</span>
      </section>
      <nav className="navbar navbar-expand-lg navbar-light sherpa-nav">
        <Link className="navbar-brand" to="/">
          <img style={{ height: "2rem" }} src={logo} alt="Health Sherpa logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                Careers
              </a>
            </li>
          </ul>
          <ul className="navbar-nav" style={{ margin: "0 0 0 auto" }}>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                For Agents
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                For Carriers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  ) : (
    <>
      <nav className="navbar bg-primary sherpa-nav-blue">
        <Link className="navbar-brand" to="/">
          <img
            style={{ height: "1.5rem" }}
            src={whiteLogo}
            alt="Health Sherpa logo"
          />
        </Link>
        <section className="nav-top-blue">
          <span className="mr-3">Español</span>{" "}
          <span className="mr-3">855.772.2663</span>
        </section>
      </nav>
    </>
  );
}

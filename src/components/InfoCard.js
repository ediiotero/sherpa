import React, { useState, useContext } from "react";
import { InfoContext } from "../context/InfoContext";
import "./InfoCard.css";

export const InfoCard = (props) => {
  const { basicInfo, setBasicInfo } = useContext(InfoContext);
  const [showCard, setShowCard] = useState(false);
  const [currentInfo, setCurrentInfo] = useState({});
  const handleChange = (e) => {
    setCurrentInfo({ ...currentInfo, [e.target.name]: e.target.value });
    console.log(currentInfo);
  };

  const toggleCard = () => {
    setShowCard(!showCard);
    // const nextDependent = {
    //   person: "Your Dependent",
    //   add: "Add Your Dependent",
    //   age: null,
    //   gender: null,
    // };
    // if (props.add === "Add Your Dependent") {
    //   setBasicInfo([...basicInfo, nextDependent]);
    // }
  };

  return (
    <>
      <div
        className="info-add-btn"
        style={showCard ? { display: "none" } : { display: "block" }}
      >
        <button
          type="button"
          className="btn btn-outline-primary btn-sm info-add-btn"
          onClick={toggleCard}
        >
          {props.add}
        </button>
      </div>
      <div
        className="info-card"
        style={showCard ? { display: "block" } : { display: "none" }}
      >
        <div className="info-card-header">
          <div className="text-primary info-card-title">{props.title}</div>
          <div className="info-card-x text-muted" onClick={toggleCard}>
            x
          </div>
        </div>
        <div className="info-card-inputs">
          <section className="info-card-age">
            <label className="font-weight-bold" htmlFor="user-age">
              Age
            </label>
            <input
              style={{ width: "50%", height: "3rem" }}
              type="text"
              className="form-control"
              id="user-age"
              aria-describedby="user age"
              name={props.inputName}
              value={currentInfo.age}
              onChange={handleChange}
            />
          </section>
          <section className="info-card-gender">
            <div
              className="font-weight-bold"
              style={{ paddingBottom: ".5rem" }}
            >
              Gender
            </div>
            <div
              className="btn-group info-btn-group"
              role="radiogroup"
              aria-label="Gender buttons"
            >
              <button
                type="button"
                role="radio"
                className="btn btn-outline-primary"
                data-toggle="button"
                aria-pressed="false"
                name="gender"
                value="male"
              >
                Male
              </button>
              <button
                type="button"
                role="radio"
                className="btn btn-outline-primary"
                data-toggle="button"
                aria-pressed="false"
                name="gender"
                value="female"
              >
                Female
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default InfoCard;

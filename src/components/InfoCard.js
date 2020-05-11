import React, { useState } from "react";
import "./InfoCard.css";

export const InfoCard = (props) => {
  const [showCard, setShowCard] = useState(false);
  //   const [selectMale, setSelectMale] = useState(false);
  //   const [selectFemale, setSelectFemale] = useState(false);
  const toggleCard = () => {
    console.log("show: ", showCard);
    setShowCard(!showCard);
  };
  //   const toggleSelected = (e) => {
  //     console.log(e);
  //     if(gender === 'male') setSelectMale(!selectMale)
  //     if(gender === 'female') setSelectMale(!selectFemale)
  //   };
  return (
    <>
      <div
        className="info-add-btn"
        style={showCard ? { display: "none" } : { display: "block" }}
      >
        <button
          type="button"
          class="btn btn-outline-primary btn-sm info-add-btn"
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
          <div className="text-primary info-card-title">{props.name}</div>
          <div className="info-card-x text-muted" onClick={toggleCard}>
            x
          </div>
        </div>
        <div className="info-card-inputs">
          <section className="info-card-age">
            <label className="font-weight-bold" for="user-age">
              Age
            </label>
            <input
              style={{ width: "50%", height: "3rem" }}
              type="text"
              class="form-control"
              id="user-age"
              aria-describedby="basic-addon3"
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
              class="btn-group info-btn-group"
              role="radiogroup"
              aria-label="Gender buttons"
            >
              <button
                type="button"
                role="radio"
                class="btn btn-outline-primary active"
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
                class="btn btn-outline-primary active"
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

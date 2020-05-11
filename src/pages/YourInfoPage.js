import React, { useContext, useState } from "react";
import { InfoContext } from "../context/InfoContext";
import InfoCard from "../components/InfoCard";
import Steps from "../components/Steps";

import Header from "../components/Header";
import "./YourInfoPage.css";
import { v4 as uuidv4 } from "uuid";

export default function YourInfoPage({ location }) {
  const { userInfo, setUserInfo, basicInfo, setBasicInfo } = useContext(
    InfoContext
  );
  //   const [currentInfo, setCurrentInfo] = useState({});
  //   const handleChange = (e) => {
  //     setCurrentInfo({ ...currentInfo, [e.target.name]: e.target.value });
  //     console.log(currentInfo);
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(currentInfo);
    // const setSavedInfo = basicInfo.filter((info) => !info.age === null);
    //   setUserInfo()
  };
  return (
    <div>
      <Header currentPath={location.pathname} />
      <Steps location={location.pathname} />
      <form onSubmit={handleSubmit}>
        {basicInfo.map((card, i) => (
          <InfoCard
            key={uuidv4()}
            title={card.person}
            add={card.add}
            inputName={`${i}-Age`}
          />
        ))}
        <div style={{ width: "30rem", margin: ".5rem auto", display: "flex" }}>
          <button type="button" className="btn btn-outline-primary back-btn">
            Back
          </button>
          <button
            type="submit"
            className="btn btn-primary continue-btn"
            value="Submit"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

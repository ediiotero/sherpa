import React, { useContext, useRef, useState } from "react";
import { InfoContext } from "../context/InfoContext";
import InfoCard from "../components/InfoCard";

import Header from "../components/Header";

const initialState = [
  { person: "You", add: "Add Myself", age: null, gender: null },
  { person: "Your Spouse", add: "Add Your Spouse", age: null, gender: null },
  {
    person: "Your Dependent",
    add: "Add Your Dependent",
    age: null,
    gender: null,
  },
];

export default function YourInfoPage({ location }) {
  const { userInfo, setUserInfo } = useContext(InfoContext);
  const [basicInfo, setBasicInfo] = useState(initialState);
  console.log(userInfo);
  //   const handleClose = () => {};
  return (
    <div>
      <Header currentPath={location.pathname} />
      {basicInfo.map((card) => (
        <InfoCard name={card.person} add={card.add} />
      ))}
    </div>
  );
}

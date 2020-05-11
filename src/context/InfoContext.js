import React, { createContext, useState } from "react";

export const InfoContext = createContext();

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

const InfoContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [basicInfo, setBasicInfo] = useState(initialState);
  const [currentInfo, setCurrentInfo] = useState({});
  return (
    <InfoContext.Provider
      value={{
        userInfo,
        setUserInfo,
        basicInfo,
        setBasicInfo,
        currentInfo,
        setCurrentInfo,
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContextProvider;

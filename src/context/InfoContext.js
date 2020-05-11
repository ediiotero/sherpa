import React, { createContext, useState } from "react";

export const InfoContext = createContext();

const InfoContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState({});
  return (
    <InfoContext.Provider value={{ userInfo, setUserInfo }}>
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContextProvider;

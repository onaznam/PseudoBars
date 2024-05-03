// GlobalContext.js
import React, { createContext, useContext, useState } from "react";

// Creating a context object
const GlobalContext = createContext();

// Custom hook to access the global context
export const useGlobalValue = () => useContext(GlobalContext);

// Provider component to wrap your application with
export const GlobalProvider = ({ children }) => {
  const [globalId, setGlobalId] = useState(null);
  const [globalData, setGlobalData] = useState(null);
  return (
    <GlobalContext.Provider
      value={{ globalId, setGlobalId, globalData, setGlobalData }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

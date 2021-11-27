import React, { createContext, useReducer } from "react";
import globalReducer from "../reducers/globalReducer";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const initialState = {};
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
    <GlobalContext.Provider value={{ ...state }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

import React, { createContext, useReducer } from "react";
import paginationReducer from "../reducers/paginationReducer";

export const PaginationContext = createContext();

const PaginationContextProvider = (props) => {
  const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

  const initialState = {
    isLoading: false,
    all_employees: [],
  };

  const [state, dispatch] = useReducer(paginationReducer, initialState);

  return (
    <PaginationContext.Provider value={{ ...state }}>
      {props.children}
    </PaginationContext.Provider>
  );
};

export default PaginationContextProvider;

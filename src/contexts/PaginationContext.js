import React, { createContext, useEffect, useReducer } from "react";
import paginationReducer from "../reducers/paginationReducer";

export const PaginationContext = createContext();

const PaginationContextProvider = (props) => {
  // get Url
  const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

  // Initial Value for pagination
  const initialState = {
    isLoading: true,
    all_employees: [],
    separated_all_employees: [],
    page: 0,
  };

  const [state, dispatch] = useReducer(paginationReducer, initialState);

  // Fetch Git Users
  const getInfos = async () => {
    try {
      dispatch({ type: "LOADING" });
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "GET_INFOS", payload: data });
      dispatch({ type: "SPLIT_ARR", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfos();
  }, []);

  // Click On Page Number
  const handleClick = (pageId) => {
    dispatch({ type: "PAGE_CLICK", payload: pageId });
  };

  // Click On Prev Btn
  const handlePrev = (prev) => {
    dispatch({ type: "PREV" });
  };

  // CLick On Next Btn
  const handleNext = (next) => {
    dispatch({ type: "NEXT" });
  };

  return (
    <PaginationContext.Provider
      value={{ ...state, handleClick, handlePrev, handleNext }}
    >
      {props.children}
    </PaginationContext.Provider>
  );
};

export default PaginationContextProvider;

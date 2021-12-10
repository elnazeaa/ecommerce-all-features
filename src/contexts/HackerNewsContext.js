import React, { createContext, useEffect, useReducer } from "react";
import hackerNewsReducre from "../reducers/hackerNewsReducer";

export const HackerNewsContex = createContext();

const HackerNewsProvider = (props) => {
  const key = process.env.REACT_APP_API_KEY;

  const initialState = {
    loading: false,
    all_news: [],
    searchQuery: "React",
  };
  const [state, dispatch] = useReducer(hackerNewsReducre, initialState);

  const handleSearchQuery = (e) => {
    const searchTerm = e.target.value;
    dispatch({ type: "GET_SEARCH_QUERY", payload: searchTerm });
  };

  const getNews = async () => {
    try {
      dispatch({ type: "LOADER" });
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${state.searchQuery}&apiKey=${key}`
      );
      const res = await response.json();
      dispatch({ type: "GET_NEWS", payload: { news: res.articles, res } });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, [state.searchQuery]);

  return (
    <HackerNewsContex.Provider value={{ ...state, handleSearchQuery }}>
      {props.children}
    </HackerNewsContex.Provider>
  );
};

export default HackerNewsProvider;

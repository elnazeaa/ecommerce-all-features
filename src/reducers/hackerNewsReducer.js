const hackerNewsReducre = (state, action) => {
  if (action.type === "GET_SEARCH_QUERY") {
    return { ...state, searchQuery: action.payload, loading: true };
  }
  if (action.type === "LOADER") {
    return { ...state, loading: true };
  }
  if (action.type === "GET_NEWS") {
    return {
      ...state,
      loading: false,
      all_news: action.payload.news,
    };
  }
  return state;
};

export default hackerNewsReducre;

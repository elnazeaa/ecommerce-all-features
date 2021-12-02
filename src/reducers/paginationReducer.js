const paginationReducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, isLoading: true };
  }

  if (action.type === "GET_INFOS") {
    return { ...state, all_employees: action.payload, isLoading: true };
  }

  if (action.type === "SPLIT_ARR") {
    const newArr = Array.from({ length: 10 }, (_, index) => {
      let arrSlice = state.all_employees.slice(index * 10, index * 10 + 10);
      return arrSlice;
    });
    return { ...state, separated_all_employees: newArr, isLoading: false };
  }

  if (action.type === "PAGE_CLICK") {
    return {
      ...state,
      page: action.payload,
    };
  }

  if (action.type === "PREV") {
    let { page } = state;
    const computePage = () => {
      page = page - 1;
      if (page < 0) {
        page = state.separated_all_employees.length - 2;
      }
      return page;
    };
    return { ...state, page: computePage() };
  }

  if (action.type === "NEXT") {
    let { page } = state;
    const computePage = () => {
      page = page + 1;
      if (page >= state.separated_all_employees.length - 1) {
        page = 0;
      }
      return page;
    };
    return { ...state, page: computePage() };
  }

  return state;
};

export default paginationReducer;

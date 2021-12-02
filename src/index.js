import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalContextProvider from "./contexts/GlobalContext";
import PaginationContextProvider from "./contexts/PaginationContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <PaginationContextProvider>
        <App />
      </PaginationContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

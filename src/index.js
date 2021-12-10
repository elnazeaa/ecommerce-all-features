import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalContextProvider from "./contexts/GlobalContext";
import HackerNewsProvider from "./contexts/HackerNewsContext";
import PaginationContextProvider from "./contexts/PaginationContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <PaginationContextProvider>
        <HackerNewsProvider>
          <App />
        </HackerNewsProvider>
      </PaginationContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  HomePage,
  SingleProductPage,
  CheckoutPage,
  OurTeamPage,
  MagazinPage,
  AboutUsPage,
  ContactUsPage,
} from "./pages/index";
import { Footer, Navbar } from "./components/index";
const App = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/ecommerce-all-features">
          <HomePage />
        </Route>
        <Route exact path="/ecommerce-all-features/our-team">
          <OurTeamPage />
        </Route>
        <Route exact path="/ecommerce-all-features/about-us">
          <AboutUsPage />
        </Route>
        <Route exact path="/ecommerce-all-features/contact-us">
          <ContactUsPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

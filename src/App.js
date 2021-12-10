import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  HomePage,
  ProductPage,
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
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/products">
          <ProductPage />
        </Route>
        <Route exact path="/singleProduct">
          <SingleProductPage />
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
        <Route exact path="/our-team">
          <OurTeamPage />
        </Route>
        <Route exact path="/magazine">
          <MagazinPage />
        </Route>
        <Route exact path="/about-us">
          <AboutUsPage />
        </Route>
        <Route exact path="/contact-us">
          <ContactUsPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

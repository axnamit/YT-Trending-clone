import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import SingleItem from "./screens/singleitem";

import DashBoard from "./screens/dashoard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Provider from "./store/Provider";

function App() {
  return (
    <Provider>
      <Header />
      <React.Fragment>
        <Router basename="/">
          <Route exact path="/" component={DashBoard} />
          <Route path="/item" component={SingleItem} />
        </Router>
      </React.Fragment>

      <Footer />
    </Provider>
  );
}

export default App;

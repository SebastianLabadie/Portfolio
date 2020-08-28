import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {
  combineForms
} from 'react-redux-form';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const initialState = {
    email: "",
    message: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

const store = createStore(combineForms({
  formState: initialState,
}));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

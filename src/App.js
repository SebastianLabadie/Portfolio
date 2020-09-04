import React from "react";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import { Route, Switch,useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'


function App() {
  const location=useLocation();
 
  return (
    <>
    <Navbar />
    <AnimatePresence exitBeforeEnter> 
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/Portfolio" component={Home} />
    </Switch>
    </AnimatePresence>
    <Footer />
      </>
  );
}

export default App;

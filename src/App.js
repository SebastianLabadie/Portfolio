import React, { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { IntlProvider } from "react-intl";
import { allMessages } from "./language/Messages";

function App() {
  const location = useLocation();
  const [currentLocale, setCurrentLocale] = useState("en");
  const messages = allMessages[currentLocale];
  return (
    <IntlProvider locale={currentLocale} messages={messages}>
      <Navbar
        currentLocale={currentLocale}
        onClick={() => setCurrentLocale(currentLocale === "en" ? "es" : "en")}
      />
      {/* <button
        style={{
          position: "fixed",
          bottom: "15vh",
          backgroundColor: "yellow",
          padding: "15px",
          zIndex: 5000,
          border: "none",
          borderRadius: "50%",
          outline: "none",
          color: "black",
          cursor: "pointer",
        }}
        onClick={(e) => setCurrentLocale(currentLocale === "en" ? "es" : "en")}
      >
        {currentLocale === "en" ? "ES" : "EN"}
      </button> */}
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
    </IntlProvider>
  );
}

export default App;

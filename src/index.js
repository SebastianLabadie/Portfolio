import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './hamburgers.css'
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import {combineForms} from 'react-redux-form';
import { BrowserRouter as Router,} from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';

const initialState = {
    email: "",
    message: "",
};


const store = createStore(combineForms({
  formState: initialState,
}));



ReactDOM.render(
    <Router>
        <Provider store={store}>

        <App />
        </Provider>
    </Router>
,document.getElementById('root'));

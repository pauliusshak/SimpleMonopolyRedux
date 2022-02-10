import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import changesReducer from "./features/redux1";

const store = configureStore({
    reducer: {
        info: changesReducer
    },
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>

            <App/>

        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'common/styles.css';

import reportWebVitals from './reportWebVitals';
import App from "./app/App";
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

reportWebVitals();

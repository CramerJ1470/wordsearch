// import React  from 'react';
// import ReactDOM from 'react-dom';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";

// import { BrowserRouter as Router } from "react-router-dom";


// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<React.StrictMode><Router><App tab="home" /></Router></React.StrictMode>,container);
// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';


// this is the ID of the div in your index.html file

// const rootElement = 
// document.getElementById('root');
// const root = 
// createRoot(rootElement);

// ️ if you use TypeScript, add non-null (!) assertion operator //

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

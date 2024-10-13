import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner1 from './Banner1';
import './Banner1.css';
import './index.css';
import App from './App';
import './pricing-component.jsx';
import Timeline from './Timeline';
import './Timeline.css';
import reportWebVitals from './reportWebVitals';
import PricingContainer from "./pricing-component-container";
import NavigationBar from './NavigationBar.js';
import './NavigationBar.css';
import ServiceStats from './ServiceStats.js';
import './ServiceStats.css';
import Footer from './Footer.js';
import './Footer.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <NavigationBar />
  <div className="content">
    <Banner1 />
    </div>
    <Timeline />
    <PricingContainer />
    <ServiceStats />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

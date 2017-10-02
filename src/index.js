// @flow
import "jquery";
import 'bootstrap';
import 'prop-types';
import React from 'react';
import reactDOM from 'react-dom';
import './index.css';

// Register service worker
if ('serviceWorker' in navigator && navigator.serviceWorker !== undefined) {
    const serviceWorker : Promise<any> = navigator.serviceWorker.register('./service-worker.js');
    serviceWorker.then(function() { console.log('Service Worker Registered'); });
}

const app = <p>Cats</p>;
const container = document.getElementById('app');
reactDOM.render(app, container);
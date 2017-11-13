// @flow
// External Dependencies
import "jquery"
import "bootstrap"
import "prop-types"
import React from "react"
import reactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
// Internal Dependencies
import "./index.scss"
import reducer from "./reducers"
import Index from "./pages/index"

// Register service worker
// if ("serviceWorker" in navigator && navigator.serviceWorker !== undefined) {
//   const serviceWorker: Promise<any> = navigator.serviceWorker.register("./service-worker.js")
//   serviceWorker.then(function() {
//     console.log("Service Worker Registered")
//   })
// }

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const App = (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Index} />
    </Router>
  </Provider>
)

const container = document.getElementById("app")
reactDOM.render(App, container)

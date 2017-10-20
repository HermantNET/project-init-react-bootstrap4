// @flow
import "jquery"
import "bootstrap"
import "prop-types"
import React from "react"
import reactDOM from "react-dom"
import "./index.scss"

// Register service worker
if ("serviceWorker" in navigator && navigator.serviceWorker !== undefined) {
  const serviceWorker: Promise<any> = navigator.serviceWorker.register("./service-worker.js")
  serviceWorker.then(function() {
    console.log("Service Worker Registered")
  })
}

class App extends React.Component<{ greeting: string }> {
  render = (): string => this.props.greeting
}

const container = document.getElementById("app")
reactDOM.render(<App greeting="Hello, World!" />, container)

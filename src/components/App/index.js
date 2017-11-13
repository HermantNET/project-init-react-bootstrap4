// @flow
import React from "react"

type Props = {
  greeting: string,
}

export default class App extends React.Component<Props> {
  render = (): string => this.props.greeting
}

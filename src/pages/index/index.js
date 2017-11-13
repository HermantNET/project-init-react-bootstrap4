// @flow
import * as React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import App from "../../components/App"

type Props = {
  greeting: string,
}

const mapStateToProps = (state: Object) => ({
  greeting: state.greeting,
})

class Index extends React.Component<Props> {
  render = () => <App greeting={this.props.greeting} />
}

export default withRouter(connect(mapStateToProps)(Index))

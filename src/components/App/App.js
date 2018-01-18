import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './App.css'
import Home from '../Home'
import Login from '../Login'
import Ashtadhyayi from '../Ashtadhyayi'

import {
  getAppDetails
} from '../../actions/appAction'

class App extends Component {
  constructor(props) {
    super(props)
    props.getAppDetails()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Route exact path="/" render={() => <Home appDetails={this.props.app} />} />
            <Route path="/login" component={Login} />
            <Route path="/ashtadhyayi/:adhyay?/:pada?/:sootra?" component={Ashtadhyayi} />
          </div>
        </Router>
      </div>
    )
  }
}

App.propTypes = {
  app: PropTypes.object.isRequired,
  getAppDetails: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    app: state.app
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAppDetails: () => dispatch(getAppDetails())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


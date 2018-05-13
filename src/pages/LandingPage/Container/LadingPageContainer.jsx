import React, { Component } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { styles } from './LandingPageContainer.styles'
import NavComponent from '../LandingPageComponents/Nav/Nav'
import BodyComponent from '../LandingPageComponents/Body/Body'


class LandingPageContainer extends Component {
  render() {
    const { props, classes, styles } = this.props
    return (
      <div>
        <NavComponent />
        <BodyComponent />
      </div>
    );
  }
}

export default LandingPageContainer

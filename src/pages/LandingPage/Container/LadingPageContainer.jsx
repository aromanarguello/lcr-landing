import React, { Component } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { styles } from './LandingPageContainer.styles'
import NavComponent from '../LandingPageComponents/Nav/Nav'
import BodyComponent from '../LandingPageComponents/Body/Body'
import NavBarComponent from '../LandingPageComponents/Nav/NavBar/NavBar'
import FooterComponent from '../LandingPageComponents/Footer/Footer'
import ScheduleComponent from '../LandingPageComponents/Body/schedule/Schedule'


class LandingPageContainer extends Component {
  render() {
    return (
      <div>
        <NavComponent />
        <div>
          <NavBarComponent />
        </div>
        <BodyComponent />
        <ScheduleComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default LandingPageContainer

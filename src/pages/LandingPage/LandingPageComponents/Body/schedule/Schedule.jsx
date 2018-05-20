import React, { Component } from 'react'
import { styles } from './Schedule.styles'
import Header from './Header'
import ScheduleCards from './ScheduleCards'
import DnaArt from '../../../../../img/dnaart.jpg'

class Schedule extends Component {
    render() {
        const inPageStyle = {
            backgroundImage: `url(${DnaArt})`,
            backgroundSize: 'cover',
            margin: 0
        }
        return (
            <div id='servicesContainer' >
                <div></div>
                <Header />
                <ScheduleCards />
            </div>
        )
    }
}

export default Schedule
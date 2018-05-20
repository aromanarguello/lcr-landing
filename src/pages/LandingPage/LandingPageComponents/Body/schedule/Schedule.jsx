import React, { Component } from 'react'
import { styles } from './Schedule.styles'
import Header from './Header'
import ScheduleCards from './ScheduleCards'
import DNA from '../../../../../img/chromosomes.jpg'

class Services extends Component {
    render() {
        const inPageStyle = {
            backgroundImage: `url(${DNA})`,
            backgroundSize: 'cover',
            margin: 0
        }
        return (
            <div id='servicesContainer'>
                <div></div>
                <Header />
                <ScheduleCards />
            </div>
        )
    }
}

export default Services
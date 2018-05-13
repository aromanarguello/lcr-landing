import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../../../img/SmallLogo.png'
import { styles } from './Nav.styles'
import PhoneIcon from './Icons/Phone'
import PhoneCard from './Cards/PhoneCard'
import LocationIcon from './Icons/Location'
import LocationCard from './Cards/LocationCard'

const Nav = () => {
    return (
        <div id='headerContainer'>
            <img src={Logo} style={styles.logo} />
            <div id='phoneIconContainer' style={styles.phoneIconContainer}>
                <PhoneIcon />
                <PhoneCard />
                <LocationIcon />
                <PhoneCard />
            </div>
        </div>
    );
}

export default Nav
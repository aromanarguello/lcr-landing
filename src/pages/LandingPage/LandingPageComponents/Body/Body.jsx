import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../../../img/bg-microscope.png'
// import { styles } from './Body.styles'

const styles = {
    bodyContainer: {
        width: '100%',
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        border: '1px solid rgba(35,64,130, 0.7)',
    }
}
const Body = () => {
    return (
        <div id='bodyContainer' style={styles.bodyContainer}></div>
    );
}

export default Body
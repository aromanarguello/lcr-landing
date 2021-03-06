import React from 'react'
import Image from '../../../../img/dnaart.jpg'
import Text from './Text'

const styles = {
    bodyContainer: {
        width: '100%',
        height: 900,
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'flex-start'
    }
}
const Body = () => {
    return (
        <div id='bodyContainer' style={styles.bodyContainer}>
            <Text />
        </div>
    );
}

export default Body
import React, { Component } from 'react'
import { styles } from './Footer.styles.js'

class Footer extends Component {
    render() {
        return (
            <div>
                {/* <div style={styles.topFooter}></div> */}
                <footer id='footerContainer' style={ styles.footHeaderContainer } >
                <div>
                    <iframe frameBorder="0" style={ styles.iFrameStyle } 
                      src="https://www.google.com/maps/embed/v1/place?q=40.7127837,-74.0059413&amp;key=AIzaSyCc3zoz5TZaG3w2oF7IeR-fhxNXi8uywNk">
                    </iframe>
                </div>
                </footer>
            </div>
        )
    }
}

export default Footer
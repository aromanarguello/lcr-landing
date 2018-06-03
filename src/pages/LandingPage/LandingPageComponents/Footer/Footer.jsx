import React, { Component } from 'react'
import { styles } from './Footer.styles.js'
import ContactForm from './ContactForm/ContactForm'
import Microscope from '../../../../img/bg-microscope.png'
class Footer extends Component {
    render() {
        return (
            <div id="footerContainer" style={styles.footHeaderContainer}>
                <ContactForm />
                <img src={Microscope} style={styles.microscopeImage} />
            </div>
        )
    }
}

export default Footer
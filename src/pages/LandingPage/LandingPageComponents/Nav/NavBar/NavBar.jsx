import React from 'react'
import { styles } from './Navbar.styles'
import NavBarButton from '../../Buttons/NavButton'

const NavBar = () => {
    return (
        <div id='navBarContainer' style={styles.navBarContainer}>
            <ul style={styles.navLinks}>
                <li><a style={styles.navLinkItems} href="#servicesContainer">Horarios</a></li>
                <li><a style={styles.navLinkItems} href="#">Sucursales</a></li>
                <li><a style={styles.navLinkItems} href="#footerContainer">Contactenos</a></li>
            </ul>
            {/* <NavBarButton /> */}
        </div>
    )
}

export default NavBar
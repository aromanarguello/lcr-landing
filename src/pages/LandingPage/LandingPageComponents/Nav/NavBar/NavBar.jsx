import React from 'react'
import { styles } from './Navbar.styles'
import NavBarButton from '../../Buttons/NavButton'

const NavBar = () => {
    return (
        <div id='navBarContainer' style={styles.navBarContainer}>
            <ul style={styles.navLinks}>
                <li style={styles.navLinkItems}>Bienvenidos</li>
                <li style={styles.navLinkItems}>Horarios</li>
                <li style={styles.navLinkItems}>Sucursales</li>
                <li style={styles.navLinkItems}>Contactenos</li>
            </ul>
            <NavBarButton />
        </div>
    )
}

export default NavBar
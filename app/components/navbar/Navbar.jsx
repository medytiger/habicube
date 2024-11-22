import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../ui/logo/logo'
import UserMenu from '../userMenu/UserMenu';


export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.navbarContainer} container`}>

                <Logo />

                <UserMenu />

            </div>
        </nav >
    )
}

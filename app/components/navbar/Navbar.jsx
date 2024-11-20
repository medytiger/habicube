import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../ui/logo/logo'
import Input from '../ui/inputs/input'
import { BiSearch } from 'react-icons/bi';
import UserMenu from '../userMenu/UserMenu';


export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.navbarContainer} container`}>

                <Logo />
                <Input
                    placeholder='Recherche'
                    hideLabel={true}
                    icon={<BiSearch />}
                />
                <UserMenu />

            </div>
        </nav >
    )
}

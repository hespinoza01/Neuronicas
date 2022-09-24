import { FC, memo } from 'react'
import { NavLink } from '@components'
import { randomKey } from '@utils'
import './index.scss'

const activeClassName = 'nav-item__active'
const navItems = [
    { path: '/', title: 'inicio' },
    { path: '/about', title: 'acerca' },
    { path: '/countries', title: 'países' },
]

const Navbar: FC = () => {
    return (
        <header className='Navbar'>
            <h2 className='Navbar-logo'>LOGO</h2>

            <nav>
                <ul className='Navbar-nav'>
                    {navItems.map(({ title, path }) => (
                        <li key={randomKey()} className='nav-item'>
                            <NavLink
                                to={path}
                                activeClassName={activeClassName}
                            >
                                <span>{title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <button className='Navbar-button'>descargar</button>
        </header>
    )
}

export const NavbarLite: FC = () => {
    return (
        <nav className='NavbarLite'>
            <ul className='NavbarLite-nav'>
                {navItems.map(({ title, path }) => (
                    <li key={randomKey()} className='nav-item'>
                        <NavLink to={path}>
                            <span>{title}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default memo(Navbar)

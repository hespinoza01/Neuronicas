import { FC, PropsWithChildren } from 'react'
import { Link as RLink, useMatch } from 'react-router-dom'

const NavLink: FC<PropsWithChildren<{
    to: string
    activeClassName?: string
}>> = ({ children, to, activeClassName }) => {
    const match = useMatch(to)

    return (
        <RLink to={to} className={match !== null ? activeClassName : undefined}>
            {children}
        </RLink>
    )
}

export default NavLink

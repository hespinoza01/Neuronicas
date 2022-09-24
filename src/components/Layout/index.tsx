import { FC, PropsWithChildren } from 'react'

import { Navbar, Footer } from '@components'

const Layout: FC<PropsWithChildren<{
    className?: string
    showNavbar?: boolean
    showFooter?: boolean
}>> = ({ children, className, showNavbar = true, showFooter = true }) => {
    return (
        <section className={className}>
            {showNavbar && <Navbar />}
            {children}
            {showFooter && <Footer />}
        </section>
    )
}

export default Layout

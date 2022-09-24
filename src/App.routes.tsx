import { FC } from 'react'
import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom'

import { Home, About, Countries } from '@pages'
import { randomKey } from '@utils'

const routes = [
    { path: '/', component: <Home /> },
    { path: '/about', component: <About /> },
    { path: '/countries', component: <Countries /> },
]

const AppRoutes: FC = () => {
    return (
        <>
            <Switch>
                <Routes>
                    {routes.map(({ path, component }) => (
                        <Route
                            key={randomKey()}
                            path={path}
                            element={component}
                        />
                    ))}
                </Routes>
            </Switch>
        </>
    )
}
export default AppRoutes

import { FC } from 'react'
import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom'

const AppRoutes: FC = () => {
    return (
        <>
            <Switch>
                <Routes>
                    <Route path='/' element={<h1>Home</h1>} />
                </Routes>
            </Switch>
        </>
    )
}
export default AppRoutes

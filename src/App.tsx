import { useEffect, FC, EffectCallback } from 'react'

import AppRoutes from './App.routes'
import { AppLoader } from '@components'
import { useLoader } from '@hooks'

const App: FC = () => {
    // config app loader
    const [loader, enableLoader, disableLoader] = useLoader(<AppLoader />)

    useEffect((): ReturnType<EffectCallback> => {
        enableLoader()

        return () => {
            disableLoader()
        }
    }, [])

    return (
        <main className='App'>
            <AppRoutes />

            {loader.render()}
        </main>
    )
}

export default App

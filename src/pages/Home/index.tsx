import { FC, memo } from 'react'

import { Layout } from '@components'
import './index.scss'

const Home: FC = () => {
    return (
        <Layout className='Home'>
            <article className='Home-herobanner'>
                <div className='herobanner-map'></div>
                <div className='herobanner-info'>
                    <h1>
                        Bienvenido a{' '}
                        <span className='enphasis'>neuronicas</span>, una
                        plataforma para encontrar nuevos lugares.
                    </h1>

                    <br />
                    <br />

                    <p>¡Somos FTC, FTI, FEC, FARQ!</p>
                    <p>¡Somos NeuroNicas!</p>
                    <p>¡Somos Nicaragua!</p>
                    <p>¡Somos UNI!</p>
                </div>
            </article>
        </Layout>
    )
}

export default memo(Home)

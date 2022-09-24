import { FC, memo } from 'react'

import { Layout } from '@components'
import ImgGroup from '@assets/grupo.jpeg'
import ImgGroup2 from '@assets/grupo_2.jpeg'
import ImgGroup3 from '@assets/grupo_3.jpg'
import './index.scss'

const About: FC = () => {
    return (
        <Layout className='About'>
            <article className='About-section section-green'>
                <div className='section-img'>
                    <img src={ImgGroup} alt='Foto Grupal Neuronicas' />
                </div>
                <div className='section-info'>
                    <h2>Nuestra Misión</h2>
                    <p>
                        Desarrollamos, mantemos y definimos ideas innovadoras
                        que dan soluciones a problemáticas nacionales e
                        internacionales.
                    </p>
                </div>
            </article>

            <article className='About-section section-bicolor'>
                <div className='section-info'>
                    <h2>Nuestra Visión</h2>
                    <p>
                        Queremos que nuestro grupo tenga un impacto positivo
                        siendo los pioneros en innovación latinoamericana
                        dejando un legado en generaciones futuras.
                    </p>
                </div>

                <div className='section-img'>
                    <img src={ImgGroup2} alt='Foto Grupal Neuronicas' />
                </div>
            </article>

            <article className='About-section section-yellow'>
                <div className='section-img'>
                    <img src={ImgGroup3} alt='Foto Grupal Neuronicas' />
                </div>
                <div className='section-info'>
                    <h2>Nuestros Valores</h2>
                    <ul>
                        <li>Renovación.</li>
                        <li>Inspiracion.</li>
                        <li>Responsabilidad Social.</li>
                        <li>Trabajo en equipo.</li>
                    </ul>
                </div>
            </article>
        </Layout>
    )
}

export default memo(About)

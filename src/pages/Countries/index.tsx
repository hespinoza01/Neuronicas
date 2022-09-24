/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { FC, memo, useState } from 'react'

import { Layout } from '@components'
import { randomKey } from '@utils'
import { data, countriesList, ICountry } from './data'
import './index.scss'

const defaultCountry: ICountry = {
    name: 'N/A',
    welcome: 'N/A',
    map: 'N/A',
    history: [],
    railways: [],
}

const About: FC = () => {
    const [countries] = useState<Array<string>>(countriesList)
    const [detail, setDetail] = useState<ICountry>(
        data.find(item => item.name === countries[0]) || defaultCountry
    )

    const onClickCountry = (country: string) => {
        const detail =
            data.find(item => item.name === country) || defaultCountry
        setDetail(detail)
    }

    return (
        <Layout className='Countries'>
            <article className='Countries-content'>
                <aside className='Countries-list'>
                    {countries.map(value => (
                        <p
                            key={randomKey()}
                            className={`country-item ${
                                detail.name === value ? 'active' : ''
                            }`}
                            onClick={() => onClickCountry(value)}
                        >
                            {value}
                        </p>
                    ))}
                </aside>

                <div className='Countries-detail'>
                    <h1>{detail.name}</h1>

                    <h3>{detail.welcome}</h3>

                    <img src={detail.map} alt='detail map' />

                    {detail.history.length && <h2>Historia</h2>}

                    {detail.history.map(value => (
                        <p key={randomKey()}>{value}</p>
                    ))}

                    {detail.railways?.length && <h2>Ferrovías</h2>}

                    {detail.railways?.map(value => (
                        <p key={randomKey()}>{value}</p>
                    ))}
                </div>
            </article>
        </Layout>
    )
}

export default memo(About)

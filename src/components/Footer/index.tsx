import { FC } from 'react'
import {
    FaInstagram,
    FaFacebookSquare,
    FaTiktok,
    FaYoutube,
    FaApple,
    FaAndroid,
} from 'react-icons/fa'
import { NavbarLite } from '@components'
import { randomKey } from '@utils'
import './index.scss'

const SocialLinks = [
    {
        icon: <FaInstagram />,
        name: 'instagram',
        url: 'https://www.instagram.com/neuro.nicas/?igshid=YmMyMTA2M2Y%3D',
    },
    {
        icon: <FaFacebookSquare />,
        name: 'facebook',
        url: 'https://www.facebook.com/NNRALLY2022',
    },
    {
        icon: <FaTiktok />,
        name: 'tiktok',
        url: 'https://www.tiktok.com/@neuronicas?_t=8Vuq8LXmEej&_r=1',
    },
    {
        icon: <FaYoutube />,
        name: 'youtube',
        url: 'https://www.youtube.com/channel/UCIJlyCukApl6VjGea9tQQ-g',
    },
]

const stores = [
    { icon: <FaApple />, label: 'App Store' },
    { icon: <FaAndroid />, label: 'Play Store' },
]

const Footer: FC = () => {
    return (
        <footer className='Footer'>
            <div className='Footer-nav'>
                <h2>LOGO</h2>
                <NavbarLite />
                <nav className='social-links'>
                    <ul>
                        {SocialLinks.map(({ name, url, icon }) => (
                            <li key={randomKey()}>
                                <a target='_blank' href={url} title={name}>
                                    {icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <p>Copyrigh &#169; {new Date().getFullYear()} | Neuronicas</p>
            </div>

            <div className='Footer-info'>
                <h3>Descarga nuestra aplicación</h3>

                <div className='store-content'>
                    {stores.map(({ icon, label }) => (
                        <div key={randomKey()} className='store-item'>
                            <span className='store-item__icon'>{icon}</span>
                            <p className='store-item__label'>
                                Descargar de la <br /> <strong>{label}</strong>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer

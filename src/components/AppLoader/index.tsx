import React, { EffectCallback, FC, SyntheticEvent, useEffect } from 'react'
import { ReactComponent as Loader } from '@assets/loader.svg'
import './index.scss'

const AppLoader: FC = () => {
    const onClickLoader = (e: SyntheticEvent) => {
        e.preventDefault()
        e.stopPropagation()
    }

    useEffect((): ReturnType<EffectCallback> => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    return (
        <section onClick={onClickLoader} className='AppLoader'>
            <Loader height={80} width={80} />
        </section>
    )
}

export default React.memo(AppLoader)

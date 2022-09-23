import { ReactElement, useState } from 'react'

export interface IUseLoaderOptions {
    isShowing: boolean
    show(): void
    hide(): void
    render(): React.ReactElement | null | undefined
}

export type IUseLoader = [IUseLoaderOptions, () => void, () => void]

export default function useLoader(loaderComponent?: ReactElement): IUseLoader {
    // Store loader status
    const [showLoader, setShowLoader] = useState<boolean>(false)

    const _onShowLoader = () => {
        setShowLoader(true)
    }

    const _onHideLoader = () => {
        setShowLoader(false)
    }

    // Change loader status to true for show
    const _showLoader = () => {
        window.dispatchEvent(new CustomEvent('_showLoader'))
    }

    // Change loader status to false
    const _hideLoader = () => {
        window.dispatchEvent(new CustomEvent('_hideLoader'))
    }

    // Return loader component rendered
    const render = (): ReactElement | undefined | null => {
        return showLoader ? loaderComponent : null
    }

    // Configure window listener for show loader
    const enableLoader = () => {
        window.addEventListener('_showLoader', _onShowLoader)
        window.addEventListener('_hideLoader', _onHideLoader)
    }

    // Remove prev windows listener
    const disableLoader = () => {
        window.removeEventListener('_showLoader', _onShowLoader)
        window.removeEventListener('_hideLoader', _onHideLoader)
    }

    return [
        {
            get isShowing() {
                return showLoader
            },
            show: _showLoader,
            hide: _hideLoader,
            render,
        },
        enableLoader,
        disableLoader,
    ]
}

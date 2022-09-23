/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

export default function useLocalStorage(
    key: string,
    initialValue: any
): [any, (value: any) => void] {
    const [storedValue, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)

            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return item !== null ? JSON.parse(item) : initialValue
        } catch (e) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return initialValue
        }
    })

    const setLocalStorage = (value: any): void => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
            setValue(value)
        } catch (e) {
            console.error(e)
        }
    }

    return [storedValue, setLocalStorage]
}

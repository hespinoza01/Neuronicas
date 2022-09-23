import { useLocation } from 'react-router-dom'

/**
 * Hook para obtener los parámetros de ruta
 */
export default function useQueryParams() {
    return new URLSearchParams(useLocation().search)
}

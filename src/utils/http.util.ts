import Axios from 'axios'
import { BASE_URL_SERVER } from './constans.util'

function createAxios(baseURL: string) {
    const _Http = Axios.create({
        baseURL,
        withCredentials: true,
        validateStatus: status => {
            return status >= 200 && status <= 500
        },
    })

    _Http.interceptors.request.use(config => {
        config.headers = {
            ...config.headers,
            Authorization: '', // TODO
        }

        return config
    })

    _Http.interceptors.response.use(response => {
        const { data, status, config } = response

        if (data.error) {
            if (status === 401 && !config?.headers?.__retry) {
                const auth = '' // TODO: Refresh token

                config.headers = {
                    ...config.headers,
                    __retry: true,
                    Authorization: auth,
                }

                return Http(config)
            } else {
                throw String(data.data)
            }
        }

        response.data = data.data ? data.data : data

        return response
    })

    return _Http
}

const Http = createAxios(BASE_URL_SERVER)

export default Http

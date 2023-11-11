import { AxiosResponse } from 'axios'

/**
 * Represents the response body of a football API request.
 * @template TResponse - The type of the response array.
 * @property {string} get -
 */
export type BodyResponse<TResponse> = {
    get: string
    parameters: any
    errors: any
    results: number
    response: Array<TResponse>
}

export type Response<TResponse> = AxiosResponse<BodyResponse<TResponse>>

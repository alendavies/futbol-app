import { axiosInstance } from '@/lib/axios';
import { AxiosError, AxiosResponse } from 'axios';
import { TeamDTO } from './team';
import { GetTeamsParams } from '../teams';

/**
 * Represents the response body of a football API request.
 * @template TResponse - The type of the response array.
 * @property {string} get -
 */
export type BodyResponse<TResponse> = {
    get: string;
    parameters: any;
    errors: any;
    results: number;
    response: Array<TResponse>;
};

export type Response<TResponse> = AxiosResponse<BodyResponse<TResponse>>;

const getResponse = <TResponse>(response: AxiosResponse): TResponse[] => {
    return response.data.response;
};

const getError = (error: AxiosError) => {
    return Promise.reject(error.response?.data);
};

export const FootballAPI = {
    getTeams: (params: GetTeamsParams) =>
        axiosInstance
            .get('/teams', { params })
            .then(getResponse<TeamDTO>)
            .catch(getError)
};

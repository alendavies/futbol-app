import { axiosInstance } from '@/lib/axios';
import { AxiosError, AxiosResponse } from 'axios';
import { TeamDTO } from './dtos/team';
import { GetTeamsParams } from './getters/teams';
import { LeagueDTO } from './dtos/league';
import { GetLeaguesParams } from './getters/leagues';
import { GetFixturesParams } from './getters/fixture';
import { FixtureDTO } from './dtos/fixture';

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
            .catch(getError),
    getLeagues: (params: GetLeaguesParams) =>
        axiosInstance
            .get('/leagues', { params })
            .then(getResponse<LeagueDTO>)
            .catch(getError),
    getFixtures: (params: GetFixturesParams) =>
        axiosInstance
            .get('/fixtures', { params })
            .then(getResponse<FixtureDTO>)
            .catch(getError)
};

import { axiosInstance } from '@/lib/axios';
import { Team } from '@/types/Team';
import { CacheAPI } from './cache';
import { TeamDTO } from './dtos/team';

export type GetTeamsParams = {
    league?: string;
    season: string;
};

export const getTeams = (params: GetTeamsParams) =>
    new Promise<Team[]>(async (resolve, reject) => {
        try {
            const teams = await CacheAPI.getTeams();
            teams && resolve(mapTeamsFromDTO(teams));
        } catch (err) {
            reject(err);
        }

        try {
            const teamsAPI = await axiosInstance.get('/teams', {
                params: params
            });
            resolve(mapTeamsFromDTO(teamsAPI.data.response));
        } catch (err) {
            reject(err);
        }
    });

const mapTeamsFromDTO = (teams: TeamDTO[]): Team[] =>
    teams.map(
        (teams: TeamDTO): Team => ({
            id: teams.team.id,
            name: teams.team.name,
            logo: teams.team.logo
        })
    );

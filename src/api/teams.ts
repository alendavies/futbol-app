import { axiosInstance } from '@/lib/axios';
import { Team } from '@/types/Team';
import { CacheAPI } from './cache';
import { TeamDTO } from './dtos/team';
import { FootballAPI } from './dtos/football-api';

export type GetTeamsParams = {
    league?: string;
    season: string;
};

export const getTeams = (params: GetTeamsParams): Promise<Team[]> =>
    new Promise<Team[]>((resolve, reject) => {
        const fetchData = async () => {
            try {
                let teams = await CacheAPI.getTeams();
                if (teams.length) {
                    console.log('Teams from CacheAPI:', teams);
                    resolve(mapTeamsFromDTO(teams));
                } else {
                    teams = await FootballAPI.getTeams(params);

                    CacheAPI.putTeams(teams);

                    console.log('Teams from API:', teams);
                    resolve(mapTeamsFromDTO(teams));
                }
            } catch (err) {
                console.error('Error fetching teams:', err);
                reject(err);
            }
        };

        fetchData();
    });

const mapTeamsFromDTO = (teams: TeamDTO[]): Team[] =>
    teams.map(
        (teams: TeamDTO): Team => ({
            id: teams.team.id,
            name: teams.team.name,
            logo: teams.team.logo
        })
    );

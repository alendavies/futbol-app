import { axiosInstance } from '@/lib/axios';
import { Team } from '@/types/Team';
import { localDB } from './cache';
import { TeamDTO } from './dtos/team';

type GetTeamsParams = {
    league?: string;
    season: string;
};

export const getTeams = (params: GetTeamsParams): Promise<Team[]> =>
    new Promise<Team[]>((resolve, reject) => {
        const fetchData = async () => {
            try {
                const teams = await localDB.getTeams();
                teams.length && resolve(mapTeamsFromDTO(teams));
            } catch (err) {
                console.error('Error fetching teams from localDB:', err);
                reject(err);
            }

            try {
                const teamsAPI = await axiosInstance.get('/teams', {
                    params: params
                });
                localDB.putTeams(teamsAPI.data.response).then(() => {
                    localDB.getTeams().then(res => console.log('Teams from DB:', res));
                });

                const teamMapped = mapTeamsFromDTO(teamsAPI.data.response);
                resolve(teamMapped);
            } catch (err) {
                console.error('Error fetching teams from API:', err);
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

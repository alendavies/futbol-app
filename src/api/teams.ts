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
                if (teams.length) {
                    console.log('Teams from localDB:', teams);
                    resolve(mapTeamsFromDTO(teams));
                } else {
                    const teamsAPI = await axiosInstance.get('/teams', {
                        params: params
                    });

                    localDB.putTeams(teamsAPI.data.response);
                    const teamMapped = mapTeamsFromDTO(teamsAPI.data.response);

                    console.log('Teams from API:', teamMapped);
                    resolve(teamMapped);
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

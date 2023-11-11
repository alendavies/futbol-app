import { Team } from '@/types/Team';
import { CacheAPI } from '../cache';
import { TeamDTO } from '../dtos/team';
import { FootballAPI } from '../config-football-api';
import { Mappers } from '../mappers';

export type GetTeamsParams = {
    league?: string;
    season: string;
};

export const getTeams = (params: GetTeamsParams): Promise<Team[]> =>
    new Promise<Team[]>((resolve, reject) => {
        const fetchData = async () => {
            FootballAPI.getTeams(params)
                .then(teams => {
                    CacheAPI.putTeams(teams);
                    console.log('Teams from API:', teams);
                    resolve(Mappers.mapTeamsFromDTO(teams));
                })
                .catch(() => {
                    CacheAPI.getTeams()
                        .then(teams => {
                            console.log('Teams from CacheAPI:', teams);
                            resolve(Mappers.mapTeamsFromDTO(teams));
                        })
                        .catch(err => {
                            reject(err);
                        });
                });
        };

        fetchData();
    });

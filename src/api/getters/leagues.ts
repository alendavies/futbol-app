import { League } from '@/types/League';
import { CacheAPI } from '../cache';
import { FootballAPI } from '../config-football-api';
import { Mappers } from '../mappers';

export type GetLeaguesParams = {
    country: string;
};

export const getLeagues = (params: GetLeaguesParams): Promise<League[]> =>
    new Promise<League[]>((resolve, reject) => {
        const fetchData = async () => {
            FootballAPI.getLeagues(params)
                .then(leagues => {
                    CacheAPI.putLeagues(leagues);
                    console.log('Leagues from API:', leagues);
                    resolve(Mappers.mapLeaguesFromDTO(leagues));
                })
                .catch(() => {
                    CacheAPI.getLeagues()
                        .then(leagues => {
                            console.log('Leagues from CacheAPI:', leagues);
                            resolve(Mappers.mapLeaguesFromDTO(leagues));
                        })
                        .catch(err => {
                            reject(err);
                        });
                });
        };

        fetchData();
    });

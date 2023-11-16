import { Fixture } from '@/types/Fixture';
import { FootballAPI } from '../config-football-api';
import { CacheAPI } from '../cache';
import { Mappers } from '../mappers';

export type GetFixturesParams = {
    team: string;
    league: string;
    season: string;
    date: string; // "YYYY-MM-DD"
};

export const getFixtures = (params: GetFixturesParams): Promise<Fixture[]> =>
    new Promise<Fixture[]>((resolve, reject) => {
        const fetchData = async () => {
            FootballAPI.getFixtures(params)
                .then(fixtures => {
                    CacheAPI.putFixtures(fixtures);
                    console.log('Fixtures from API:', fixtures);
                    resolve(Mappers.mapFixturesFromDTO(fixtures));
                })
                .catch(() => {
                    CacheAPI.getFixtures()
                        .then(fixtures => {
                            console.log('Fixtures from CacheAPI:', fixtures);
                            resolve(Mappers.mapFixturesFromDTO(fixtures));
                        })
                        .catch(err => {
                            reject(err);
                        });
                });
        };

        fetchData();
    });

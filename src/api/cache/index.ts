import { FixtureDTO } from '../dtos/fixture';
import { LeagueDTO } from '../dtos/league';
import { TeamDTO } from '../dtos/team';
import { db } from './config-db';

export const CacheAPI = {
    getTeams: () =>
        new Promise<TeamDTO[]>((resolve, reject) => {
            db.teams.toArray().then(resolve).catch(reject);
        }),

    putTeams: (teams: TeamDTO[]) =>
        new Promise<void>(async (resolve, reject) => {
            try {
                await db.teams.bulkPut(teams);
                resolve();
            } catch (error) {
                console.error('Error putting teams:', error);
                reject(error);
            }
        }),

    getLeagues: () =>
        new Promise<LeagueDTO[]>((resolve, reject) => {
            db.leagues.toArray().then(resolve).catch(reject);
        }),

    putLeagues: (leagues: LeagueDTO[]) =>
        new Promise<void>(async (resolve, reject) => {
            try {
                await db.leagues.bulkPut(leagues);
                resolve();
            } catch (error) {
                console.error('Error putting leagues:', error);
                reject(error);
            }
        }),

    getFixtures: () =>
        new Promise<FixtureDTO[]>((resolve, reject) => {
            db.fixtures.toArray().then(resolve).catch(reject);
        }),

    putFixtures: (fixtures: FixtureDTO[]) =>
        new Promise<void>(async (resolve, reject) => {
            try {
                await db.fixtures.bulkPut(fixtures);
                resolve();
            } catch (error) {
                console.error('Error putting fixtures:', error);
                reject(error);
            }
        })
};

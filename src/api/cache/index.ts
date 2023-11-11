import { TeamDTO } from '../dtos/team';
import { db } from './config';

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
        })
};

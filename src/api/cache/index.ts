import { TeamDTO } from '../dtos/team';
import { db } from './config';

export const localDB = {
    getTeams: () =>
        new Promise<TeamDTO[]>(async (resolve, reject) => {
            try {
                const teams = await db.teams.toArray();

                resolve(teams);
            } catch (err) {
                reject(err);
            }
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

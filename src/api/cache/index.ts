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
    
    putTeams: () => new Promise(async (resolve, reject) => {
        try {
            
        }
    })
};

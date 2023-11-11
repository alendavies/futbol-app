import { TeamDTO } from '../dtos/team';
import { GetTeamsParams } from '../teams';
import { db } from './config';

export const CacheAPI = {
    getTeams: (params: GetTeamsParams) =>
        new Promise<TeamDTO[]>(async (resolve, reject) => {
            db.teams.toArray().then(resolve).catch(reject);
        })

    // putTeams: () => new Promise(async (resolve, reject) => {
    //     try {

    //     }
    // })
};

import Dexie from 'dexie';
import { TeamDTO } from '../dtos/team';
import { LeagueDTO } from '../dtos/league';
import { FixtureDTO } from '../dtos/fixture';

class LocalFootballAPI extends Dexie {
    teams!: Dexie.Table<TeamDTO, number>;
    leagues!: Dexie.Table<LeagueDTO, number>;
    fixtures!: Dexie.Table<FixtureDTO, number>;

    constructor(name: string) {
        super(name);
        this.version(1).stores({
            teams: '&team.id',
            leagues: '&league.id',
            fixtures: '&fixture.id'
        });
    }
}

export const db = new LocalFootballAPI('LocalFootballAPI');

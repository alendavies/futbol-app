import { Team } from '@/types/Team';
import { TeamDTO } from '../dtos/team';
import { LeagueDTO } from '../dtos/league';
import { League } from '@/types/League';
import { FixtureDTO } from '../dtos/fixture';
import { Fixture } from '@/types/Fixture';

export const Mappers = {
    mapTeamsFromDTO: (teams: TeamDTO[]): Team[] =>
        teams.map(
            (teams: TeamDTO): Team => ({
                id: teams.team.id,
                name: teams.team.name,
                logo: teams.team.logo
            })
        ),
    mapLeaguesFromDTO: (leagues: LeagueDTO[]): League[] =>
        leagues.map(
            (leagues: LeagueDTO): League => ({
                id: leagues.league.id,
                name: leagues.league.name,
                country: leagues.country.name,
                logo: leagues.league.logo,
                flag: leagues.country.flag
            })
        ),
    mapFixturesFromDTO: (fixture: FixtureDTO[]): Fixture[] =>
        fixture.map(
            (fixture: FixtureDTO): Fixture => ({
                local: fixture.teams.home.name,
                local_logo: fixture.teams.home.logo,
                local_score: fixture.goals.home,
                visitor: fixture.teams.away.name,
                visitor_logo: fixture.teams.away.logo,
                visitor_score: fixture.goals.away,
                league: fixture.league.name
            })
        )
};

import { Team } from '@/types/Team';
import { TeamDTO } from '../dtos/team';

export const Mappers = {
    mapTeamsFromDTO: (teams: TeamDTO[]): Team[] =>
        teams.map(
            (teams: TeamDTO): Team => ({
                id: teams.team.id,
                name: teams.team.name,
                logo: teams.team.logo
            })
        )
};
